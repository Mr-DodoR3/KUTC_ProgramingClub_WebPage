class Player {
  hp;
  en;
  img;
  x = 280;
  w = 40;
  h = 60;
  control = 0;
  reload = 0;
  m_reload = 20;

  constructor() {
    this.img = loadImage("Game/Image/F18E.png");
    this.init();
  }

  init() {
    this.x = 280;
    this.hp = 100;
    this.en = 100;
    this.reload = 0;
    this.m_reload = 20;
  }

  drawCockpit(score) {
    textAlign(LEFT);

    fill("#333");
    rect(0, 0, width, 50);

    textSize(16);
    fill("#adff2f");
    text("SCORE : " + score, 16, 25);
    text("HP :", 16, 45);
    fill("#99F");
    colorMode(HSB);
    for (let i = 0; i < this.hp; i++) {
      fill(i , 100, 100);
      rect(60 + i * 5, 35, 5, 10);
    }
    colorMode(RGB);
  }

  loop(pm) {
    image(this.img, this.x, 500, this.w, this.h);
    switch(this.control) {
      case -1:
        this.x = (180 - this.x) / 10 + this.x;
        break;
      case 0:
        this.x = (280 - this.x) / 10 + this.x;
        break;
      case 1:
        this.x = (380 - this.x) / 10 + this.x;
        break;
    }

    this.m_reload++;
    if (this.m_reload > 20) {
      this.m_reload = 0;
      return 2;
    }
    if (this.reload > 10) {
      this.reload = 0;
      return 1;
    }
    else {
      this.reload++;
    }
  }
}