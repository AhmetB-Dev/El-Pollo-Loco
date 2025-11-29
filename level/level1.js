const level1 = new Level(
  // 1) Enemies
  [
    new Enemy_Variant01(),
    new Enemy_Variant01(),
    new Enemy_Variant01(),
    new Enemy_Variant02(),
    new Enemy_Variant02(),
    new Enemy_Variant02(),
    new Boss(),
  ],

  [
    new Coin(500, 300),
    new Coin(550, 240),
    new Coin(600, 200),
    new Coin(650, 160),
    new Coin(700, 120),
    new Coin(750, 120),
    new Coin(800, 160),
    new Coin(850, 200),
    new Coin(900, 240),
    new Coin(950, 300),
  ],

  [
    new AmmoPickup("assets/assets_sharkie/4. Marcadores/Posión/Dark - Left.png", 600, 335),
    new AmmoPickup("assets/assets_sharkie/4. Marcadores/Posión/Dark - Right.png", 233, 335),
    new AmmoPickup("assets/assets_sharkie/4. Marcadores/Posión/Light - Left.png", 900, 335),
    new AmmoPickup("assets/assets_sharkie/4. Marcadores/Posión/Light - Right.png", 700, 335),
  ],

  // 2) Background-Objects
  [
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/D2.png", -719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/D2.png", -719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/D2.png", -719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/D2.png", -719, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/D.png", 0, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/D.png", 0, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/D.png", 0, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/D.png", 0, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/D1.png", 719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/D1.png", 719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/D1.png", 719, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/D1.png", 719, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/D2.png", 719 * 2, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/D2.png", 719 * 2, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/D2.png", 719 * 2, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/D2.png", 719 * 2, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/L.png", 719 * 3, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/L.png", 719 * 3, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/L.png", 719 * 3, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/L.png", 719 * 3, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Barrier/1.png", 900 * 2, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Barrier/3.png", 900 * 2, 0, 23, 23),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/L1.png", 719 * 4, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/L1.png", 719 * 4, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/L1.png", 719 * 4, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/L1.png", 719 * 4, 0),

    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/5. Water/L2.png", 719 * 5, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/4.Fondo 2/L2.png", 719 * 5, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/3.Fondo 1/L2.png", 719 * 5, 0),
    new BackgroundObject("assets/assets_sharkie/3. Background/Layers/2. Floor/L2.png", 719 * 5, 0),
  ],

  [new AmbientObject(0, 0), new AmbientObject(720, 0)]
);
