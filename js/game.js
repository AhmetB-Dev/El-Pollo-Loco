let canvas;
let world;
let input = new Input();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, input);

  console.log("mein character ist", world.character);
}

function startGame() {
  document.getElementById("startScreen")
    .classList.add("d-none");
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 68) {
    input.RIGHT = true;
  }
  if (e.keyCode == 65) {
    input.LEFT = true;
  }
  if (e.keyCode == 87) {
    input.UP = true;
  }
  if (e.keyCode == 83) {
    input.DOWN = true;
  }
  if (e.keyCode == 32) {
    input.SPACE = true;
  }

  // console.log(e);
});
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 68) {
    input.RIGHT = false;
  }
  if (e.keyCode == 65) {
    input.LEFT = false;
  }
  if (e.keyCode == 87) {
    input.UP = false;
  }
  if (e.keyCode == 83) {
    input.DOWN = false;
  }
  if (e.keyCode == 32) {
    input.SPACE = false;
  }

  // console.log(e);
});
