class Boss extends MovableObject {
  height = 400;
  width = 250;
  y = 60;

  offset = {
    top: 135,
    left: 15,
    right: 15,
    bottom: 50,
  };

  ENEMIES_WALK = [
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/1.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/2.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/4.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/3.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/5.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/8.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/6.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/7.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/9.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/10.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/12.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/11.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  ENEMIES_ALERT = [
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  ENEMIES_ATTACK = [
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/1.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/2.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/3.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/4.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/5.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  ENEMIES_HURT = [
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Hurt/1.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Hurt/2.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Hurt/3.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  ENEMIES_DEAD = [
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "assets/assets_sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor() {
    super();
    this.loadImage(this.ENEMIES_WALK[0]);
    this.loadAssets();
    this.animationBoss();
    this.bossSpeed();

    this.x = 4500;
  }

  loadAssets() {
    this.animationImage(this.ENEMIES_WALK);
    this.animationImage(this.ENEMIES_DEAD);
    this.animationImage(this.ENEMIES_ALERT);
  }

  animationBoss() {
    this.animationBossWalk();
    this.animationBossDead();
    this.animationBossAlert();
  }

  bossSpeed() {
    this.speed = 0.8 + Math.random() * 1.5;
  }

  animationBossAlert() {
    setInterval(() => {
      this.playAnimation(this.ENEMIES_ALERT);
    });
  }

  animationBossWalk() {
    // this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.ENEMIES_WALK);
    }, 175);
  }

  animationBossDead() {}
}
