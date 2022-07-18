var scene = 0;

var titlecount = 0;
var score = 0;

var interval = 0;
var interval_counter = 0;
var C_interval = 0;
var C_interval_counter = 0;

var k_Check;

var player;
var shot = [];
var missile = [];
var enemy = [];
var shot_enemy = [];
var missile_enemy = [];
var explosion = [];
var cloud = [];

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
      break;
    case 2:
      result();
      break;
  }
}

function init() {
  score = 0;
  interval = Math.floor(Math.random() * 101) + 30;
  interval_counter = 0;
  C_interval = Math.floor(Math.random() * 101) + 30;
  C_interval_counter = 0;
  shot.splice(0);
  missile.splice(0);
  enemy.splice(0);
  shot_enemy.splice(0);
  missile_enemy.splice(0);
  explosion.splice(0);
  cloud.splice(0);
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
  
  let pa = player.loop();
  if (pa == 2 && k_Check.x) missile.push(new Missile(player.x + player.w/2, 500));
  else if (pa == 1) shot.push(new Shot(player.x + player.w/2, 500));
  for (let j = enemy.length; j > 0; j--) {
    if ((player.x+player.w > enemy[j-1].x) && (player.x < enemy[j-1].x+enemy[j-1].w) && (500 < enemy[j-1].y+enemy[j-1].h) && (500+player.h > enemy[j-1].y)) {
      enemy[j-1].damage(100);
      player.hp -= 40;
    }
  }

  for (let i = 0; i < shot.length; i++) {
    shot[i].loop(player.control);
  }
  for (let i = 0; i < missile.length; i++) {
    missile[i].loop(player.control);
  }
  for (let i = 0; i < shot_enemy.length; i++) {
    shot_enemy[i].loop(player.control);
  }
  for (let i = 0; i < missile_enemy.length; i++) {
    missile_enemy[i].loop(player.control);
  }
  for (let i = 0; i < enemy.length; i++) {
    if (enemy[i].loop(player.control) == 2) missile_enemy.push(new Missile_enemy(enemy[i].x + enemy[i].w/2, enemy[i].y, player.x));
    else if (enemy[i].loop(player.control) == 1) shot_enemy.push(new Shot_enemy(enemy[i].x + enemy[i].w/2, enemy[i].y));
  }
  for (let i = 0; i < explosion.length; i++) {
    explosion[i].loop(player.control);
  }
  for (let i = 0; i < cloud.length; i++) {
    cloud[i].loop(player.control);
  }
  
  player.drawCockpit(score);

  interval_counter++;
  if (interval_counter > interval) {
    enemy.push(new Enemy());
    interval = Math.floor(Math.random() * 101) + 30;
    interval_counter = 0;
  }
  C_interval_counter++;
  if (C_interval_counter > C_interval) {
    cloud.push(new Cloud());
    C_interval = Math.floor(Math.random() * 101) + 30;
    C_interval_counter = 0;
  }

  for (let i = shot.length; i > 0; i--) {
    for (let j = enemy.length; j > 0; j--) {
      if ((shot[i-1].x+shot[i-1].w > enemy[j-1].x) && (shot[i-1].x < enemy[j-1].x+enemy[j-1].w) && (shot[i-1].y < enemy[j-1].y+enemy[j-1].h) && (shot[i-1].y+shot[i-1].h > enemy[j-1].y)) {
        enemy[j-1].damage(1);
        score += 10;
        shot[i-1].flag = true;
      }
    }
    if (shot[i-1].flag) shot.splice(i-1, 1);
  }
  for (let i = missile.length; i > 0; i--) {
    for (let j = enemy.length; j > 0; j--) {
      if ((missile[i-1].x+missile[i-1].w > enemy[j-1].x) && (missile[i-1].x < enemy[j-1].x+enemy[j-1].w) && (missile[i-1].y < enemy[j-1].y+enemy[j-1].h) && (missile[i-1].y+missile[i-1].h > enemy[j-1].y)) {
        enemy[j-1].damage(50);
        explosion.push(new Explosion(missile[i-1].x, missile[i-1].y));
        score += 30;
        missile[i-1].flag = true;
      }
    }
    if (missile[i-1].flag) missile.splice(i-1, 1);
  }
  for (let i = enemy.length; i > 0; i--) {
    if (enemy[i-1].flag) { 
      if (enemy[i-1].hp < 1) {
        score += enemy[i-1].unit == 0 ? 100 : 300;
        explosion.push(new Explosion(enemy[i-1].x, enemy[i-1].y));
      }
      enemy.splice(i-1, 1);
    }
  }
  for (let i = shot_enemy.length; i > 0; i--) {
    if ((shot_enemy[i-1].x+shot_enemy[i-1].w > player.x) && (shot_enemy[i-1].x < player.x+player.w) && (shot_enemy[i-1].y < 500+player.h) && (shot_enemy[i-1].y+shot_enemy[i-1].h > 500)) {
      player.hp -= 5;
      shot_enemy[i-1].flag = true;
    }
    if (shot_enemy[i-1].flag) {
      shot_enemy.splice(i-1, 1);
    }
  }
  for (let i = missile_enemy.length; i > 0; i--) {
    if ((missile_enemy[i-1].x+missile_enemy[i-1].w > player.x) && (missile_enemy[i-1].x < player.x+player.w) && (missile_enemy[i-1].y < 500+player.h) && (missile_enemy[i-1].y+missile_enemy[i-1].h > 500)) {
      player.hp -= 30;
      explosion.push(new Explosion(missile_enemy[i-1].x, missile_enemy[i-1].y));
      missile_enemy[i-1].flag = true;
    }
    if (missile_enemy[i-1].flag) {
      missile_enemy.splice(i-1, 1);
    }
  }
  for (let i = explosion.length; i > 0; i--) {
    if (explosion[i-1].flag) {
      explosion.splice(i-1, 1);
    }
  }
  for (let i = cloud.length; i > 0; i--) {
    if (cloud[i-1].flag) {
      cloud.splice(i-1, 1);
    }
  }

  if (player.hp < 1) scene = 2;
}

function result() {
  textAlign(CENTER);
  stroke(0);
  textSize(36);
  fill(255);
  text("Your Score : " + score, 300, 200);

  noStroke();
  textSize(32);
  fill(100, 255, 100);
  if (titlecount < 30) {
    text("<< Push to \"Z\" kye >>", 300, 400);
  }
  titlecount++;
  if (titlecount > 59) titlecount = 0;
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
      init();
      player.init();
      k_Check.init();
      scene = 1;
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