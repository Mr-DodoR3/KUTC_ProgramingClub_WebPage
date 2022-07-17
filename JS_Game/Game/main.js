var scene = 0;

var titlecount = 0;
var score = 0;

var k_Check;

var player;
var shot = [];

function setup() {
  let result = document.getElementById('canvas_pos');
  let canvas = createCanvas(600, 600);
  canvas.parent(result);

  k_Check = new KeyManager();
  player = new Player();

  init();
}

function draw() {
  background(155, 255, 255);
  switch (scene) {
    case 0:
      title();
      break;
    case 1:
      game();
  }
}

function init() {
  socre = 0;
}

function title() {
  textAlign(CENTER);
  stroke(0);
  let alpha = 0;
  for (let i = 0; i < 25; i++) {
    textSize(32 + i*2);
    fill(255, 255, 255, alpha);
    text("Sky Dance", 300, 200);
    alpha += 10;
  }
  noStroke();

  textSize(32);
  fill(100, 255, 100);
  if (titlecount < 30) {
    text("<< Push to \"Z\" kye >>", 300, 400);
  }
  titlecount++;
  if (titlecount > 59) titlecount = 0;
}

function game() {
  if (k_Check.r) player.control = 1;
  else if (k_Check.l) player.control = -1;
  else player.control = 0;
  if (player.loop() == 1) {
    shot.push(new Shot(player.x + player.w/2, 500));
  }
  for (let i = 0; i < shot.length; i++) {
    shot[i].loop();
  }
  
  player.drawCockpit(score);

  for (let i = shot.length; i > 1; i--) {
    if (shot[i-1].flag) shot.splice(i-1, 1);
  }
}

function keyPressed() {
  if (scene == 1) {
    if (keyCode == LEFT_ARROW) k_Check.l = true;
    if (keyCode == RIGHT_ARROW) k_Check.r = true;
    if (key == "z") k_Check.z = true;
    if (key == "x") k_Check.x = true;
  }
  else {
    if (key == "z") {
      scene++;
    }
  }
}

function keyReleased() {
  if (scene == 1) {
    if (keyCode == LEFT_ARROW) k_Check.l = false;
    if (keyCode == RIGHT_ARROW) k_Check.r = false;
    if (key == "z") k_Check.z = false;
    if (key == "x") k_Check.x = false;
  }
}

class KeyManager {
  r;
  l;
  z;
  x;
  constructor() {
    this.init();
  }
  
  init() {
    this.r = false;
    this.l = false;
    this.z = false;
    this.x = false;
  }
}