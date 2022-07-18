class Missile_enemy {
  x;
  y;
  w = 10;
  h = 30;
  base_x;
  flag = false;

  constructor(tx, ty, px) {
    this.x = tx - this.w/2;
    this.y = ty;
    this.img = loadImage("Game/Image/R73.png");
    if (Math.abs(this.x - px) > 150) {
      this.base_x = this.x - px > 0 ? -150 + this.x : 150 + this.x
    }
    else {
      this.base_x = px;
    }
  }

  loop(pm) {
    image(this.img, this.x, this.y, this.w, this.h);

    this.y += 6;
    this.x = (this.base_x - this.x) / 20 + this.x;
    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x));

    if (this.y > 600) this.flag = true;
  }
}