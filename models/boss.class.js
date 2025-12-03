class Boss extends MovableObject {
  height = 400;
  width = 250;
  y = 60;
  triggerIntro = 4200;

  offset = {
    top: 135,
    left: 15,
    right: 15,
    bottom: 50,
  };

  introPlayed = false;
  introFrame = 0;
  playerInRange = false;

  isActive = false;
  chaseSpeedFactor = 4;
  isAttacking = false;
  attackRange = 150;

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

  ENEMIES_INTRODUCE = [
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
    this.animationImage(this.ENEMIES_INTRODUCE);
    this.animationImage(this.ENEMIES_WALK);
    this.animationImage(this.ENEMIES_ATTACK);
    this.animationImage(this.ENEMIES_HURT);
    this.animationImage(this.ENEMIES_DEAD);
  }

  bossSpeed() {
    this.speed = 0.8 + Math.random() * 5.5;
  }

  followCharacter(character) {
    const dx = character.x - this.x;
    const dy = character.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) {
      this.isAttacking = true;
      return;
    }

    const nx = dx / distance;
    const ny = dy / distance;
    const step = this.speed * this.chaseSpeedFactor;

    if (distance < 5) {
      this.otherDirection = dx < 0;
      this.isAttacking = true;
      return;
    }
    this.x += nx * step;

    if (character.y < this.y) {
      this.y += ny * step;
    }

    this.otherDirection = dx > 0;
    this.isAttacking = distance < this.attackRange;
  }

  animationBoss() {
    setInterval(() => {
      if (!this.isActive) {
        return;
      }

      if (this.playerInRange && !this.introPlayed) {
        this.playIntroOnce();
        return;
      }

      if (!this.playerInRange || !this.introPlayed) {
        return;
      }

      if (this.isAttacking) {
        this.playAnimation(this.ENEMIES_ATTACK);
      } else {
        this.playAnimation(this.ENEMIES_WALK);
      }
    }, 125);
  }

  playIntroOnce() {
    const frames = this.ENEMIES_INTRODUCE;

    if (this.introFrame < 0 || this.introFrame >= frames.length) {
      this.introFrame = 0;
    }

    const path = frames[this.introFrame];
    this.img = this.imageCache[path];

    if (this.introFrame < frames.length - 1) {
      this.introFrame++;
    } else {
      this.introPlayed = true;
    }
  }

  draw(ctx) {
    if (!this.isActive) return;
    super.draw(ctx);
  }

  showHitbox(ctx) {
    if (!this.isActive) return;
    super.showHitbox(ctx);
  }
}
