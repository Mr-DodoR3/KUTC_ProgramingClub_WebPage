let idClear = setInterval(clear, 10);
let feedoutScene = document.getElementById("change");
let sceneClear = 1.0;

function clear() {
  sceneClear -= 0.025;
  feedoutScene.style.opacity = sceneClear;
  if (sceneClear < 0) {
    feedoutScene.classList.toggle("clear");
    clearInterval(idClear);
  }
}