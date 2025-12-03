class Input extends MovableObject {
  LEFT = false;
  RIGHT = false;
  UP = false;
  THROW = false;
  ATA1 = false;
  ATA2 = false;
  ULTIMATE = false;
}

window.addEventListener("keydown", (e) => {
  const key = e.key;
  const k = key.toLowerCase();

  if (k === "d" || k === "arrowright") {
    input.RIGHT = true;
  }

  if (k === "a" || k === "arrowleft") {
    input.LEFT = true;
  }

  if (k === "w" || k === "arrowup") {
    input.UP = true;
  }

  if (k === "k" || k === "x") {
    input.ATA1 = true;
  }

  if (k === "j" || k === "y" || key === "z") {
    input.ATA2 = true;
  }

  if (k === "l" || k === "c") {
    input.ULTIMATE = true;
  }

  console.log(e);
});

window.addEventListener("keyup", (e) => {
  const key = e.key;
  const k = key.toLowerCase();

  if (k === "d" || k === "arrowright") {
    input.RIGHT = false;
  }

  if (k === "a" || k === "arrowleft") {
    input.LEFT = false;
  }

  if (k === "w" || k === "arrowup") {
    input.UP = false;
  }

  if (k === "k" || k === "x") {
    input.ATA1 = false;
  }

  if (k === "j" || k === "y" || key === "z") {
    input.ATA2 = false;
  }

  if (k === "l" || k === "c") {
    input.ULTIMATE = false;
  }

  console.log(e);
});
