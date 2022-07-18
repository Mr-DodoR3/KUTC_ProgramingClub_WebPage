class Enemy {
  hp;
  x;
  y;
  w;
  h;
  unit;
  flag = false;
  speed = 0;
  reload;
  reload_counter = 0;

  constructor() {
    this.unit = Math.floor(Math.random() * 2);
    this.reload = Math.floor(Math.random() * 41) + 20;
    if (this.unit == 1) {
      this.img = loadImage("Game/Image/R01M.png");
      this.hp = 4;
      this.w = 40;
      this.h = 60;
    }
    else {
      this.img = loadImage("Game/Image/Yak38.png");
      this.hp = 2;
      this.w = 30;
      this.h = 60;
      this.speed = Math.floor(Math.random() * 5) - 2;
    }
    this.x = Math.floor(Math.random() * 701) - 100 - this.w/2;
    this.y = 0 - this.h;
  }

  loop(pm) {
    this.reload_counter++;

    image(this.img, this.x, this.y, this.w, this.h);
    this.y += 2;
    
    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x)) + this.speed;

    if (this.y > 600) this.flag = true;

    if (this.reload_counter > this.reload) {
      this.reload = Math.floor((this.unit == 0  ? ((Math.random() * 61) + 20) : ((Math.random() * 121) + 60)));
      this.reload_counter = 0;
      return this.unit == 0 ? 1 : 2;
    }
  }

  damage(d=1) {
    this.hp -= d;
    if (this.hp < 1) this.flag = true;
  }
}