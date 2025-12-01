class AmbientObject extends MovableObject {
  constructor(imagePath, y, x, width, height) {
    super().loadImage(imagePath);
    this.y = y;
    this.x = x;
    this.width = width;
    this.height - height;
    // this.spawnCloudsRandom();
    // this.animationAmbient();
  }

  // spawnAmbientsRandom() {
  //   this.x = Math.random() * 2500;
  // }

  // animationAmbient() {
  //   this.moveLeft();
  // }
}
