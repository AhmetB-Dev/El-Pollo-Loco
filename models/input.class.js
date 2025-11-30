class Input extends MovableObject {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  THROW = false;
  ATA1 = false;
  ATA2 = false;
  ULTIMATE = false;
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 68) {
    input.RIGHT = true;
  }
  if (e.keyCode == 39) {
    input.RIGHT = true;
  }
  if (e.keyCode == 65) {
    input.LEFT = true;
  }
  if (e.keyCode == 37) {
    input.LEFT = true;
  }
  if (e.keyCode == 87) {
    input.UP = true;
  }
  if (e.keyCode == 83) {
    input.DOWN = true;
  }
  if (e.keyCode == 32) {
    input.ATA2 = true;
  }

  if (e.keyCode == 70) {
    input.THROW = true;
  }
  if (e.keyCode == 71) {
    input.ATA1 = true;
  }
  if (e.keyCode == 72) {
    input.ATA2 = true;
  }
  if (e.keyCode == 16) {
    input.ULTIMATE = true;
  }
  console.log(e);
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 68) {
    input.RIGHT = false;
  }
  if (e.keyCode == 39) {
    input.RIGHT = false;
  }
  if (e.keyCode == 65) {
    input.LEFT = false;
  }
  if (e.keyCode == 37) {
    input.LEFT = false;
  }
  if (e.keyCode == 87) {
    input.UP = false;
  }
  if (e.keyCode == 83) {
    input.DOWN = false;
  }
  if (e.keyCode == 32) {
    input.ATA2 = false;
  }
  if (e.keyCode == 70) {
    input.THROW = false;
  }

  if (e.keyCode == 71) {
    input.ATA1 = false;
  }
  if (e.keyCode == 72) {
    input.ATA2 = false;
  }
  if (e.keyCode == 16) {
    input.ULTIMATE = false;
  }
  console.log(e);
});
