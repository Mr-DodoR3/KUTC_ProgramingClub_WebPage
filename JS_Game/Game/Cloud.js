class Cloud {
  x;
  y;
  w;
  h;
  img;
  alpha;
  flag = false;

  constructor() {    
    this.img = loadImage("Game/Image/Cloud.png");
    this.alpha = Math.floor(Math.random() * 100) + 150;

    this.w = Math.floor(Math.random() * 101) + 40;
    this.h = Math.floor(Math.random() * 101) + 40;
    this.x = Math.floor(Math.random() * 701) - 100 - this.w/2;
    this.y = 0 - this.h;
  }

  loop(pm) {
    tint(255, 255, 255, this.alpha);
    image(this.img, this.x, this.y, this.w, this.h);
    noTint()

    this.y += 1;

    this.x = (pm == -1 ? this.x + 3 : ((pm == 1) ? this.x - 3 : this.x))

    if (this.y > 600) this.flag = true;
  }
}