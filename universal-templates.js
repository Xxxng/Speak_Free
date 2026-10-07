(async function () {
  'use strict';
  await window.SpeakFreeRecords.ready;
  const KEY = 'speakfree_toeic_universal_memory_v1';
  const CATALOG_KEY = 'speakfree_toeic_universal_templates_v1';
  const copy = value => JSON.parse(JSON.stringify(value));
  function validateCatalog(value) {
    if (!value || !Array.isArray(value.templates) || value.templates.length > 1000) throw Error();
    const ids = new Set();
    for (const c of value.templates) {
      if (!c || typeof c.id !== 'string' || !/^universal-[a-z0-9-]+$/.test(c.id) || ids.has(c.id) || !['2','3','4','5','common'].includes(c.part)) throw Error();
      ids.add(c.id);
      for (const [field,max] of [['title',150],['section',300],['en',20000],['notes',10000]]) if (typeof c[field] !== 'string' || c[field].length > max) throw Error();
      if (!c.title.trim() || !c.en.trim()) throw Error();
    }
    return copy(value.templates);
  }
  let data = copy(window.UNIVERSAL_TEMPLATES), editing = null, undo = null;
  try {const saved = localStorage.getItem(CATALOG_KEY);if(saved)data=validateCatalog(JSON.parse(saved));} catch (_) {}
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let memory = {}, part = '2', filter = 'all', search = '', index = 0, test = false, revealed = false;
  try { memory = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) {}
  if (!memory || typeof memory !== 'object' || Array.isArray(memory)) memory = {};
  const tab = document.createElement('button');
  tab.id = 'tsUniversalTab'; tab.className = 'btn btn-ghost';
  tab.textContent = '만능 템플릿'; tab.setAttribute('aria-pressed', 'false');
  document.querySelector('.ts-track').append(tab);
  const panel = document.createElement('section'); panel.id = 'tsUniversalPanel'; panel.hidden = true;
  panel.innerHTML = `<div class="tt-intro"><h3>만능 템플릿 암기</h3><p>사진 묘사·질문 답변·정보 전달·의견 말하기의 답변 구조를 익히세요. 대괄호와 밑줄은 상황에 맞게 채우는 빈칸입니다.</p></div>
    <div class="tt-editor-toolbar"><button id="utNew" class="btn btn-primary">＋ 새 만능 템플릿</button><button id="utUndo" class="btn btn-ghost" hidden>삭제 취소</button></div>
    <div id="utParts" class="ts-modes">${['2','3','4','5','common'].map(p=>`<button data-part="${p}">${p==='common'?'Part 3·5 공용':'Part '+p}</button>`).join('')}</div>
    <div class="ts-layout"><section><div class="ts-toolbar"><div id="utModes" class="ts-modes"><button data-mode="learn">① 구조 익히기</button><button data-mode="test">② 가리고 말하기</button></div><select id="utFilter" class="select-input" aria-label="템플릿 암기 상태"><option value="all">전체 템플릿</option><option value="again">다시 외울 템플릿</option><option value="known">외운 템플릿</option></select></div>
    <input id="utSearch" class="search-input" placeholder="유형·영어 표현 검색" aria-label="만능 템플릿 검색"><p id="utProgress" class="ts-progress"></p><article id="utCard" class="ts-card"></article>
    <div class="ts-navigation"><button id="utPrev" class="btn btn-ghost">← 이전</button><button id="utNext" class="btn btn-primary">다음 →</button></div><p class="ts-small">← → 카드 이동 · 스페이스: 테스트 정답 확인</p></section>
    <aside class="ts-sidebar"><h3>유형별 템플릿 목록</h3><div id="utList" class="ts-list"></div><div class="ts-backup"><button id="utExport" class="btn btn-ghost">템플릿·암기 기록 백업</button><label class="btn btn-ghost">복원<input id="utImport" type="file" accept=".json" hidden></label></div><p id="utStatus" class="ts-small" role="status"></p><p id="utDiskStatus" class="ts-small" role="status">템플릿과 암기 기록을 컴퓨터 파일에 자동 저장합니다.</p></aside></div>`;
  document.getElementById('tsSentencesPanel').after(panel);
  const $ = id => document.getElementById(id);
  const stop = () => window.SpeakFreeSpeech.cancel();
  const cards = () => data.filter(c => c.part === part && (filter === 'all' || memory[c.id] === filter) && `${c.section} ${c.title} ${c.en}`.toLowerCase().includes(search));
  function render() {
    editing = null;
    const pool = cards(), all = data.filter(c=>c.part===part);
    index = Math.max(0, Math.min(index, pool.length-1));
    $('utProgress').textContent = `외운 템플릿 ${all.filter(c=>memory[c.id]==='known').length} / ${all.length} · 현재 ${pool.length?index+1:0} / ${pool.length}`;
    $('utParts').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.part===part)));
    $('utModes').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.mode==='test')===test)));
    $('utPrev').disabled = $('utNext').disabled = pool.length < 2;
    $('utList').innerHTML = pool.map((c,i)=>`<button data-index="${i}" aria-current="${i===index}"><span>${i+1}</span><div><strong>${esc(c.title)}</strong><small>${esc(c.section)}</small></div><em>${memory[c.id]==='known'?'✓':memory[c.id]==='again'?'↻':''}</em></button>`).join('');
    const c = pool[index];
    if (!c) { $('utCard').innerHTML = '<div class="ts-empty"><h3>조건에 맞는 템플릿이 없습니다.</h3><p>검색이나 암기 상태 필터를 변경하세요.</p></div>'; return; }
    const show = !test || revealed;
    $('utCard').innerHTML = `<div class="ts-card-meta"><span class="badge badge-cat">${esc(c.section)}</span></div><h3>${esc(c.title)}</h3>
      ${test?'<p class="ts-small">이 유형의 영어 답변 구조를 순서대로 소리 내어 말해보세요.</p>':''}
      ${show?`<p class="ts-english sm-original" lang="en">${esc(c.en)}</p>`:'<div class="ts-recall">영어 템플릿이 가려져 있습니다.</div>'}
      <div class="ts-actions">${test?`<button id="utReveal" class="btn btn-primary">${revealed?'다시 테스트':'정답 확인'}</button>`:''}${show?'<button id="utListen" class="btn btn-ghost">▶ 템플릿 듣기</button><button id="utStop" class="btn btn-ghost">듣기 중지</button>':''}</div>
      ${c.notes?`<details class="ts-reference"><summary>학습 메모</summary><p class="sm-original">${esc(c.notes)}</p></details>`:''}
      <div class="ts-grade"><button id="utAgain" class="btn btn-ghost" aria-pressed="${memory[c.id]==='again'}">↻ 다시 외우기</button><button id="utKnown" class="btn btn-ghost" aria-pressed="${memory[c.id]==='known'}">✓ 외웠어요</button></div><div class="ts-actions"><button id="utEdit" class="btn btn-ghost">템플릿 수정</button><button id="utDelete" class="btn btn-ghost">삭제</button></div>`;
    if ($('utReveal')) $('utReveal').onclick=()=>{stop();revealed=!revealed;render();};
    if ($('utListen')) $('utListen').onclick=()=>{stop();window.SpeakFreeSpeech.speak(c.en.replace(/\[[^\]]*\]|_{2,}|~ing/g,' blank '));};
    if ($('utStop')) $('utStop').onclick=stop;
    $('utAgain').onclick=()=>grade(c,'again'); $('utKnown').onclick=()=>grade(c,'known');
    $('utEdit').onclick=()=>openEditor(c);
    $('utDelete').onclick=()=>{
      const position=data.findIndex(t=>t.id===c.id);
      if(saveCatalog(data.filter(t=>t.id!==c.id))){stop();undo={card:copy(c),position};$('utUndo').hidden=false;closeEditor();render();$('utStatus').textContent='삭제했습니다. 삭제 취소로 되돌릴 수 있습니다.';}
    };
  }
  function saveCatalog(next) {
    try {validateCatalog({templates:next});window.SpeakFreeRecords.save(CATALOG_KEY,{templates:next});data=next;return true;}
    catch (_) {$('utStatus').textContent='템플릿을 저장하지 못했습니다. 입력 내용은 그대로 유지됩니다.';return false;}
  }
  function closeEditor(){editing=null;render();}
  function openEditor(card) {
    stop();editing=card?copy(card):{id:'universal-custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),part,section:'',title:'',en:'',notes:''};
    $('utCard').innerHTML=`<h3>${card?'만능 템플릿 수정':'새 만능 템플릿'}</h3><form id="utForm" class="ut-editor-form">
      <label>파트<select id="utEditPart" class="select-input">${['2','3','4','5','common'].map(p=>`<option value="${p}" ${p===editing.part?'selected':''}>${p==='common'?'Part 3·5 공용':'Part '+p}</option>`).join('')}</select></label>
      <label>제목<input id="utEditTitle" class="search-input" maxlength="150" required value="${esc(editing.title)}"></label>
      <label>분류·설명<input id="utEditSection" class="search-input" maxlength="300" value="${esc(editing.section)}" placeholder="예: 사진 묘사 · 실내 사진"></label>
      <label>영어 템플릿<textarea id="utEditEnglish" class="text-input" rows="10" maxlength="20000" required placeholder="한 줄에 한 문장씩 입력하세요. [장소] 같은 빈칸을 사용할 수 있습니다.">${esc(editing.en)}</textarea></label>
      <label>학습 메모<textarea id="utEditNotes" class="text-input" rows="4" maxlength="10000">${esc(editing.notes)}</textarea></label>
      <p id="utEditError" class="ts-small" role="status"></p><div class="ts-actions"><button type="submit" class="btn btn-primary">저장</button><button type="button" id="utEditCancel" class="btn btn-ghost">취소</button></div></form>`;
    $('utEditCancel').onclick=closeEditor;
    $('utForm').onsubmit=e=>{
      e.preventDefault();
      const nextCard={...editing,part:$('utEditPart').value,title:$('utEditTitle').value.trim(),section:$('utEditSection').value.trim(),en:$('utEditEnglish').value.trim(),notes:$('utEditNotes').value.trim()};
      if(!nextCard.title||!nextCard.en){$('utEditError').textContent='제목과 영어 템플릿을 입력하세요.';return;}
      if(!nextCard.section)nextCard.section=nextCard.part==='common'?'Part 3·5 공용':'Part '+nextCard.part;
      const next=copy(data),position=next.findIndex(c=>c.id===nextCard.id);
      if(position<0)next.push(nextCard);else next[position]=nextCard;
      if(saveCatalog(next)){
        part=nextCard.part;filter='all';search='';$('utFilter').value='all';$('utSearch').value='';index=cards().findIndex(c=>c.id===nextCard.id);test=false;revealed=false;closeEditor();$('utStatus').textContent='템플릿을 저장했습니다.';
      }
    };
  }
  $('utNew').onclick=()=>openEditor();
  $('utUndo').onclick=()=>{if(!undo)return;const next=copy(data);if(next.some(c=>c.id===undo.card.id))return;next.splice(Math.min(undo.position,next.length),0,undo.card);if(saveCatalog(next)){undo=null;$('utUndo').hidden=true;render();$('utStatus').textContent='삭제를 취소했습니다.';}};
  function grade(c, value) {
    const next={...memory};
    if(next[c.id]===value)delete next[c.id];else next[c.id]=value;
    try {window.SpeakFreeRecords.save(KEY,next);memory=next;stop();render();$('utStatus').textContent='암기 상태를 저장했습니다.';}
    catch (_) {$('utStatus').textContent='저장하지 못했습니다. 암기 기록을 백업하세요.';}
  }
  function move(delta){stop();const n=cards().length;if(n)index=(index+delta+n)%n;revealed=false;render();}
  tab.onclick=()=>window.dispatchEvent(new CustomEvent('speakfree:selecttrack',{detail:{track:'universal'}}));
  window.addEventListener('speakfree:toeictrack',e=>{stop();panel.hidden=e.detail?.track!=='universal';if(!panel.hidden)render();});
  window.addEventListener('speakfree:examchange',stop);window.addEventListener('pagehide',stop);
  $('utParts').onclick=e=>{const b=e.target.closest('[data-part]');if(b){stop();part=b.dataset.part;index=0;revealed=false;render();}};
  $('utModes').onclick=e=>{const b=e.target.closest('[data-mode]');if(b){stop();test=b.dataset.mode==='test';revealed=false;render();}};
  $('utFilter').onchange=e=>{filter=e.target.value;move(-index);};
  $('utSearch').oninput=e=>{search=e.target.value.trim().toLowerCase();move(-index);};
  $('utList').onclick=e=>{const b=e.target.closest('[data-index]');if(b){stop();index=Number(b.dataset.index);revealed=false;render();}};
  $('utPrev').onclick=()=>move(-1);$('utNext').onclick=()=>move(1);
  window.addEventListener('keydown',e=>{
    if(panel.hidden||document.body.dataset.exam!=='toeic'||e.defaultPrevented||e.isComposing||e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return;
    if(e.target instanceof Element&&e.target.closest('input,textarea,select,button,[contenteditable="true"]'))return;
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}
    else if(e.key===' '&&test){e.preventDefault();revealed=true;render();}
  });
  $('utExport').onclick=()=>{
    const url=URL.createObjectURL(new Blob([JSON.stringify({type:'speakfree-universal-templates',version:2,templates:data,memory},null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='speakfree-universal-templates.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  $('utImport').onchange=async e=>{
    try {
      const file=e.target.files[0];if(!file)return;
      const backup=JSON.parse(await file.text());
      const full=backup.type==='speakfree-universal-templates'&&backup.version===2;
      if(!full&&(backup.type!=='speakfree-universal-memory'||backup.version!==1))throw Error();
      if(!backup.memory||typeof backup.memory!=='object'||Array.isArray(backup.memory))throw Error();
      const restored=full?validateCatalog(backup):data;
      for(const [id,g] of Object.entries(backup.memory))if(!/^universal-[a-z0-9-]+$/.test(id)||!['known','again'].includes(g))throw Error();
      const next=full?backup.memory:{...memory,...backup.memory};
      if(full&&!saveCatalog(restored))return;
      window.SpeakFreeRecords.save(KEY,next);memory=next;undo=null;$('utUndo').hidden=true;closeEditor();stop();render();$('utStatus').textContent=full?'템플릿과 암기 기록을 복원했습니다.':'암기 기록을 복원했습니다.';
    } catch (_) {$('utStatus').textContent='복원하지 못했습니다. 만능 템플릿 암기 기록 파일인지 확인하세요.';}
    e.target.value='';
  };
  render();
})();
