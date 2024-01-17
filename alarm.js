setInterval(() => {
  a = new Date().toTimeString();
  time.innerHTML = a;
}, 1000);

function play() {
  const audio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  audio.play();
}

function alarm() {
  setTimeout(() => {
    play();
  }, 4000);
}
