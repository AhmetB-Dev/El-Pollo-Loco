class Statusbars extends DrawableObject {
  IMAGES;
  percentage = 100;

  STATUS_HEALTH = [
    "assets/assets_sharkie/4. Marcadores/green/Life/0_  copia 3.png",
    "assets/assets_sharkie/4. Marcadores/green/Life/20_ copia 4.png",
    "assets/assets_sharkie/4. Marcadores/green/Life/40_  copia 3.png",
    "assets/assets_sharkie/4. Marcadores/green/Life/60_  copia 3.png",
    "assets/assets_sharkie/4. Marcadores/green/Life/80_  copia 3.png",
    "assets/assets_sharkie/4. Marcadores/green/Life/100_  copia 2.png",
  ];

  STATUS_COIN = [
    "assets/assets_sharkie/4. Marcadores/orange/0_  copia 2.png",
    "assets/assets_sharkie/4. Marcadores/orange/20_  copia.png",
    "assets/assets_sharkie/4. Marcadores/orange/40_  copia 2.png",
    "assets/assets_sharkie/4. Marcadores/orange/60_  copia 2.png",
    "assets/assets_sharkie/4. Marcadores/orange/80_  copia 2.png",
    "assets/assets_sharkie/4. Marcadores/orange/100_ copia 2.png",
  ];

  STATUS_BOTTLE = [
    "assets/assets_sharkie/4. Marcadores/Purple/0_.png",
    "assets/assets_sharkie/4. Marcadores/Purple/20_.png",
    "assets/assets_sharkie/4. Marcadores/Purple/40_.png",
    "assets/assets_sharkie/4. Marcadores/Purple/60_.png",
    "assets/assets_sharkie/4. Marcadores/Purple/80_.png",
    "assets/assets_sharkie/4. Marcadores/Purple/100_.png",
  ];

  constructor() {
    super();
    this.height = 80;
    this.width = 220;
    this.x = 0;
    this.y = 0;
  }

  setPercentrage(percentage) {
    this.percentage = percentage;

    const index = this.resolveImageIndex();
    const path = this.IMAGES[index];

    this.img = this.imageCache[path];
  }

  initBottleBar(x, y, percentage = 0) {
    this.IMAGES = this.STATUS_BOTTLE;
    this.animationImage(this.IMAGES);
    this.setPercentrage(percentage);
    this.x = x;
    this.y = y;
  }

  initHealthBar(x, y, percentage = 100) {
    this.IMAGES = this.STATUS_HEALTH;
    this.animationImage(this.IMAGES);
    this.setPercentrage(percentage);
    this.x = x;
    this.y = y;
  }

  initCoinBar(x, y, percentage = 0) {
    this.IMAGES = this.STATUS_COIN;
    this.animationImage(this.IMAGES);
    this.setPercentrage(percentage);
    this.x = x;
    this.y = y;
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  stackImageIndex() {
    if (this.percentage == 0) {
      return 0;
    } else if (this.percentage < 20) {
      return 1;
    } else if (this.percentage < 40) {
      return 2;
    } else if (this.percentage < 60) {
      return 3;
    } else if (this.percentage < 80) {
      return 4;
    } else {
      return 5;
    }
  }
}
