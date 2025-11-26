class Statusbars extends DrawableObject {
  IMAGES;
  percentage = 100;

  STATUS_HEALTH = [
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  STATUS_COIN = [
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];

  STATUS_BOTTLE = [
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
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
