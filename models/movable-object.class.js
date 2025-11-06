class MovableObject {
  x = 100;
  y = 295;
  img;
  height = 130;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moving right");
  }
}
