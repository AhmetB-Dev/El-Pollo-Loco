class ThrowableObject extends MovableObject {
  IMAGE_SHOOT = [
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "assets/assets_sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];

  IMAGES_SHOOTBALL = [
    "assets/assets_sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "assets/assets_sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "assets/assets_sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "assets/assets_sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  constructor(x, y) {
    super();

    this.animationImage(this.IMAGE_SHOOT);

    this.loadImage(this.IMAGE_SHOOT[0]);

    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;

    this.animationShoot();
    this.throw();
  }

  animationShoot() {
    setInterval(() => {
      this.playAnimation(this.IMAGE_SHOOT);
    }, 100);
  }

  throw() {
    this.speedY = 30;
    this.applyGravity();

    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
