class Boss extends MovableObject {
  height = 350;
  width = 200;
  y = 100 ;

  ENEMIES_WALK = [
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png",
  ];

  ENEMIES_ALERT = [
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  ENEMIES_ATTACK = [
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  ENEMIES_HURT = [
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  ENEMIES_DEAD = [
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png",
    "assets/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png",
  ];

  constructor() {
    super().loadImage(this.ENEMIES_WALK[0]);
    this.loadAssets();
    this.animationBoss();
    this.bossSpeed();

    this.x = 600;
  }

  loadAssets() {
    this.animationImage(this.ENEMIES_WALK);
    this.animationImage(this.ENEMIES_DEAD);
  }

  animationBoss() {
    this.animationBossWalk();
    this.animationBossDead();
  }

  bossSpeed() {
    this.speed = 0.8 + Math.random() * 1.5;
  }

  animationBossWalk() {
    this.moveLeft();
    // this.moveRight();
    setInterval(() => {
      this.playAnimation(this.ENEMIES_WALK);
    }, 175);
  }

  animationBossDead() {}
}
