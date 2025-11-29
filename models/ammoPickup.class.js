class AmmoPickup extends MovableObject {
  offset = {
    top: 25,
    left: 30,
    right: 25,
    bottom: 25,
  };

  height = 100;
  width = 40;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
