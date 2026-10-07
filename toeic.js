(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  // Discard the old corpus's records once; preserve new records on later visits.
  try {
    if (localStorage.getItem('speakfree_toeic_reset_custom_v1') !== 'done') {
      localStorage.removeItem('speakfree_toeic_memory_v1');
      localStorage.removeItem('speakfree_toeic_templates_v1');
      localStorage.removeItem('speakfree_toeic_basic_templates_v1');
      localStorage.setItem('speakfree_toeic_reset_custom_v1', 'done');
    }
  } catch (_) {}
  const workspace = document.createElement('main');
  workspace.id = 'toeicWorkspace';
  workspace.hidden = true;
  workspace.innerHTML = `<section class="ts-heading"><div><span class="ts-eyebrow">TOEIC SPEAKING · STUDY</span><h2>원문을 외우고,<br>내 템플릿으로 연습하세요.</h2><p>만능문장 암기 · 내 템플릿 편집</p></div><div class="ts-source"><strong>원문 암기와 템플릿 학습</strong><p>만능문장: Part 2·3·5 PDF 원문 그대로<br>내 템플릿: 직접 추가·수정하는 답변 틀<br>두 학습 기록은 별도로 저장됩니다.</p></div></section><nav id="tsParts" class="ts-parts" aria-label="토익스피킹 파트"></nav>`;
  $('opicWorkspace').after(workspace);
  document.querySelector('.exam-switch').after($('themeToggleBtn'));
  let part = '2';
  function render() {
    $('tsParts').innerHTML = TOEIC_PARTS.map(p => `<button data-part="${p.id}" aria-pressed="${p.id === part}"><span>${p.title} <small>${p.questions}</small></span><strong>${p.name}</strong></button>`).join('');
    window.dispatchEvent(new CustomEvent('speakfree:toeicpart', {detail:{part}}));
  }
  function selectExam(exam) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    document.body.dataset.exam = exam;
    const toeic = exam === 'toeic';
    ['opicControls','opicProgress','opicWorkspace','opicFooter'].forEach(id => $(id).hidden = toeic);
    workspace.hidden = !toeic;
    $('opicTab').setAttribute('aria-pressed', String(!toeic));
    $('toeicTab').setAttribute('aria-pressed', String(toeic));
    ['exportModal','helpModal'].forEach(id => $(id).classList.remove('open'));
    try { localStorage.setItem('speakfree_exam', exam); } catch (_) {}
    window.dispatchEvent(new Event('speakfree:examchange'));
  }
  $('tsParts').onclick = e => { const b=e.target.closest('[data-part]'); if(b){part=b.dataset.part;render();} };
  $('opicTab').onclick = () => selectExam('opic');
  $('toeicTab').onclick = () => selectExam('toeic');
  render();
  let exam='toeic';
  try { exam=localStorage.getItem('speakfree_exam')||exam; } catch (_) {}
  selectExam(exam==='opic'?'opic':'toeic');
})();
