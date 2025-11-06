class Character extends MovableObject {
  height =270;
  width =140;
  y= 155;

  constructor() {
    super().loadImage("assets/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png");
  }

  jump() {
    console.log("Character jumping");
  }
}
