let canvas;
let ctx;
let caracter = new Image();

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  caracter.src = "assets/img_pollo_locco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png";
  ctx.drawImage(caracter, 20, 20, 50, 150);
}
