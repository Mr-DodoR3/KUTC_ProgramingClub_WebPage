class Shot {
  x;
  y;
  w = 4;
  h = 20;
  flag = false;

  constructor(tx, ty) {
    this.x = tx - this.w/2;
    this.y = ty;
  }

  loop(pm) {
    fill("#c39143");
    rect(this.x, this.y, this.w, this.h);
    this.y -= 6;

    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x))

    if ((this.y - this.h) < 0) this.flag = true;
  }
}