(function () {
  'use strict';
  let generation = 0;
  const synth = window.speechSynthesis;
  function choose() {
    const voices = synth.getVoices().filter(v => /^en(?:[-_]|$)/i.test(v.lang));
    const score = v => (/^en[-_]US$/i.test(v.lang) ? 20 : 0)
      + (/Natural|Google|Samantha|Aria|Jenny/i.test(v.name) ? 10 : 0)
      + (v.default ? 1 : 0);
    return voices.sort((a, b) => score(b) - score(a))[0];
  }
  function waitForVoice() {
    const voice = choose();
    if (voice) return Promise.resolve(voice);
    return new Promise(resolve => {
      const finish = () => {
        clearTimeout(timer);
        synth.removeEventListener('voiceschanged', changed);
        resolve(choose());
      };
      const changed = () => { if (choose()) finish(); };
      const timer = setTimeout(finish, 1500);
      synth.addEventListener('voiceschanged', changed);
    });
  }
  window.SpeakFreeSpeech = {
    cancel() { generation++; if (synth) synth.cancel(); },
    async speak(text, {rate = 1, onend, onerror} = {}) {
      if (!synth) { if (onerror) onerror(); return; }
      const current = generation;
      const voice = await waitForVoice();
      if (current !== generation) return;
      const utterance = new SpeechSynthesisUtterance(String(text));
      if (voice) utterance.voice = voice;
      utterance.lang = voice ? voice.lang : 'en-US';
      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.onend = onend;
      utterance.onerror = onerror;
      synth.resume();
      synth.speak(utterance);
    }
  };
})();
