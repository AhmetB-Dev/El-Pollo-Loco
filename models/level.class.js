class Level {
  enemies;
  coin;
  ammo;
  backgroundObjects;
  ambient;
  level_end = 240320;

  constructor(enemies, coin, ammo, backgroundObjects, ambient) {
    this.enemies = enemies;
    this.coin = coin;
    this.ammo = ammo;
    this.backgroundObjects = backgroundObjects;
    this.ambient = ambient;
  }
}
