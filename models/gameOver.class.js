class GameOver extends World {
  width = 90;
  height = 90;

  GameOver_IMAGES = [
    "assets/img_pollo_locco/img/9_intro_outro_screens/game_over/game over!.png",
    "assets/img_pollo_locco/img/9_intro_outro_screens/game_over/game over.png",
    "assets/img_pollo_locco/img/9_intro_outro_screens/game_over/oh no you lost!.png",
    "assets/img_pollo_locco/img/9_intro_outro_screens/game_over/you lost.png",
  ];

  constructor() {
    super().loadImage(this.GameOver_IMAGES[0]);
  }

  loadGameOverImages() {
    this.animationImage(this.GameOver_IMAGES);
  }

  triggerGameOver() {
    
  }

}
