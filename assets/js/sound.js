const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
var oscillator;  // create Oscillator node
var keys = document.querySelectorAll('div.piano > div');
var img = document.querySelector('img');
keys.forEach(key =>{
    key.addEventListener('mousedown',() => {
        let n = Number(key.getAttribute('data-key'));
        oscillator = audioCtx.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.value = 440*Math.pow(2,(n-49)/12); // value in hertz
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        img.style.opacity = 1;
    })
    key.addEventListener('mouseup',() =>{
        oscillator.disconnect();
        oscillator.stop();
        img.style.opacity = 0;
        oscillator = "";
    })
})