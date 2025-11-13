class Level {
  enemies;
  backgroundObjects;
  clouds;
  level_end = 2400;

  constructor(enemies, backgroundObjects, clouds) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.clouds = clouds;
  }
}
