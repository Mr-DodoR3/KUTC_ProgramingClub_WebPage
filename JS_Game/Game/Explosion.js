class Explosion {
  x;
  y;
  w = 50;
  h = 50;
  img = [];
  n = 0;
  counter = 0;
  flag = false;

  constructor(tx, ty) {
    this.x = tx;
    this.y = ty;
    
    this.img[0] = loadImage("Game/Image/Explosion/explosion1.png");
    this.img[1] = loadImage("Game/Image/Explosion/explosion2.png");
    this.img[2] = loadImage("Game/Image/Explosion/explosion3.png");
    this.img[3] = loadImage("Game/Image/Explosion/explosion4.png");
    this.img[4] = loadImage("Game/Image/Explosion/explosion5.png");
    this.img[5] = loadImage("Game/Image/Explosion/explosion6.png");
    this.img[6] = loadImage("Game/Image/Explosion/explosion6.png");
  }

  loop(pm) {
    image(this.img[this.n], this.x, this.y, this.w, this.h)
    this.y += 3;
    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x))

    this.counter++
    if (this.counter > 3) {
      if (this.n > 5) {
        this.flag = true;
      }
      else {
        if (this.n > 4) {
          this.w -= 15;
          this.h -= 15;
        }
        this.counter = 0;
        this.n++;
      }
    }
  }
}