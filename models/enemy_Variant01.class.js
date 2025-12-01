class Enemy_Variant01 extends MovableObject {
  y = 300;
  height = 70;
  width = 90;

  isDead = false;
  isAttacking = false;

  deathAnimationDone = false;
  deathFrame = 0;

  ENEMIES_WALK = [
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  ENEMIES_ATTACK = [
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png",
  ];

  ENEMIES_DEAD = [
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
  ];

  constructor() {
    super().loadImage("assets/assets_sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png");
    this.loadAssets();
    this.groundY = 300;
    this.spawnChickenRandom();
    this.chickenSpeed();
    this.otherDirection = true;
    this.startPatrol(300);
    this.animationChicken();
  }

  loadAssets() {
    this.animationImage(this.ENEMIES_WALK);
    this.animationImage(this.ENEMIES_ATTACK);
    this.animationImage(this.ENEMIES_DEAD);
  }

  animationChicken() {
    this.animationChickenWalk();
    this.animationChickenDead();
  }

  die() {
    if (this.isDead) return;
    this.isDead = true;
    this.speed = 0;
    this.currentImage = 0;
    this.deathFrame = 0;
    this.deathAnimationDone = false;
  }

  spawnChickenRandom() {
    const minX = 600;
    const maxX = 1800;
    this.x = minX + Math.random() * (maxX - minX);
    const minY = 150;
    const maxY = 300;
    this.y = minY + Math.random() * (maxY - minY);
  }

  chickenSpeed() {
    this.speed = 0.8 + Math.random() * 1.5;
  }

  updateAI(character) {
    const dx = character.x - this.x;
    const dy = character.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.isAttacking = distance < 250;
  }

  animationChickenWalk() {
    setInterval(() => {
      if (this.isDead) {
        return;
      }

      if (this.isAttacking) {
        this.playAnimation(this.ENEMIES_ATTACK);
      } else {
        this.playAnimation(this.ENEMIES_WALK);
      }
    }, 175);
  }

  animationChickenDead() {
    setInterval(() => {
      if (!this.isDead || this.deathAnimationDone) {
        return;
      }
      const frames = this.ENEMIES_DEAD;
      if (!frames || frames.length === 0) {
        return;
      }
      if (this.deathFrame < 0 || this.deathFrame >= frames.length) {
        this.deathFrame = frames.length - 1;
      }
      const path = frames[this.deathFrame];
      this.img = this.imageCache[path];
      if (this.deathFrame < frames.length - 1) {
        this.deathFrame++;
      } else {
        this.deathAnimationDone = true;
      }
      this.applyGravity();
    }, 175);
  }
}
