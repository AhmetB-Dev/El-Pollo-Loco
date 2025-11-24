class MovableObject extends DrawableObject {

  speed = 0.15;
  otherDiretion = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  items = 0;


  
  isColliding(mo) {
    return (
      // rechte Seite von this > linke Seite von mo
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      // linke Seite von this < rechte Seite von mo
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      // untere Seite von this > obere Seite von mo
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      // obere Seite von this < untere Seite von mo
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  getItems() {
    this.items += 1;
    if (this.items > 5) {
      this.items = 5;
    }
  }

  hit() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1.5;
  }

  dead() {
    return this.energy == 0;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 155;
  }


  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  setJumpHeight() {
    this.speedY = 25;
  }

  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
}
