/**
 * SpeakFree - OPIc & Interview Rapid Thinker & Script Trainer
 * Application Logic & State Management
 */

(function () {
  'use strict';

  // State Management
  const STORAGE_KEY = 'speakfree_user_notes_v1';
  const THEME_KEY = 'speakfree_theme';

  let allQuestions = (typeof OPIC_QUESTIONS !== 'undefined') ? OPIC_QUESTIONS : [];
  let filteredQuestions = [...allQuestions];
  let currentIndex = 0;
  let userNotes = loadUserNotes();

  // Timer State
  let timerInterval = null;
  let timerRemaining = 30;
  let timerRunning = false;

  // Audio / Recorder State
  let mediaRecorder = null;
  let audioChunks = [];
  let isRecording = false;

  // DOM Elements
  const setSelect = document.getElementById('setSelect');
  const categorySelect = document.getElementById('categorySelect');
  const statusFilter = document.getElementById('statusFilter');
  const searchInput = document.getElementById('searchInput');
  const randomBtn = document.getElementById('randomBtn');
  const exportModalBtn = document.getElementById('exportModalBtn');
  const helpModalBtn = document.getElementById('helpModalBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Progress Elements
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');
  const questionIndexBadge = document.getElementById('questionIndexBadge');

  // Question Card Elements
  const qBadgeSet = document.getElementById('qBadgeSet');
  const qBadgeId = document.getElementById('qBadgeId');
  const qBadgeCat = document.getElementById('qBadgeCat');
  const qBadgeType = document.getElementById('qBadgeType');
  const bookmarkBtn = document.getElementById('bookmarkBtn');
  const bookmarkStar = document.getElementById('bookmarkStar');
  const qStatusIndicator = document.getElementById('qStatusIndicator');
  const qOrderNum = document.getElementById('qOrderNum');
  const qText = document.getElementById('qText');

  // Toolbar Elements
  const ttsBtn = document.getElementById('ttsBtn');
  const ttsRate = document.getElementById('ttsRate');
  const timerDisplay = document.getElementById('timerDisplay');
  const timerToggleBtn = document.getElementById('timerToggleBtn');
  const timerPreset = document.getElementById('timerPreset');

  // Recorder Elements
  const recIndicator = document.getElementById('recIndicator');
  const recStatusText = document.getElementById('recStatusText');
  const recordBtn = document.getElementById('recordBtn');
  const audioPlayer = document.getElementById('audioPlayer');

  // Navigation
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Memo Elements
  const quickTagInput = document.getElementById('quickTagInput');
  const addTagBtn = document.getElementById('addTagBtn');
  const tagCloud = document.getElementById('tagCloud');
  const clearTagsBtn = document.getElementById('clearTagsBtn');
  const brainstormNotes = document.getElementById('brainstormNotes');
  const detailedScript = document.getElementById('detailedScript');
  const wordCount = document.getElementById('wordCount');
  const copyScriptBtn = document.getElementById('copyScriptBtn');

  // Templates
  const tplExperienceBtn = document.getElementById('tplExperienceBtn');
  const tplComparisonBtn = document.getElementById('tplComparisonBtn');
  const tplRoleplayBtn = document.getElementById('tplRoleplayBtn');

  // Modals
  const exportModal = document.getElementById('exportModal');
  const closeExportModal = document.getElementById('closeExportModal');
  const helpModal = document.getElementById('helpModal');
  const closeHelpModal = document.getElementById('closeHelpModal');

  // Export Buttons
  const exportMdBtn = document.getElementById('exportMdBtn');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const importJsonInput = document.getElementById('importJsonInput');
  const resetAllDataBtn = document.getElementById('resetAllDataBtn');

  // Initialize
  initTheme();
  populateDropdowns();
  applyFilters();
  setupEventListeners();
  initServerSync();
  window.addEventListener('speakfree:examchange', () => {
    resetTimer();
    if (isRecording && mediaRecorder) mediaRecorder.stop();
  });

  /**
   * Load and Save LocalStorage & Server File Persistence
   */
  let saveToServerTimeout = null;

  function loadUserNotes() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error('Failed to load notes from localStorage', e);
      return {};
    }
  }

  function saveUserNotes(immediate = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userNotes));
      updateProgress();
      updateStatusBadge();

      if (immediate) {
        saveNotesToServer();
      } else {
        debouncedSaveToServer();
      }
    } catch (e) {
      console.error('Failed to save notes to localStorage', e);
    }
  }

  function debouncedSaveToServer() {
    if (saveToServerTimeout) {
      clearTimeout(saveToServerTimeout);
    }
    saveToServerTimeout = setTimeout(() => {
      saveNotesToServer();
    }, 400);
  }

  async function saveNotesToServer() {
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userNotes)
      });
      if (!res.ok) {
        console.warn('Server auto-save status:', res.status);
      }
    } catch (e) {
      // Server offline or static file mode; localStorage acts as backup
    }
  }

  async function initServerSync() {
    try {
      const res = await fetch('/api/notes');
      if (res.ok) {
        const serverNotes = await res.json();
        if (serverNotes && typeof serverNotes === 'object' && Object.keys(serverNotes).length > 0) {
          userNotes = Object.assign({}, userNotes, serverNotes);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(userNotes));
          applyFilters();
        }
      }
    } catch (e) {
      console.log('Server API sync unavailable, using localStorage data.');
    }
  }

  /**
   * Theme Management
   */
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  }

  /**
   * Populate Filters
   */
  function populateDropdowns() {
    // Sets (1 to 30)
    const sets = new Set(allQuestions.map(q => q.set));
    Array.from(sets).sort((a, b) => a - b).forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = `Set ${String(s).padStart(2, '0')}`;
      setSelect.appendChild(opt);
    });

    // Categories
    const categories = new Set(allQuestions.map(q => q.category));
    Array.from(categories).sort().forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
  }

  /**
   * Filter and Search Logic
   */
  function applyFilters() {
    const selSet = setSelect.value;
    const selCat = categorySelect.value;
    const selStatus = statusFilter.value;
    const search = searchInput.value.trim().toLowerCase();

    filteredQuestions = allQuestions.filter(q => {
      if (selSet !== 'all' && q.set !== parseInt(selSet, 10)) return false;
      if (selCat !== 'all' && q.category !== selCat) return false;

      const note = userNotes[q.id];
      const hasContent = note && (
        (note.tags && note.tags.length > 0) ||
        (note.roughNotes && note.roughNotes.trim().length > 0) ||
        (note.detailedScript && note.detailedScript.trim().length > 0)
      );
      const isBookmarked = note && !!note.bookmarked;

      if (selStatus === 'completed' && !hasContent) return false;
      if (selStatus === 'empty' && hasContent) return false;
      if (selStatus === 'bookmarked' && !isBookmarked) return false;

      if (search) {
        const textMatch = q.text.toLowerCase().includes(search);
        const idMatch = q.id.toLowerCase().includes(search);
        const noteMatch = note && (
          (note.roughNotes && note.roughNotes.toLowerCase().includes(search)) ||
          (note.detailedScript && note.detailedScript.toLowerCase().includes(search)) ||
          (note.tags && note.tags.some(t => t.toLowerCase().includes(search)))
        );
        if (!textMatch && !idMatch && !noteMatch) return false;
      }

      return true;
    });

    if (filteredQuestions.length === 0) {
      renderEmptyState();
    } else {
      if (currentIndex >= filteredQuestions.length) {
        currentIndex = 0;
      }
      renderCurrentQuestion();
    }

    updateProgress();
  }

  /**
   * Render Question & Notes
   */
  function renderCurrentQuestion() {
    if (filteredQuestions.length === 0) return;

    const q = filteredQuestions[currentIndex];
    qBadgeSet.textContent = `SET ${String(q.set).padStart(2, '0')}`;
    qBadgeId.textContent = q.id;
    qBadgeCat.textContent = q.category;
    qBadgeType.textContent = q.type;

    qOrderNum.textContent = `문항 ${currentIndex + 1} / ${filteredQuestions.length} (세트순번: Q${String(q.sourceNumber).padStart(2, '0')})`;
    qText.textContent = q.text;

    // Load saved notes for this question
    const note = userNotes[q.id] || { tags: [], roughNotes: '', detailedScript: '', bookmarked: false };

    // Bookmark star
    bookmarkStar.textContent = note.bookmarked ? '★' : '☆';
    bookmarkStar.style.color = note.bookmarked ? '#f59e0b' : 'inherit';

    // Tags
    renderTags(note.tags || []);

    // Rough notes
    brainstormNotes.value = note.roughNotes || '';

    // Detailed script
    detailedScript.value = note.detailedScript || '';
    updateWordCount();

    // Status indicator
    updateStatusBadge();

    // Reset audio player
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.style.display = 'none';
      audioPlayer.src = '';
    }

    // Reset thinking timer
    resetTimer();
  }

  function renderEmptyState() {
    qBadgeSet.textContent = 'SET --';
    qBadgeId.textContent = 'EMPTY';
    qBadgeCat.textContent = 'None';
    qBadgeType.textContent = 'None';
    qOrderNum.textContent = '문항 0 / 0';
    qText.textContent = '조건에 일치하는 질문이 없습니다. 상단 필터를 변경하거나 검색어를 지워보세요.';
    tagCloud.innerHTML = '';
    brainstormNotes.value = '';
    detailedScript.value = '';
    wordCount.textContent = '0 words';
  }

  function renderTags(tags) {
    tagCloud.innerHTML = '';
    tags.forEach((tag, idx) => {
      const chip = document.createElement('span');
      chip.className = 'idea-chip';
      chip.innerHTML = `<span>#${escapeHtml(tag)}</span><span class="chip-del" data-idx="${idx}">&times;</span>`;
      tagCloud.appendChild(chip);
    });
  }

  function updateStatusBadge() {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];
    const note = userNotes[q.id];

    let hasTags = note && note.tags && note.tags.length > 0;
    let hasRough = note && note.roughNotes && note.roughNotes.trim().length > 0;
    let hasScript = note && note.detailedScript && note.detailedScript.trim().length > 0;

    const label = qStatusIndicator.querySelector('.status-label');

    if (hasScript) {
      qStatusIndicator.className = 'status-indicator saved';
      label.textContent = '답변 완성';
    } else if (hasTags || hasRough) {
      qStatusIndicator.className = 'status-indicator editing';
      label.textContent = '아이디어 메모됨';
    } else {
      qStatusIndicator.className = 'status-indicator empty';
      label.textContent = '미작성';
    }
  }

  function updateProgress() {
    const totalCount = allQuestions.length;
    let filledCount = 0;

    allQuestions.forEach(q => {
      const note = userNotes[q.id];
      if (note && (
        (note.tags && note.tags.length > 0) ||
        (note.roughNotes && note.roughNotes.trim().length > 0) ||
        (note.detailedScript && note.detailedScript.trim().length > 0)
      )) {
        filledCount++;
      }
    });

    const percent = Math.round((filledCount / totalCount) * 100);
    progressBar.style.width = `${percent}%`;

    const selSet = setSelect.value;
    if (selSet !== 'all') {
      const setTotal = allQuestions.filter(q => q.set === parseInt(selSet, 10)).length;
      let setFilled = 0;
      allQuestions.filter(q => q.set === parseInt(selSet, 10)).forEach(q => {
        const note = userNotes[q.id];
        if (note && (
          (note.tags && note.tags.length > 0) ||
          (note.roughNotes && note.roughNotes.trim().length > 0) ||
          (note.detailedScript && note.detailedScript.trim().length > 0)
        )) {
          setFilled++;
        }
      });
      progressText.textContent = `Set ${selSet} 진행률: ${setFilled} / ${setTotal} (${Math.round((setFilled / setTotal) * 100)}%)  |  전체: ${filledCount} / ${totalCount} (${percent}%)`;
    } else {
      progressText.textContent = `전체 준비 진행률: ${filledCount} / ${totalCount} 완료 (${percent}%)`;
    }

    questionIndexBadge.textContent = filteredQuestions.length > 0 
      ? `${currentIndex + 1} / ${filteredQuestions.length}`
      : '0 / 0';
  }

  function updateWordCount() {
    const text = detailedScript.value.trim();
    const count = text ? text.split(/\s+/).length : 0;
    wordCount.textContent = `${count} words`;
  }

  /**
   * Navigation Functions
   */
  function goToPrevQuestion() {
    if (filteredQuestions.length <= 1) return;
    saveCurrentNotesToState();
    currentIndex = (currentIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
    renderCurrentQuestion();
  }

  function goToNextQuestion() {
    if (filteredQuestions.length <= 1) return;
    saveCurrentNotesToState();
    currentIndex = (currentIndex + 1) % filteredQuestions.length;
    renderCurrentQuestion();
  }

  function saveCurrentNotesToState() {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];
    if (!userNotes[q.id]) {
      userNotes[q.id] = { tags: [], roughNotes: '', detailedScript: '', bookmarked: false };
    }
    userNotes[q.id].roughNotes = brainstormNotes.value;
    userNotes[q.id].detailedScript = detailedScript.value;
    userNotes[q.id].lastUpdated = Date.now();
    saveUserNotes();
  }

  /**
   * Tag Management
   */
  function addTag() {
    const tag = quickTagInput.value.trim();
    if (!tag || filteredQuestions.length === 0) return;

    const q = filteredQuestions[currentIndex];
    if (!userNotes[q.id]) {
      userNotes[q.id] = { tags: [], roughNotes: '', detailedScript: '', bookmarked: false };
    }
    if (!userNotes[q.id].tags) {
      userNotes[q.id].tags = [];
    }

    if (!userNotes[q.id].tags.includes(tag)) {
      userNotes[q.id].tags.push(tag);
      saveUserNotes();
      renderTags(userNotes[q.id].tags);
    }
    quickTagInput.value = '';
    quickTagInput.focus();
  }

  function removeTag(idx) {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];
    if (userNotes[q.id] && userNotes[q.id].tags) {
      userNotes[q.id].tags.splice(idx, 1);
      saveUserNotes();
      renderTags(userNotes[q.id].tags);
    }
  }

  /**
   * Text-To-Speech (TTS)
   */
  function playQuestionTTS() {
    if (filteredQuestions.length === 0) return;
    if (!('speechSynthesis' in window)) {
      alert('현재 브라우저에서는 음성 듣기(TTS)를 지원하지 않습니다.');
      return;
    }

    window.SpeakFreeSpeech.cancel();

    const text = filteredQuestions[currentIndex].text;
    ttsBtn.classList.add('playing');
    window.SpeakFreeSpeech.speak(text, {
      rate: parseFloat(ttsRate.value) || 1.0,
      onend: () => ttsBtn.classList.remove('playing'),
      onerror: () => ttsBtn.classList.remove('playing')
    });
  }

  /**
   * Timer Functionality
   */
  function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerRemaining = parseInt(timerPreset.value, 10) || 30;
    updateTimerDisplay();
    timerToggleBtn.textContent = '시작';
    timerDisplay.classList.remove('danger');
  }

  function toggleTimer() {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      timerToggleBtn.textContent = '재개';
    } else {
      timerRunning = true;
      timerToggleBtn.textContent = '일시정지';
      timerInterval = setInterval(() => {
        timerRemaining--;
        updateTimerDisplay();

        if (timerRemaining <= 5 && timerRemaining > 0) {
          timerDisplay.classList.add('danger');
        }

        if (timerRemaining <= 0) {
          clearInterval(timerInterval);
          timerRunning = false;
          timerToggleBtn.textContent = '다시';
          timerDisplay.classList.remove('danger');
          // Short sound or vibration feedback
          playBeep();
        }
      }, 1000);
    }
  }

  function updateTimerDisplay() {
    const mins = Math.floor(timerRemaining / 60);
    const secs = timerRemaining % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function playBeep() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // AudioContext not allowed without user gesture
    }
  }

  /**
   * Voice Recording Feature
   */
  async function toggleRecording() {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => {
          if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          audioPlayer.src = audioUrl;
          audioPlayer.style.display = 'block';
          audioPlayer.play();
        };

        mediaRecorder.start();
        isRecording = true;
        recIndicator.classList.add('recording');
        recStatusText.textContent = '녹음 중... (스피킹 진행)';
        recordBtn.innerHTML = '<span>⏹️ 녹음 중지</span>';
      } catch (err) {
        alert('마이크 접근 권한이 필요합니다: ' + err.message);
      }
    } else {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
      isRecording = false;
      recIndicator.classList.remove('recording');
      recStatusText.textContent = '녹음 완료: 바로 들어보기';
      recordBtn.innerHTML = '<span>🎤 다시 녹음</span>';
    }
  }

  /**
   * Export & Import Handlers
   */
  function exportMarkdown() {
    let md = `# SpeakFree OPIc & Interview Study Notes\n\n`;
    md += `생성 일시: ${new Date().toLocaleString()}\n`;
    md += `전체 420문항 중 기록 요약\n\n---\n\n`;

    allQuestions.forEach((q, idx) => {
      const note = userNotes[q.id];
      const hasContent = note && (
        (note.tags && note.tags.length > 0) ||
        (note.roughNotes && note.roughNotes.trim().length > 0) ||
        (note.detailedScript && note.detailedScript.trim().length > 0)
      );

      if (hasContent || (note && note.bookmarked)) {
        md += `## [Set ${q.set}] ${q.id} - ${q.category} (${q.type})${note && note.bookmarked ? ' ⭐' : ''}\n`;
        md += `**Q:** ${q.text}\n\n`;
        if (note.tags && note.tags.length > 0) {
          md += `**💡 핵심 키워드:** ${note.tags.map(t => `#${t}`).join(', ')}\n\n`;
        }
        if (note.roughNotes && note.roughNotes.trim()) {
          md += `**⚡ 즉흥 아이디어 메모:**\n${note.roughNotes.trim()}\n\n`;
        }
        if (note.detailedScript && note.detailedScript.trim()) {
          md += `**📝 상세 답변 스크립트:**\n${note.detailedScript.trim()}\n\n`;
        }
        md += `---\n\n`;
      }
    });

    downloadFile(md, `SpeakFree_OPIc_Notes_${new Date().toISOString().slice(0, 10)}.md`, 'text/markdown;charset=utf-8');
  }

  function exportJSON() {
    const backupData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      userNotes: userNotes
    };
    downloadFile(JSON.stringify(backupData, null, 2), `SpeakFree_Backup_${new Date().toISOString().slice(0, 10)}.json`, 'application/json');
  }

  function exportCSV() {
    let csv = '\uFEFFid,set,category,type,question,keywords,rough_notes,detailed_script,bookmarked\n';
    allQuestions.forEach(q => {
      const note = userNotes[q.id] || {};
      const keywords = (note.tags || []).join('; ');
      const rough = (note.roughNotes || '').replace(/"/g, '""');
      const script = (note.detailedScript || '').replace(/"/g, '""');
      const qText = q.text.replace(/"/g, '""');
      csv += `"${q.id}",${q.set},"${q.category}","${q.type}","${qText}","${keywords}","${rough}","${script}",${note.bookmarked ? 'YES' : 'NO'}\n`;
    });
    downloadFile(csv, `SpeakFree_Spreadsheet_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8');
  }

  function importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);
        if (data && data.userNotes) {
          userNotes = Object.assign({}, userNotes, data.userNotes);
          saveUserNotes(true);
          applyFilters();
          alert('데이터를 성공적으로 복원했습니다!');
          exportModal.classList.remove('open');
        } else {
          alert('올바른 SpeakFree 백업 파일 형식이 아닙니다.');
        }
      } catch (err) {
        alert('파일을 읽는 중 오류가 발생했습니다: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  /**
   * Helper Insertions & Templates
   */
  function insertTextAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
    saveCurrentNotesToState();
    updateWordCount();
  }

  /**
   * Event Listeners Setup
   */
  function setupEventListeners() {
    // Navigation Buttons
    prevBtn.addEventListener('click', goToPrevQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);

    // Filter Controls
    setSelect.addEventListener('change', () => { currentIndex = 0; applyFilters(); });
    categorySelect.addEventListener('change', () => { currentIndex = 0; applyFilters(); });
    statusFilter.addEventListener('change', () => { currentIndex = 0; applyFilters(); });
    searchInput.addEventListener('input', () => { currentIndex = 0; applyFilters(); });

    // Random Question Button
    randomBtn.addEventListener('click', () => {
      if (filteredQuestions.length > 1) {
        saveCurrentNotesToState();
        let nextIdx = Math.floor(Math.random() * filteredQuestions.length);
        if (nextIdx === currentIndex) nextIdx = (nextIdx + 1) % filteredQuestions.length;
        currentIndex = nextIdx;
        renderCurrentQuestion();
      }
    });

    // Bookmark Toggle
    bookmarkBtn.addEventListener('click', () => {
      if (filteredQuestions.length === 0) return;
      const q = filteredQuestions[currentIndex];
      if (!userNotes[q.id]) {
        userNotes[q.id] = { tags: [], roughNotes: '', detailedScript: '', bookmarked: false };
      }
      userNotes[q.id].bookmarked = !userNotes[q.id].bookmarked;
      saveUserNotes();
      bookmarkStar.textContent = userNotes[q.id].bookmarked ? '★' : '☆';
      bookmarkStar.style.color = userNotes[q.id].bookmarked ? '#f59e0b' : 'inherit';
    });

    // Tag Handlers
    addTagBtn.addEventListener('click', addTag);
    quickTagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
      }
    });

    tagCloud.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip-del')) {
        const idx = parseInt(e.target.dataset.idx, 10);
        removeTag(idx);
      }
    });

    clearTagsBtn.addEventListener('click', () => {
      if (filteredQuestions.length === 0) return;
      const q = filteredQuestions[currentIndex];
      if (userNotes[q.id]) {
        userNotes[q.id].tags = [];
        saveUserNotes();
        renderTags([]);
      }
    });

    // Rough Notes Auto-Save
    brainstormNotes.addEventListener('input', () => {
      saveCurrentNotesToState();
    });

    // Detailed Script Auto-Save
    detailedScript.addEventListener('input', () => {
      saveCurrentNotesToState();
      updateWordCount();
    });

    // Copy Script
    copyScriptBtn.addEventListener('click', () => {
      if (!detailedScript.value.trim()) return;
      navigator.clipboard.writeText(detailedScript.value).then(() => {
        copyScriptBtn.textContent = '복사됨!';
        setTimeout(() => { copyScriptBtn.textContent = '복사'; }, 1500);
      });
    });

    // Audio & Timer
    ttsBtn.addEventListener('click', playQuestionTTS);
    timerToggleBtn.addEventListener('click', toggleTimer);
    timerPreset.addEventListener('change', resetTimer);
    recordBtn.addEventListener('click', toggleRecording);

    // Helper Fillers Click
    document.querySelectorAll('.helper-btn[data-insert]').forEach(btn => {
      btn.addEventListener('click', () => {
        const textToInsert = btn.getAttribute('data-insert');
        // Insert into detailedScript if focused, otherwise roughNotes
        if (document.activeElement === detailedScript) {
          insertTextAtCursor(detailedScript, textToInsert);
        } else {
          insertTextAtCursor(brainstormNotes, textToInsert);
        }
      });
    });

    // Framework Templates
    tplExperienceBtn.addEventListener('click', () => {
      const tpl = `[1. 서론 & 주제 제시]\nWell, let me tell you about...\n\n[2. 배경 & 에피소드 계기]\nIt happened about a few months ago when...\n\n[3. 특별했던 사건/세부 경험]\nWhat made it really unforgettable was...\n\n[4. 마무리 & 느낀 점]\nLooking back, it was truly a memorable experience because...`;
      insertTextAtCursor(detailedScript, (detailedScript.value ? '\n\n' : '') + tpl);
    });

    tplComparisonBtn.addEventListener('click', () => {
      const tpl = `[1. 서론: 전반적인 변화]\nThings have definitely changed a lot over the years.\n\n[2. 과거의 모습/경험]\nIn the past, when I was younger, people used to...\n\n[3. 현재의 모습]\nHowever, these days, it has become much more...\n\n[4. 핵심 차이점 및 나의 생각]\nThe biggest difference is that... Overall, I personally prefer...`;
      insertTextAtCursor(detailedScript, (detailedScript.value ? '\n\n' : '') + tpl);
    });

    tplRoleplayBtn.addEventListener('click', () => {
      const tpl = `[1. 전화/방문 인사 및 상황 설명]\nHi there, I'm calling because I have a quick question regarding...\n\n[2. 3~4가지 구체적인 질문]\nFirst, could you let me know...\nSecond, is it possible to...\nAlso, what are the options for...\n\n[3. 문제 발생 및 사과]\nI'm terribly sorry, but something unexpected came up...\n\n[4. 2~3가지 해결 대안 제시]\nSo, I was wondering if we could either... or perhaps... Which one works better for you?`;
      insertTextAtCursor(detailedScript, (detailedScript.value ? '\n\n' : '') + tpl);
    });

    // Modals
    exportModalBtn.addEventListener('click', () => exportModal.classList.add('open'));
    closeExportModal.addEventListener('click', () => exportModal.classList.remove('open'));
    helpModalBtn.addEventListener('click', () => helpModal.classList.add('open'));
    closeHelpModal.addEventListener('click', () => helpModal.classList.remove('open'));

    window.addEventListener('click', (e) => {
      if (e.target === exportModal) exportModal.classList.remove('open');
      if (e.target === helpModal) helpModal.classList.remove('open');
    });

    // Export Actions
    exportMdBtn.addEventListener('click', exportMarkdown);
    exportJsonBtn.addEventListener('click', exportJSON);
    exportCsvBtn.addEventListener('click', exportCSV);
    importJsonInput.addEventListener('change', importJSON);

    resetAllDataBtn.addEventListener('click', () => {
      if (confirm('정말로 작성한 모든 메모와 스크립트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        userNotes = {};
        saveUserNotes(true);
        applyFilters();
        alert('모든 데이터가 초기화되었습니다.');
        exportModal.classList.remove('open');
      }
    });

    // Theme Toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', handleGlobalShortcuts);
  }

  /**
   * Keyboard Shortcuts Handler
   * Addresses user requirement: "다음 화살표 키를 누르면 빠르게 질문 전환"
   */
  function handleGlobalShortcuts(e) {
    if (document.body.dataset.exam === 'toeic') return;
    const activeEl = document.activeElement;
    const isEditing = activeEl && (activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'INPUT');

    // 1. Alt + Right Arrow (Always Next Question, even when typing)
    if (e.altKey && (e.key === 'ArrowRight' || e.keyCode === 39)) {
      e.preventDefault();
      goToNextQuestion();
      return;
    }

    // 2. Alt + Left Arrow (Always Prev Question, even when typing)
    if (e.altKey && (e.key === 'ArrowLeft' || e.keyCode === 37)) {
      e.preventDefault();
      goToPrevQuestion();
      return;
    }

    // 3. Ctrl + Enter (Save & Go to Next Question)
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      goToNextQuestion();
      return;
    }

    // 4. Alt + L (Play TTS)
    if (e.altKey && (e.key === 'l' || e.key === 'L')) {
      e.preventDefault();
      playQuestionTTS();
      return;
    }

    // 5. Alt + R (Random Question)
    if (e.altKey && (e.key === 'r' || e.key === 'R')) {
      e.preventDefault();
      randomBtn.click();
      return;
    }

    // 6. Alt + B (Toggle Bookmark)
    if (e.altKey && (e.key === 'b' || e.key === 'B')) {
      e.preventDefault();
      bookmarkBtn.click();
      return;
    }

    // 7. Ctrl + Space (Toggle Timer)
    if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
      e.preventDefault();
      toggleTimer();
      return;
    }

    // 8. Esc (Blur active input for quick arrow-key navigation)
    if (e.key === 'Escape') {
      if (isEditing) {
        activeEl.blur();
      }
      exportModal.classList.remove('open');
      helpModal.classList.remove('open');
      return;
    }

    // 9. Bare Arrow Keys (Left / Right) when NOT actively editing text
    if (!isEditing) {
      if (e.key === 'ArrowRight' || e.keyCode === 39) {
        e.preventDefault();
        goToNextQuestion();
      } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        e.preventDefault();
        goToPrevQuestion();
      }
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

})();
