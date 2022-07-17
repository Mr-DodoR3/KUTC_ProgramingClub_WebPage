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

  loop() {
    fill("#c39143");
    rect(this.x, this.y, this.w, this.h);
    this.y -= 6;

    if ((this.y - this.h) < 0) this.flag = true;
  }

  flagChack() {
    return this.flag;
  }
}