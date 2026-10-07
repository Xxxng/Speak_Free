(async function () {
  'use strict';
  await window.SpeakFreeRecords.ready;
  const KEY='speakfree_toeic_custom_templates_v1', $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const copy=v=>JSON.parse(JSON.stringify(v));
  function valid(data){
    if(!data||!Array.isArray(data.templates)||data.templates.length>500||!data.drafts||!data.grades)throw Error('Invalid backup');
    const ids=new Set();
    const str=(v,max)=>typeof v==='string'&&v.length<=max;
    for(const t of data.templates){
      if(!t||!/^custom-[a-z0-9-]+$/.test(t.id)||ids.has(t.id)||!['2','3','4','5'].includes(t.part)||!str(t.title,150)||!t.title.trim()||!str(t.question,2000)||!str(t.situation,3000)||!str(t.trigger,500)||!str(t.tip,3000)||!str(t.example,10000)||!Array.isArray(t.steps)||!t.steps.length||t.steps.length>30)throw Error('Invalid template');
      ids.add(t.id);
      for(const s of t.steps)if(!s||!str(s.label,150)||!s.label.trim()||!str(s.ko,2000)||!str(s.en,3000)||!s.en.trim())throw Error('Invalid step');
    }
    for(const field of ['drafts','grades'])if(typeof data[field]!=='object'||Array.isArray(data[field])||!data[field])throw Error('Invalid records');
    for(const [id,d] of Object.entries(data.drafts)){
      if(!ids.has(id)||!d||typeof d!=='object'||Array.isArray(d))throw Error('Invalid draft');
      const allowed=slots(data.templates.find(t=>t.id===id));
      for(const [label,value] of Object.entries(d))if(!allowed.includes(label)||!str(value,600))throw Error('Invalid slot');
    }
    for(const [id,g] of Object.entries(data.grades))if(!ids.has(id)||!['known','again'].includes(g))throw Error('Invalid grade');
    return {templates:copy(data.templates),drafts:copy(data.drafts),grades:copy(data.grades)};
  }
  let state={templates:[],drafts:{},grades:{}};
  try {const raw=localStorage.getItem(KEY);if(raw)state=valid(JSON.parse(raw));}catch(_){}
  let part=document.querySelector('#tsParts [aria-pressed="true"]')?.dataset.part||'2',id='',stage='learn',revealed=false,review=false,editing=null,undo=null;
  const panel=document.createElement('section');panel.id='tsTemplatesPanel';
  panel.innerHTML=`<div class="tt-intro tt-editor-toolbar"><div><h3>내 템플릿</h3><p id="ttTotal"></p></div><button id="ttNew" class="btn btn-primary">＋ 새 템플릿</button></div><section id="ttEditor" class="ts-card" hidden></section><div id="ttLearning" class="ts-layout"><section><div id="ttStages" class="ts-modes"><button data-stage="learn">① 구조 익히기</button><button data-stage="build">② 내 답변 만들기</button><button data-stage="recall">③ 가리고 말하기</button></div><p id="ttProgress" class="ts-progress"></p><article id="ttCard" class="ts-card"></article><div class="ts-navigation"><button id="ttPrev" class="btn btn-ghost">← 이전</button><button id="ttNext" class="btn btn-primary">다음 →</button></div></section><aside class="ts-sidebar"><div class="ts-side-title"><h3>템플릿 목록</h3><span id="ttCount"></span></div><label class="tt-review"><input id="ttReview" type="checkbox"> 헷갈리는 유형만 복습</label><div id="ttList" class="ts-list"></div><div class="ts-backup"><button id="ttExport" class="btn btn-ghost">템플릿·기록 백업</button><label class="btn btn-ghost">복원<input id="ttImport" type="file" accept=".json" hidden></label></div></aside></div><p id="ttStatus" class="ts-small" role="status">템플릿과 학습 기록을 자동 저장합니다.</p><button id="ttUndo" class="btn btn-ghost" hidden>삭제 취소</button>`;
  $('tsParts').after(panel);
  panel.insertAdjacentHTML('beforeend', '<p id="ttDiskStatus" class="ts-small" role="status">컴퓨터 파일에 자동 저장합니다.</p>');
  const stop=()=>{window.SpeakFreeSpeech.cancel();};
  function persist(next){try{window.SpeakFreeRecords.save(KEY,next);state=next;return true;}catch(_){$('ttStatus').textContent='저장 공간이 부족하거나 저장할 수 없습니다. 편집 내용은 그대로 두었으니 백업 또는 내용을 복사하세요.';return false;}}
  function slots(t){return [...new Set(t.steps.flatMap(s=>[...s.en.matchAll(/\[([^\[\]\n]+)\]/g)].map(m=>m[1])))];}
  const pool=()=>state.templates.filter(t=>t.part===part&&(!review||state.grades[t.id]==='again'));
  const current=()=>pool().find(t=>t.id===id)||pool()[0];
  const draftValue=(t,label)=>{const d=state.drafts[t.id];return d&&Object.hasOwn(d,label)&&typeof d[label]==='string'?d[label]:'';};
  const missing=t=>slots(t).filter(label=>!draftValue(t,label).trim());
  const answer=t=>t.steps.map(s=>s.en.replace(/\[([^\[\]\n]+)\]/g,(text,label)=>draftValue(t,label).trim()||text)).join('\n');
  function update(t){$('ttDraftAnswer').textContent=answer(t);$('ttMissing').textContent=missing(t).length?'입력할 내용: '+missing(t).join(' · '):'답변을 소리 내어 읽고 질문과의 연결을 확인하세요.';$('ttListen').disabled=missing(t).length>0;}
  function render(){
    const list=pool(),t=current(),all=state.templates.filter(t=>t.part===part);
    if(t)id=t.id;
    $('ttTotal').textContent=`직접 만든 템플릿 ${state.templates.length}개 · 제목·질문·답변 구조를 자유롭게 수정하세요.`;
    $('ttNew').disabled=part==='1';
    $('ttProgress').textContent=`Part ${part} · 암기 ${all.filter(t=>state.grades[t.id]==='known').length} / ${all.length}개`;
    $('ttCount').textContent=`${list.length}개`;$('ttPrev').disabled=$('ttNext').disabled=list.length<2;
    document.querySelectorAll('[data-stage]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.stage===stage));b.disabled=!t;});
    $('ttList').innerHTML=list.map(t=>`<button data-template="${esc(t.id)}" aria-current="${id===t.id}"><div><strong>${esc(t.title)}</strong><small>${esc(t.trigger)}</small></div><em>${state.grades[t.id]==='known'?'✓':state.grades[t.id]==='again'?'↻':''}</em></button>`).join('');
    if(!t){$('ttCard').innerHTML=`<div class="ts-empty"><h3>${part==='1'?'Part 1은 주어진 지문을 읽습니다.':review?'복습할 템플릿이 없습니다.':'아직 템플릿이 없습니다.'}</h3><p>${part==='1'?'Part 2~5를 선택해 템플릿을 만드세요.':review?'복습 필터를 해제하거나 새 템플릿을 추가하세요.':'상단의 ＋ 새 템플릿을 눌러 직접 만들어보세요.'}</p></div>`;return;}
    const show=stage!=='recall'||revealed;
    $('ttCard').innerHTML=`<div class="tt-editor-toolbar"><span class="badge badge-cat">Part ${part} · ${esc(t.title)}</span><div><button id="ttEdit" class="btn btn-ghost">템플릿 수정</button><button id="ttDelete" class="btn btn-ghost">삭제</button></div></div>${t.trigger?`<p class="tt-trigger">${esc(t.trigger)}</p>`:''}${t.question||t.situation?`<div class="tt-prompt"><strong>연습 질문</strong><p lang="en">${esc(t.question)}</p><small>${esc(t.situation)}</small></div>`:''}<div class="tt-flow">${t.steps.map((s,i)=>`<span>${i+1}. ${esc(s.label)}</span>`).join('<b>→</b>')}</div>
    ${stage==='learn'?`<ol class="tt-steps">${t.steps.map(s=>`<li><strong>${esc(s.label)}</strong><small>${esc(s.ko)}</small><p lang="en">${esc(s.en)}</p></li>`).join('')}</ol>${t.example?`<details class="ts-reference"><summary>내가 등록한 예시 답변</summary><p class="tt-answer" lang="en">${esc(t.example)}</p></details>`:''}`:''}
    ${stage==='build'?`<div class="tt-fields">${slots(t).map(label=>`<label>${esc(label)}<input class="search-input" data-slot="${esc(label)}" maxlength="600" value="${esc(draftValue(t,label))}"></label>`).join('')}</div><p id="ttMissing" class="ts-small"></p><h4>내 답변 미리보기</h4><p id="ttDraftAnswer" class="tt-answer" lang="en"></p>`:''}
    ${stage==='recall'?`<div class="tt-recall">${t.steps.map((s,i)=>`<p><strong>${i+1}. ${esc(s.label)}</strong><small>${esc(s.ko)}</small></p>`).join('')}</div>${revealed?`<h4>${missing(t).length?'등록한 답변 틀':'내 답변'}</h4><p class="tt-answer" lang="en">${esc(answer(t))}</p>`:'<button id="ttReveal" class="btn btn-primary">답변 확인</button>'}`:''}
    ${show?`${t.tip?`<div class="ts-use"><strong>학습 메모</strong><p>${esc(t.tip)}</p></div>`:''}<div class="ts-actions"><button id="ttListen" class="btn btn-primary" ${missing(t).length?'disabled':''}>▶ 답변 듣기</button><button id="ttStop" class="btn btn-ghost">듣기 중지</button></div>`:''}
    <div class="ts-grade"><p>답변과 비교한 뒤 스스로 표시하세요.</p><button id="ttAgain" class="btn btn-ghost" ${!show?'disabled':''}>↻ 다시 연습</button><button id="ttKnown" class="btn btn-ghost" ${!show?'disabled':''}>✓ 외웠어요</button></div>`;
    $('ttEdit').onclick=()=>openEditor(t);
    $('ttDelete').onclick=()=>{
      stop();const previous=copy(state),next=copy(state);next.templates=next.templates.filter(x=>x.id!==t.id);delete next.drafts[t.id];delete next.grades[t.id];
      if(persist(next)){undo={template:copy(t),draft:previous.drafts[t.id],grade:previous.grades[t.id]};$('ttUndo').hidden=false;$('ttStatus').textContent='템플릿을 삭제했습니다. 삭제 취소로 되돌릴 수 있습니다.';id='';render();}
    };
    if($('ttReveal'))$('ttReveal').onclick=()=>{revealed=true;render();};
    if($('ttListen'))$('ttListen').onclick=()=>{stop();if(!('speechSynthesis'in window))return;window.SpeakFreeSpeech.speak(answer(t),{rate:1});};
    if($('ttStop'))$('ttStop').onclick=stop;
    $('ttAgain').onclick=()=>grade('again');$('ttKnown').onclick=()=>grade('known');
    if(stage==='build'){update(t);document.querySelectorAll('[data-slot]').forEach(input=>input.oninput=()=>{stop();const next=copy(state);next.drafts[t.id]||={};Object.defineProperty(next.drafts[t.id],input.dataset.slot,{value:input.value,enumerable:true,configurable:true,writable:true});if(persist(next))update(t);});}
  }
  function openEditor(t){
    stop();editing=t?copy(t):{id:'custom-'+crypto.randomUUID(),part,title:'',trigger:'',question:'',situation:'',tip:'',example:'',steps:[{label:'',ko:'',en:''}]};
    $('ttLearning').hidden=true;$('ttEditor').hidden=false;renderEditor();$('teTitle').focus();
  }
  function renderEditor(){
    const t=editing;
    $('ttEditor').innerHTML=`<form id="teForm"><h3>${state.templates.some(x=>x.id===t.id)?'템플릿 수정':'새 템플릿 만들기'}</h3><p class="ts-small">필수: 제목, 단계 이름, 영어 문장. 영어 문장에 [이유], [경험]처럼 쓰면 학습할 때 빈칸 입력창이 생깁니다. 같은 이름은 같은 내용으로 채워집니다.</p><div class="tt-fields"><label>파트<select id="tePart" class="select-input">${TOEIC_PARTS.filter(p=>p.id!=='1').map(p=>`<option value="${p.id}" ${p.id===t.part?'selected':''}>${p.title} · ${p.name}</option>`).join('')}</select></label><label>제목 *<input id="teTitle" class="search-input" required maxlength="150" value="${esc(t.title)}"></label><label>사용하는 질문 유형<input id="teTrigger" class="search-input" maxlength="500" value="${esc(t.trigger)}"></label><label>연습 질문<textarea id="teQuestion" maxlength="2000">${esc(t.question)}</textarea></label><label>상황·제공 자료<textarea id="teSituation" maxlength="3000">${esc(t.situation)}</textarea></label><label>학습 메모<textarea id="teTip" maxlength="3000">${esc(t.tip)}</textarea></label></div><h4>답변 구조</h4><div id="teSteps">${t.steps.map((s,i)=>`<section class="tt-step-editor"><div class="tt-editor-toolbar"><strong>단계 ${i+1}</strong><div><button type="button" class="btn btn-ghost" data-up="${i}" ${i===0?'disabled':''}>↑</button><button type="button" class="btn btn-ghost" data-down="${i}" ${i===t.steps.length-1?'disabled':''}>↓</button><button type="button" class="btn btn-ghost" data-remove="${i}" ${t.steps.length===1?'disabled':''}>단계 삭제</button></div></div><label>단계 이름 *<input class="search-input" data-step="${i}" data-field="label" required maxlength="150" value="${esc(s.label)}"></label><label>한국어 의미·힌트<textarea data-step="${i}" data-field="ko" maxlength="2000">${esc(s.ko)}</textarea></label><label>영어 문장 틀 *<textarea data-step="${i}" data-field="en" required maxlength="3000" placeholder="예: The main reason is that [이유].">${esc(s.en)}</textarea></label></section>`).join('')}</div><button id="teAddStep" type="button" class="btn btn-ghost" ${t.steps.length>=30?'disabled':''}>＋ 단계 추가</button><label class="tt-example-field">예시 답변 (선택)<textarea id="teExample" maxlength="10000">${esc(t.example)}</textarea></label><p id="teError" class="ts-small" role="alert"></p><div class="ts-actions"><button type="submit" class="btn btn-primary">템플릿 저장</button><button id="teCancel" type="button" class="btn btn-ghost">취소</button></div></form>`;
    const capture=()=>{for(const [key,field]of Object.entries({part:'tePart',title:'teTitle',trigger:'teTrigger',question:'teQuestion',situation:'teSituation',tip:'teTip',example:'teExample'}))editing[key]=$(field).value;document.querySelectorAll('[data-step]').forEach(input=>editing.steps[Number(input.dataset.step)][input.dataset.field]=input.value);};
    $('teForm').oninput=capture;$('tePart').onchange=capture;
    $('teAddStep').onclick=()=>{capture();editing.steps.push({label:'',ko:'',en:''});renderEditor();};
    $('teSteps').onclick=e=>{const b=e.target.closest('[data-up],[data-down],[data-remove]');if(!b)return;capture();if(b.dataset.remove!==undefined)editing.steps.splice(Number(b.dataset.remove),1);else{const i=Number(b.dataset.up??b.dataset.down),j=i+(b.dataset.up!==undefined?-1:1);[editing.steps[i],editing.steps[j]]=[editing.steps[j],editing.steps[i]];}renderEditor();};
    $('teCancel').onclick=closeEditor;
    $('teForm').onsubmit=e=>{e.preventDefault();capture();editing.title=editing.title.trim();editing.steps.forEach(s=>{s.label=s.label.trim();s.en=s.en.trim();});
      const next=copy(state),old=next.templates.findIndex(x=>x.id===editing.id);
      if(old<0)next.templates.push(copy(editing));else next.templates[old]=copy(editing);
      // Changes to a template invalidate its self-assessed memorization status.
      delete next.grades[editing.id];const retained=Object.create(null);for(const label of slots(editing))if(Object.hasOwn(next.drafts[editing.id]||{},label))retained[label]=next.drafts[editing.id][label];next.drafts[editing.id]=retained;
      try{valid(next);}catch(_){$('teError').textContent='제목과 각 단계의 이름·영어 문장을 입력하세요. 최대 500개 템플릿까지 저장할 수 있습니다.';return;}
      if(!persist(next))return;id=editing.id;part=editing.part;review=false;$('ttReview').checked=false;
      document.querySelector(`#tsParts [data-part="${part}"]`).click();closeEditor();$('ttStatus').textContent='템플릿을 저장했습니다.';
    };
  }
  function closeEditor(){editing=null;$('ttEditor').hidden=true;$('ttLearning').hidden=false;revealed=false;render();}
  function navigate(delta){stop();const list=pool(),n=list.findIndex(t=>t.id===id);id=list.length?list[(Math.max(n,0)+delta+list.length)%list.length].id:'';revealed=false;render();}
  function grade(g){const next=copy(state);next.grades[id]=g;if(persist(next))navigate(1);}
  $('ttNew').onclick=()=>openEditor(null);
  $('ttUndo').onclick=()=>{if(!undo)return;const next=copy(state);if(next.templates.some(t=>t.id===undo.template.id))return;next.templates.push(undo.template);if(undo.draft)next.drafts[undo.template.id]=undo.draft;if(undo.grade)next.grades[undo.template.id]=undo.grade;if(persist(next)){undo=null;$('ttUndo').hidden=true;$('ttStatus').textContent='삭제를 취소했습니다.';render();}};
  $('ttStages').onclick=e=>{const b=e.target.closest('[data-stage]');if(b){stop();stage=b.dataset.stage;revealed=false;render();}};
  $('ttList').onclick=e=>{const b=e.target.closest('[data-template]');if(b){stop();id=b.dataset.template;revealed=false;render();}};
  $('ttPrev').onclick=()=>navigate(-1);$('ttNext').onclick=()=>navigate(1);
  $('ttReview').onchange=e=>{review=e.target.checked;revealed=false;render();};
  window.addEventListener('speakfree:toeicpart',e=>{stop();part=e.detail.part;revealed=false;if(!editing)render();});
  window.addEventListener('speakfree:toeictrack',stop);window.addEventListener('speakfree:examchange',stop);window.addEventListener('pagehide',stop);
  $('ttExport').onclick=()=>{const blob=new Blob([JSON.stringify({type:'speakfree-toeic-custom-templates',version:1,...state},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='speakfree-toeic-custom-templates.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  $('ttImport').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;const data=JSON.parse(await file.text());if(data.type!=='speakfree-toeic-custom-templates'||data.version!==1)throw Error();const imported=valid(data),next=copy(state);
      for(const t of imported.templates){const n=next.templates.findIndex(x=>x.id===t.id);if(n<0)next.templates.push(t);else next.templates[n]=t;next.drafts[t.id]=imported.drafts[t.id]||{};delete next.grades[t.id];if(imported.grades[t.id])next.grades[t.id]=imported.grades[t.id];}
      valid(next);if(persist(next)){render();$('ttStatus').textContent='템플릿과 학습 기록을 복원했습니다.';}
    }catch(_){$('ttStatus').textContent='복원하지 못했습니다. 내 템플릿 백업 파일인지 확인하세요.';}e.target.value='';};
  document.body.dataset.toeicTrack='templates';render();
})();
