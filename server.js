const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const NOTES_FILE = path.join(__dirname, 'user_notes.json');
const RECORDS_FILE = path.join(__dirname, 'toeic_records.json');
const RECORD_KEYS = ['speakfree_toeic_custom_templates_v1', 'speakfree_toeic_original_memory_v1', 'speakfree_toeic_universal_memory_v1', 'speakfree_toeic_universal_templates_v1'];

const MIME_TYPES = {
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0];
  if (reqUrl === '/toeic_records.json' || reqUrl === '/toeic_records.json.tmp') {
    res.writeHead(403); res.end(); return;
  }
  if (reqUrl === '/api/toeic-records') {
    const reply = (code, data) => {
      res.writeHead(code, {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'});
      res.end(JSON.stringify(data));
    };
    const read = () => {
      try { return JSON.parse(fs.readFileSync(RECORDS_FILE, 'utf8')); }
      catch (err) { if (err.code === 'ENOENT') return {}; throw err; }
    };
    if (req.method === 'GET') {
      try { reply(200, read()); } catch (_) { reply(500, {error: 'Cannot read records'}); }
      return;
    }
    if (req.method !== 'POST') { reply(405, {error: 'Method not allowed'}); return; }
    if (req.headers.origin && req.headers.origin !== `http://${req.headers.host}`) {
      reply(403, {error: 'Origin not allowed'}); return;
    }
    let chunks = [], size = 0, tooLarge = false;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 10 * 1024 * 1024) {
        if (!tooLarge) reply(413, {error: 'Records too large'});
        tooLarge = true; return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (tooLarge) return;
      let incoming;
      try {
        incoming = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        if (!incoming || Array.isArray(incoming) || typeof incoming !== 'object') throw Error();
        for (const [key, value] of Object.entries(incoming)) {
          if (!RECORD_KEYS.includes(key) || !value || typeof value !== 'object' || Array.isArray(value)) throw Error();
          if (key === RECORD_KEYS[0] && (!Array.isArray(value.templates) || !value.drafts || !value.grades)) throw Error();
          if (key === RECORD_KEYS[3] && (!Array.isArray(value.templates) || value.templates.length > 1000 || value.templates.some(c => !c || !/^universal-[a-z0-9-]+$/.test(c.id) || !['2','3','4','5','common'].includes(c.part) || typeof c.title !== 'string' || !c.title.trim() || typeof c.en !== 'string' || !c.en.trim() || typeof c.section !== 'string' || typeof c.notes !== 'string'))) throw Error();
          if ([RECORD_KEYS[1],RECORD_KEYS[2]].includes(key) && Object.values(value).some(g => !['known', 'again'].includes(g))) throw Error();
        }
      } catch (_) { reply(400, {error: 'Invalid records'}); return; }
      try {
        const next = {...read(), ...incoming};
        fs.writeFileSync(RECORDS_FILE + '.tmp', JSON.stringify(next, null, 2), 'utf8');
        fs.renameSync(RECORDS_FILE + '.tmp', RECORDS_FILE);
        reply(200, {success: true});
      } catch (_) { reply(500, {error: 'Cannot save records'}); }
    });
    return;
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route: GET /api/notes
  if (reqUrl === '/api/notes' && req.method === 'GET') {
    fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({}));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: err.message }));
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data || '{}');
      }
    });
    return;
  }

  // API Route: POST /api/notes
  if (reqUrl === '/api/notes' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        // Validate JSON
        const parsed = JSON.parse(body);
        const formattedJson = JSON.stringify(parsed, null, 2);

        fs.writeFile(NOTES_FILE, formattedJson, 'utf8', err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true }));
          }
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, reqUrl === '/' ? 'index.html' : reqUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`SpeakFree server running at http://localhost:${PORT}`);
});
