const fs = require('fs');

const content = fs.readFileSync('raw_questions.csv', 'utf8');

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const results = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line handling quotes
    const row = [];
    let inQuote = false;
    let token = '';
    for (let c = 0; c < line.length; c++) {
      const ch = line[c];
      if (ch === '"') {
        inQuote = !inQuote;
      } else if (ch === ',' && !inQuote) {
        row.push(token.trim());
        token = '';
      } else {
        token += ch;
      }
    }
    row.push(token.trim());
    
    if (row.length >= 5) {
      const id = row[0];
      const set = parseInt(row[1], 10);
      const order = parseInt(row[2], 10);
      const source_number = parseInt(row[3], 10);
      const textParts = row.slice(4);
      let text = textParts.join(',').replace(/^"|"$/g, '').trim();
      
      // Categorize question
      let category = 'General';
      const lower = text.toLowerCase();
      if (lower.includes('weather') || lower.includes('season')) category = 'Weather & Seasons';
      else if (lower.includes('house') || lower.includes('home') || lower.includes('room') || lower.includes('furniture')) category = 'Housing & Home';
      else if (lower.includes('restaurant') || lower.includes('food') || lower.includes('dish') || lower.includes('ate out') || lower.includes('take-out') || lower.includes('delivery')) category = 'Food & Dining';
      else if (lower.includes('movie') || lower.includes('theater') || lower.includes('actor') || lower.includes('actress')) category = 'Movies & Entertainment';
      else if (lower.includes('music') || lower.includes('concert') || lower.includes('singer') || lower.includes('composer') || lower.includes('mp3')) category = 'Music & Hobbies';
      else if (lower.includes('beach') || lower.includes('park') || lower.includes('camping')) category = 'Nature & Outdoors';
      else if (lower.includes('travel') || lower.includes('vacation') || lower.includes('abroad') || lower.includes('trip') || lower.includes('hotel') || lower.includes('flight')) category = 'Travel & Vacation';
      else if (lower.includes('bank')) category = 'Banking & Services';
      else if (lower.includes('cafe') || lower.includes('coffee')) category = 'Cafe & Coffee';
      else if (lower.includes('phone') || lower.includes('technology') || lower.includes('internet') || lower.includes('gadget')) category = 'Technology & Phone';
      else if (lower.includes('recycle') || lower.includes('recycling')) category = 'Recycling & Environment';
      else if (lower.includes('clothes') || lower.includes('fashion') || lower.includes('hair salon') || lower.includes('haircut')) category = 'Fashion & Routine';
      else if (lower.includes('health') || lower.includes('doctor') || lower.includes('gym') || lower.includes('healthy')) category = 'Health & Medical';
      else if (lower.includes('gathering') || lower.includes('celebration') || lower.includes('party') || lower.includes('holiday')) category = 'Gatherings & Holidays';
      else if (lower.includes('transportation') || lower.includes('car') || lower.includes('subway') || lower.includes('bus')) category = 'Transportation';
      else if (lower.includes('industry') || lower.includes('company') || lower.includes('career') || lower.includes('interview') || lower.includes('job')) category = 'Work & Career';
      else if (lower.includes('bar ') || lower.includes('bars ') || lower.includes('pub')) category = 'Bars & Nightlife';

      let type = '묘사/루틴';
      if (lower.includes('act it out') || lower.includes('role') || lower.includes('call ') || lower.includes('ask ') || lower.includes('suggest 2 or 3') || lower.includes('alternatives')) {
        type = '롤플레잉';
      } else if (lower.includes('compare') || lower.includes('difference') || lower.includes('change over') || lower.includes('how have') || lower.includes('past') || lower.includes('child')) {
        type = '과거비교/변화';
      } else if (lower.includes('problem') || lower.includes('issue') || lower.includes('unexpected') || lower.includes('memorable') || lower.includes('accident') || lower.includes('unforgettable') || lower.includes('last time')) {
        type = '경험/돌발/이슈';
      }

      results.push({
        id,
        set,
        order,
        sourceNumber: source_number,
        text,
        category,
        type
      });
    }
  }
  return results;
}

const data = parseCSV(content);
console.log('Total parsed questions:', data.length);

const jsContent = '/**\n * 420 OPIc Practice Questions Dataset\n * Generated automatically from user script\n */\nconst OPIC_QUESTIONS = ' + JSON.stringify(data, null, 2) + ';\n\nif (typeof module !== "undefined") { module.exports = { OPIC_QUESTIONS }; }\n';
fs.writeFileSync('questions.js', jsContent, 'utf8');
console.log('questions.js successfully created!');
