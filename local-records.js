(function () {
  'use strict';
  const keys = ['speakfree_toeic_custom_templates_v1', 'speakfree_toeic_original_memory_v1', 'speakfree_toeic_universal_memory_v1', 'speakfree_toeic_universal_templates_v1'];
  const pending = new Map();
  let sending = false;
  function status(message) {
    for (const id of ['ttDiskStatus', 'smDiskStatus', 'utDiskStatus']) {
      const el = document.getElementById(id);
      if (el) el.textContent = message;
    }
  }
  async function flush() {
    if (sending || !pending.size) return;
    sending = true;
    const batch = Object.fromEntries(pending);
    pending.clear();
    try {
      const response = await fetch('/api/toeic-records', {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(batch)
      });
      if (!response.ok) throw Error();
      status('컴퓨터 파일에 자동 저장되었습니다.');
    } catch (_) {
      for (const [key, value] of Object.entries(batch)) if (!pending.has(key)) pending.set(key, value);
      status('파일 저장을 재시도 중입니다. 브라우저에는 저장되어 있습니다.');
      setTimeout(flush, 3000);
    } finally {
      sending = false;
    }
    if (pending.size) setTimeout(flush, 500);
  }
  const records = window.SpeakFreeRecords = {
    ready: null,
    save(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      if (location.protocol === 'file:') return;
      pending.set(key, value);
      status('컴퓨터 파일에 저장 중…');
      void flush();
    }
  };
  records.ready = (async () => {
    if (location.protocol === 'file:') return;
    try {
      const response = await fetch('/api/toeic-records', {cache: 'no-store'});
      if (!response.ok) throw Error();
      const disk = await response.json();
      for (const key of keys) {
        if (Object.hasOwn(disk, key)) localStorage.setItem(key, JSON.stringify(disk[key]));
        else {
          const raw = localStorage.getItem(key);
          if (raw) pending.set(key, JSON.parse(raw));
        }
      }
      void flush();
    } catch (_) {
      window.addEventListener('DOMContentLoaded', () => status('파일을 불러오지 못했습니다. 브라우저 기록을 사용합니다.'));
    }
  })();
  window.addEventListener('pagehide', () => {
    if (pending.size) navigator.sendBeacon('/api/toeic-records', new Blob([JSON.stringify(Object.fromEntries(pending))], {type: 'application/json'}));
  });
})();
