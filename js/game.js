let canvas;
let world;
let input = new Input();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, input);

  console.log("mein character ist", world.character);
}

function startGame() {
  document.getElementById("startScreen").classList.add("d-none");
}
