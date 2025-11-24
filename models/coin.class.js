class Coin extends MovableObject {
  offset = {
    top: 85,
    left: 65,
    right: 65,
    bottom: 85,
  };

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }

  // getItem() {
  //   this.items += 1;
  //   if (this.items > 0) {
  //     this.items = 0;

  //   }
  // }
}
