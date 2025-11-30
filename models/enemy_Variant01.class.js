class Enemy_Variant01 extends MovableObject {
  y = 300;
  height = 70;
  width = 90;

  isDead = false;
  isAttacking = false;

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
    this.animationChicken();
    this.spawnChickenRandom();
    this.chickenSpeed();
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
    this.isDead = true;
    this.speed = 0;
    this.currentImage = 0;
  }

  spawnChickenRandom() {
    this.x = 300 + Math.random() * 700;
  }

  chickenSpeed() {
    this.speed = 0.8 + Math.random() * 1.5;
  }

  updateAI(character) {
    const dx = character.x - this.x;
    const dy = character.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.isAttacking = distance < 250;

    this.otherDirection = character.x > this.x;
  }

  animationChickenWalk() {
    this.moveLeft();
    // this.moveRight();
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
      if (this.isDead) {
        this.playAnimation(this.ENEMIES_DEAD);
      }
    }, 175);
  }
}
