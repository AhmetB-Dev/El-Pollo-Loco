class World {
  canvas;
  ctx;
  input;

  level = level1;

  character = new Character();
  otherDirection = false;
  camera_x = 0;

  healthBar = new Statusbars();
  coinBar = new Statusbars();
  bottleBar = new Statusbars();
  throwableObjects = [new ThrowableObject()];

  constructor(canvas, input) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.input = input;

    this.loadbottleBar();
    this.loadHealthBar();
    this.loadCoinBar();

    this.draw();
    this.setWorld();

    this.handlePlayerInteractions();
  }

  loadbottleBar() {
    this.bottleBar = new Statusbars();
    this.bottleBar.initBottleBar(0, 0);
  }

  loadHealthBar() {
    this.healthBar = new Statusbars();
    this.healthBar.initHealthBar(0, 50);
  }

  loadCoinBar() {
    this.coinBar = new Statusbars();
    this.coinBar.initCoinBar(0, 105);
  }

  setWorld() {
    this.character.world = this;
  }

  handlePlayerInteractions() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
    }, 100);
  }

  checkThrowableObjects() {
    if (this.input.THROW) {
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
      this.throwableObjects.push(bottle);
    }
  }
  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.healthBar.setPercentrage(this.character.energy);
        }
      });
    }, 1000);

    setInterval(() => {
      this.level.coin.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          coin.getItems();
          console.log("Coins collected: ", coin.items);
        }
        for (let i = this.level.coin.length - 1; i >= 0; i--) {
          const coin = this.level.coin[i];
          if (this.character.isColliding(coin)) {
            this.level.coin.splice(i, 1);
          }
        }
      });
    }, 100);

    setInterval(() => {
      this.level.bottels.forEach((bottel) => {
        if (this.character.isColliding(bottel)) {
          bottel.getItems();
          console.log("Bottels collected: ", bottel.items);
        }
        for (let i = this.level.bottels.length - 1; i >= 0; i--) {
          const bottel = this.level.bottels[i];
          if (this.character.isColliding(bottel)) {
            this.level.bottels.splice(i, 1);
          }
        }
      });
    }, 100);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.bottleBar);
    this.addToMap(this.healthBar);
    this.addToMap(this.coinBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.bottels);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(() => self.draw());
  }

  addObjectsToMap(object) {
    object.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(movableObject) {
    if (movableObject.otherDirection) {
      this.flipImage(movableObject);
    }
    movableObject.draw(this.ctx);
    movableObject.showHitbox(this.ctx);
    if (movableObject.otherDirection) {
      this.flipImageBack(movableObject);
    }
  }
  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }

  flipImageBack(movableObject) {
    movableObject.x = movableObject.x * -1;
    this.ctx.restore();
  }
}
