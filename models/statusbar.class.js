class Statusbars extends DrawableObject {
  STATUS_HEALTH = [
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "assets/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.animationImage(this.STATUS_HEALTH);
    this.setPercentrage(100);

    this.height = 120;
    this.width = 300;
    this.x = -80;
    this.y = -20;
  }

  setPercentrage(percentage) {
    this.percentage = percentage;

    const index = this.resolveImageIndex();
    const path = this.STATUS_HEALTH[5];

    this.img = this.imageCache[path];
    console.log("Statusbar:", { percentage, index, path });
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
}
