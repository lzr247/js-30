function playAudio({ keyCode }) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  // If audio element for clicked key does not exist - exit func
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeClass(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

window.addEventListener("keydown", playAudio);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeClass));
