class Missile {
  x;
  y;
  w = 10;
  h = 30;
  base_x;
  flag = false;

  constructor(tx, ty) {
    this.base_x = Math.floor(Math.random() * 201) + 200;
    this.x = tx - this.w/2;
    this.y = ty;
    this.img = loadImage("Game/Image/AIM9.png");
  }

  loop(pm) {
    image(this.img, this.x, this.y, this.w, this.h);

    this.y -= 6;
    this.x = (this.base_x - this.x) / 20 + this.x;
    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x))
    this.base_x = (pm == -1 ? this.base_x + 3 : ((pm == 1) ? this.base_x - 3 : this.base_x))

    if ((this.y - this.h) < 0) this.flag = true;
  }
}