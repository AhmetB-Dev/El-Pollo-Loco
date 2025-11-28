class AmbientObject extends MovableObject {
  y = 0;
  width = 500;
  height = 300;

  constructor() {
    super().loadImage(
      "assets/assets_sharkie/3. Background/Layers/1. Light/2.png",
      "assets/assets_sharkie/3. Background/Layers/1. Light/2.png"
    );
    // this.spawnCloudsRandom();
    this.animationCloud();
  }

  spawnCloudsRandom() {
    // this.x = Math.random() * 2500;
  }

  animationCloud() {
    this.moveLeft();
  }
}
