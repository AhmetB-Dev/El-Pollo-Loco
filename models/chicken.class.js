class Chicken extends MovableObject {
  y =370;

  constructor() {
    super().loadImage("assets/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

    this.x = 300 + Math.random() * 700;
    this.height = 50;
    this.width = 90;
  }
}
