(function(){
  'use strict';
  const $=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const KEY='speakfree_toeic_original_memory_v1';let memory={};
  try{memory=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(_){}
  let part=document.querySelector('#tsParts [aria-pressed="true"]')?.dataset.part||'2',index=0,mode='learn',filter='all',search='',revealed=false,token=0;
  let track='sentences';
  const tabs=document.createElement('nav');tabs.className='ts-track';tabs.setAttribute('aria-label','토스 학습 메뉴');
  tabs.innerHTML='<button id="tsSentencesTab" class="btn btn-ghost" aria-pressed="true">만능문장 암기</button><button id="tsReviewTab" class="btn btn-ghost" aria-pressed="false">↻ 다시 외울 문장</button><button id="tsTemplatesTab" class="btn btn-ghost" aria-pressed="false">내 템플릿</button>';
  $('tsParts').after(tabs);
  const panel=document.createElement('section');panel.id='tsSentencesPanel';
  panel.innerHTML=`<div class="tt-intro"><h3>문법을 다듬은 파트별 만능문장 암기</h3><p>Part 2 · 149개 / Part 3 · 50개 / Part 5 · 61개 항목<br>문법·철자·자연스러운 표현과 한국어 뜻을 검토한 학습 문장입니다. 대괄호 [ ]는 상황에 맞게 바꾸세요. PDF 원본은 출처에서 확인할 수 있습니다.</p></div><div class="ts-layout"><section class="ts-study"><div id="smReviewControls" class="sm-review-controls" hidden><strong id="smReviewTitle"></strong></div><div class="ts-toolbar"><div id="smModes" class="ts-modes"><button data-memory-mode="learn">① 문장 익히기</button><button data-memory-mode="test">② 테스트</button></div><select id="smFilter" class="select-input" aria-label="문장 복습 대상"><option value="all">전체 문장</option><option value="again">다시 외울 문장</option><option value="known">외운 문장</option></select></div><input id="smSearch" class="search-input" placeholder="문장·뜻·번호 검색" aria-label="만능문장 검색"><p id="smProgress" class="ts-progress"></p><article id="smCard" class="ts-card" aria-live="polite"></article><div class="ts-navigation"><button id="smPrev" class="btn btn-ghost">← 이전</button><button id="smShuffle" class="btn btn-ghost">섞어서 연습</button><button id="smNext" class="btn btn-primary">다음 →</button></div></section><aside class="ts-sidebar"><div class="ts-side-title"><h3>번호순 문장 목록</h3><span id="smCount"></span></div><div id="smList" class="ts-list"></div><details class="ts-reference"><summary>현재 쪽의 원문 전체·학습 노트</summary><p id="smPageText" class="sm-original"></p></details><div class="ts-backup"><button id="smExport" class="btn btn-ghost">문장 진도 백업</button><label class="btn btn-ghost">복원<input id="smImport" type="file" accept=".json" hidden></label></div><p id="smStatus" class="ts-small" role="status">암기 진도는 내 템플릿과 별도로 자동 저장됩니다.</p></aside></div>`;
  $('tsTemplatesPanel').after(panel);
  function stop(){token++;if('speechSynthesis'in window)window.speechSynthesis.cancel();}
  function setTrack(nextTrack){
    stop();window.dispatchEvent(new Event('speakfree:toeictrack'));track=nextTrack;
    const sentences=track!=='templates',review=track==='review';
    document.body.dataset.toeicTrack=sentences?'sentences':'templates';
    $('tsTemplatesPanel').hidden=sentences;panel.hidden=!sentences;$('tsParts').hidden=false;
    $('tsSentencesTab').setAttribute('aria-pressed',String(track==='sentences'));
    $('tsReviewTab').setAttribute('aria-pressed',String(review));
    $('tsTemplatesTab').setAttribute('aria-pressed',String(!sentences));
    $('smReviewControls').hidden=!review;$('smFilter').hidden=review;
    document.querySelectorAll('#tsParts [data-part]').forEach(b=>b.hidden=sentences&&!['2','3','5'].includes(b.dataset.part));
    if(sentences){search='';$('smSearch').value='';index=0;revealed=false;if(!['2','3','5'].includes(part))document.querySelector('#tsParts [data-part="2"]').click();render();}
  }
  const cards=()=>TOEIC_SENTENCES.filter(c=>c.part===part&&(!search||[c.en,c.ko,c.title,c.number].join(' ').toLowerCase().includes(search))&&(track==='review'?memory[c.id]==='again':filter==='all'||memory[c.id]===filter));
  function render(){
    const pool=cards(),all=TOEIC_SENTENCES.filter(c=>c.part===part);
    $('tsReviewTab').textContent='↻ 다시 외울 문장 ('+all.filter(c=>memory[c.id]==='again').length+')';
    $('smReviewTitle').textContent='Part '+part+' · 다시 외우기로 표시한 문장';
    document.querySelectorAll('#tsParts [data-part]').forEach(b=>{let count=b.querySelector('.sm-part-review-count');if(!count){count=document.createElement('small');count.className='sm-part-review-count';b.append(count);}count.textContent='다시 외울 문장 '+TOEIC_SENTENCES.filter(c=>c.part===b.dataset.part&&memory[c.id]==='again').length+'개';});index=Math.max(0,Math.min(index,pool.length-1));
    $('smProgress').textContent=track==='review'?('다시 외울 문장 · '+('Part '+part)+' · '+pool.length+'개 · 현재 '+(pool.length?index+1:0)+' / '+pool.length):`Part ${part} · 외운 항목 ${all.filter(c=>memory[c.id]==='known').length} / ${all.length} · 현재 ${pool.length?index+1:0} / ${pool.length}`;$('smCount').textContent=`${pool.length}개`;
    document.querySelectorAll('[data-memory-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.memoryMode===mode)));
    ['smPrev','smNext','smShuffle'].forEach(id=>$(id).disabled=pool.length<2);
    $('smList').innerHTML=pool.map((c,i)=>`<button data-memory-index="${i}" aria-current="${i===index}"><span>${track==='review'?'P'+c.part+' · ':''}${esc(c.number)}</span><div><strong>${esc(c.part==='3'?c.title:c.ko||c.title)}</strong><small>${esc(mode==='test'?'테스트 · 정답은 숨겨져 있어요.':c.en||'원문 영어 칸 비어 있음')}</small></div><em>${memory[c.id]==='known'?'✓':memory[c.id]==='again'?'↻':''}</em></button>`).join('');
    if(!pool.length){$('smCard').innerHTML=`<div class="ts-empty"><h3>${track==='review'?'다시 외울 문장이 없습니다.':'조건에 맞는 문장이 없습니다.'}</h3><p>${track==='review'?'이 파트의 만능문장에서 ↻ 다시 외우기를 누르면 이곳에 모입니다. 다른 파트는 위의 파트 버튼으로 선택하세요.':'검색이나 복습 필터를 변경하세요.'}</p><button id="smAll" class="btn btn-primary">전체 문장 보기</button></div>`;$('smPageText').textContent='';$('smAll').onclick=()=>{filter='all';$('smFilter').value='all';setTrack('sentences');};return;}
    const c=pool[index],show=mode==='learn'||revealed,source=TOEIC_SENTENCE_SOURCES.find(s=>s.part===c.part);
    $('smPageText').textContent=TOEIC_ORIGINAL_PAGES[c.part].find(p=>p.page===c.page).text;
    $('smCard').innerHTML=`<div class="ts-card-meta"><span class="badge badge-cat">Part ${c.part} · ${esc(c.number)}번</span><span>PDF ${c.page}쪽 · 교정본</span></div>${c.part==='3'?`<p class="tt-trigger">${esc(c.title)}</p>`:''}${c.ko?`<h3 class="sm-original">${esc(c.ko)}</h3>`:''}${c.combined?'<p class="ts-small">59–60번 공통 틀입니다. 대괄호 안을 주제에 맞게 바꿔 현재와 과거를 비교하세요.</p>':''}
    ${!c.en?'<div class="ts-empty"><h3>원문에서 영어 칸이 비어 있습니다.</h3><p>영어 문장을 추가하지 않고 그대로 보존했습니다.</p></div>':`${mode==='test'?`<div class="ts-recall">${show?`<p class="ts-english sm-original" lang="en">${esc(c.en)}</p>`:'한국어를 보고 영어 문장을 소리 내어 말해보세요.'}</div><div class="ts-actions">${!show?'<button id="smReveal" class="btn btn-primary">정답 확인</button>':'<button id="smRetry" class="btn btn-ghost">다시 테스트</button>'}</div>`:''}${mode==='learn'?`<p class="ts-english sm-original" lang="en">${esc(c.en)}</p>`:''}`}
    ${show&&c.en?'<div class="ts-actions"><button id="smListen" class="btn btn-primary">▶ 문장 듣기</button><button id="smRepeat" class="btn btn-ghost">3번 반복 듣기</button><button id="smStop" class="btn btn-ghost">듣기 중지</button><select id="smRate" class="select-input" aria-label="문장 듣기 속도"><option value="0.8">0.8× 천천히</option><option value="1">1× 보통</option></select></div>':''}
    <details class="ts-reference"><summary>원문·출처 확인</summary><p class="sm-original">${c.rawCells.map(esc).join('<br>')}</p><a href="${esc(c.file)}#page=${c.page}" target="_blank" rel="noopener">${esc(source.name)} · ${c.page}쪽 열기</a></details><div class="ts-grade"><p>암기 상태를 스스로 표시하세요.</p><button id="smAgain" class="btn btn-ghost" aria-pressed="${memory[c.id]==='again'}" ${!c.en?'disabled':''}>↻ 다시 외우기</button><button id="smKnown" class="btn btn-ghost" aria-pressed="${memory[c.id]==='known'}" ${!c.en?'disabled':''}>✓ 외웠어요</button>${memory[c.id]==='again'?'<button id="smClearAgain" class="btn btn-ghost">복습 표시 해제</button>':''}</div>`;
    if($('smReveal'))$('smReveal').onclick=()=>{revealed=true;render();};
    if($('smRetry'))$('smRetry').onclick=()=>{stop();revealed=false;render();};
    if($('smListen'))$('smListen').onclick=()=>speak(c.en,1);
    if($('smRepeat'))$('smRepeat').onclick=()=>speak(c.en,3);
    if($('smStop'))$('smStop').onclick=stop;
    if($('smClearAgain'))$('smClearAgain').onclick=()=>{const next={...memory};delete next[c.id];try{localStorage.setItem(KEY,JSON.stringify(next));memory=next;stop();revealed=false;render();}catch(_){$('smStatus').textContent='복습 표시를 저장할 수 없습니다.';}};
    $('smAgain').onclick=()=>grade(c,'again');$('smKnown').onclick=()=>grade(c,'known');
  }
  function move(delta){stop();const n=cards().length;if(!n)return;index=(index+delta+n)%n;revealed=false;render();}
  function grade(c,g){
    const next={...memory};
    const unchecking=g==='known'&&memory[c.id]==='known';
    if(unchecking)delete next[c.id];else next[c.id]=g;
    try{
      localStorage.setItem(KEY,JSON.stringify(next));memory=next;stop();
      // Keep the known button on the same card so it can be toggled again.
      if(g==='known'){render();$('smStatus').textContent=unchecking?'외웠어요 체크를 해제했습니다.':'외웠어요로 표시했습니다. 다시 누르면 해제됩니다.';}
      else if(cards().some(item=>item.id===c.id))move(1);
      else{revealed=false;render();}
    }catch(_){$('smStatus').textContent='저장할 수 없습니다. 진도를 백업하세요.';}
  }
  function speak(text,repeats){stop();if(!('speechSynthesis'in window)){$('smStatus').textContent='이 브라우저는 음성 듣기를 지원하지 않습니다.';return;}const currentToken=token,rate=Number($('smRate').value);const play=n=>{if(token!==currentToken||n<1)return;const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=rate;u.onend=()=>{if(n>1)setTimeout(()=>play(n-1),1200);};window.speechSynthesis.speak(u);};play(repeats);}
  $('tsSentencesTab').onclick=()=>setTrack('sentences');
  $('tsReviewTab').onclick=()=>setTrack('review');
  $('tsTemplatesTab').onclick=()=>setTrack('templates');
  $('smModes').onclick=e=>{const b=e.target.closest('[data-memory-mode]');if(b){stop();mode=b.dataset.memoryMode;revealed=false;render();}};
  $('smFilter').onchange=e=>{stop();filter=e.target.value;index=0;revealed=false;render();};
  $('smSearch').oninput=e=>{stop();search=e.target.value.trim().toLowerCase();index=0;revealed=false;render();};
  $('smList').onclick=e=>{const b=e.target.closest('[data-memory-index]');if(b){stop();index=Number(b.dataset.memoryIndex);revealed=false;render();}};
  $('smPrev').onclick=()=>move(-1);$('smNext').onclick=()=>move(1);$('smShuffle').onclick=()=>{const n=cards().length;if(n>1)move(1+Math.floor(Math.random()*(n-1)));};
  const shortcutHint=document.createElement('p');
  shortcutHint.className='ts-keyboard';
  shortcutHint.textContent='← 이전 문장 · → 다음 문장 · 스페이스: 테스트 정답 확인 · 입력창에서는 입력';
  panel.querySelector('.ts-navigation').after(shortcutHint);
  window.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight',' '].includes(e.key)||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;
    if(document.body.dataset.exam!=='toeic'||panel.hidden)return;
    if(e.target instanceof Element&&e.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])'))return;
    if(e.key===' '){
      if(mode!=='test'||!cards()[index]?.en)return;
      e.preventDefault();
      if(!revealed){revealed=true;render();}
      return;
    }
    if(cards().length<2)return;
    e.preventDefault();move(e.key==='ArrowLeft'?-1:1);
  });
  window.addEventListener('speakfree:toeicpart',e=>{stop();part=e.detail.part;search='';$('smSearch').value='';index=0;revealed=false;document.querySelectorAll('#tsParts [data-part]').forEach(b=>b.hidden=document.body.dataset.toeicTrack==='sentences'&&!['2','3','5'].includes(b.dataset.part));if(!panel.hidden)render();});
  window.addEventListener('speakfree:examchange',stop);window.addEventListener('pagehide',stop);
  $('smExport').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({type:'speakfree-toeic-original-memory',version:1,memory},null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='speakfree-toeic-original-memory.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  $('smImport').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;const data=JSON.parse(await file.text());if(data.type!=='speakfree-toeic-original-memory'||data.version!==1||!data.memory||typeof data.memory!=='object'||Array.isArray(data.memory))throw Error();for(const [id,g]of Object.entries(data.memory))if(!TOEIC_SENTENCES.some(c=>c.id===id)||!['again','known'].includes(g))throw Error();const next={...memory,...data.memory};localStorage.setItem(KEY,JSON.stringify(next));memory=next;stop();render();$('smStatus').textContent='문장 암기 진도를 복원했습니다.';}catch(_){$('smStatus').textContent='복원하지 못했습니다. 문장 진도 백업 JSON인지 확인하세요.';}e.target.value='';};
  setTrack('sentences');
})();
