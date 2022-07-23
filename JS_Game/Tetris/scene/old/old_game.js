var time = 60.0;

var blockData = Array(18);
for (let i = 0; i < blockData.length; i++)
{
  blockData[i] = new Array(10);
}

var control;

var x, y;
var shape
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
var nowblockType;

var flame;
var interval;

var evacuationTime;
var evacuationAllTime;

function gamebackground()
{
  //background("#333333");

  for (let i = 0; i <= 10; i++)
  {
    strokeColor(i == 0 || i == 10 ? "#33FFFF" : "#999999");
    ctx.lineWidth = (i == 0 || i == 10 ? 5 : 1);
    let p = 150 + i * 30;
    drawLine(p, 30, p, 570);
    drawStroke();
  }
  for (let i = 0; i <= 18; i++)
  {
    strokeColor(i == 0 || i == 18 ? "#33FFFF" : "#999999");
    ctx.lineWidth = (i == 0 || i == 18 ? 5 : 1);
    let p = 30 + i * 30;
    drawLine(150, p, 450, p);
    drawStroke();
  }

  drawRect(0, 0, 600, 30);
  fillColor("#333333");
  drawRect(0, 570, 600, 30);
  fillColor("#333333");
  drawRect(0, 0, 150, 600);
  fillColor("#333333");
  drawRect(450, 0, 150, 600);
  fillColor("#333333");
}

function time_UI()
{
  if (timeDecimalCount() == true) time -= 0.1;
  align("left");
  writeText("Time:" + time.toFixed(1), 460, 50, 24, "#FFFFFF");
}

function flamelate()
{
  if (control == true)
  {
    flame++;
    if (flame > (FPS / 10) * interval)
    {
      y++;
      flame = 0;
    }
  }
  display();
}

function display()
{
  for (let i = 0; i < 18; i++)
  {
    for (let j = 0; j < 10; j++)
    {
      if (blockData[i][j] != 0)
      {
        drawRect((150 + j * 30) + 1, (30 + i * 30) + 1, 28 ,28);
        fillColor(blockColor(blockData[i][j]));
      }
    }
  }
  //console.log("display : " + blockData);
}

function generation()
{
  x = 3, y = -4;
  var form = Math.floor(Math.random() * 7);
  control = true;
  evacuationTime = 0;
  evacuationAllTime = 0;
  
  nowblockType = form + 1;
  switch (form)
  {
    case 0:
      shape = shape_O;
      break;
    case 1:
      shape = shape_I;
      break;
    case 2:
      shape = shape_S;
      break;
    case 3:
      shape = shape_Z;
      break;
    case 4:
      shape = shape_L;
      break;
    case 5:
      shape = shape_J;
      break;
    case 6:
    default:
      shape = shape_T;
      break;
  }
  //console.log(shape);
}

function contller()
{
  for (let i = 0; i < 4; i++)
  {
    for (let j = 0; j < 4; j++)
    {
      if (shape[i][j] != 0)
      {
        drawRect((150 + x * 30) + j * 30 + 1, (30 + y * 30) + i * 30 + 1, 28 ,28);
        fillColor(blockColor(nowblockType));
      }
    }
  }
  collision();
}

function collision()
{
  let onGround = 0;
  for (let i = 0; i < 4; i++)
  {
    for (let j = 0; j < 4; j++)
    {
      onGround += fall(i, j);
    }
  }
  control = (onGround == 0 ? true : false);
}

function fall(i, j)
{
  if (shape[i][j] != 0)
  {
    if (y + i >= 17) return 1;
    else if (y + i > -1)
    {
      if (blockData[y + i + 1][x + j] != 0) return 1;
    }
  }
  return 0;
}

function confirmCall()
{
  control = false;
}

function confirm()
{
  for (let i = 0; i < 4; i++)
  {
    for (let j = 0; j < 4; j++)
    {
      //console.log("i:" + i + "回目,j:" + j + "回目");
      //console.log("y = " + (i + y) + ",x = " + (j + x));
      if (shape[i][j] != 0 && y >= 0 && y + i < 18)//x >= 0 && x + j < 10 && 
      {
        blockData[y + i][x + j] = shape[i][j];
        blockData[y + i][x + j] = shape[i][j];
      }
    }
  }
  //console.log(blockData);
}

function move(key)
{
  let moveBan = false;
  if (control == false && evacuationAllTime < 60) evacuationTime = 0;
  switch (key)
  {
    case "left":
      for (let i = 0; i < 4; i++)
      {
        for (let j = 0; j < 4; j++)
        {
          if (shape[i][j] != 0)
          {
            if (x + j <= 0) moveBan = true;
            else if (y + i > -1)
            {
              if (blockData[y + i][x + j - 1] != 0) moveBan = true;
            }
          }
        }
      }
      if (moveBan == false) x--;
      break;
    
    case "right":
      for (let i = 0; i < 4; i++)
      {
        for (let j = 0; j < 4; j++)
        {
          if (shape[i][j] != 0)
          {
            if (x + (j + 1) >= 10) moveBan = true;
            else if (y + i > -1)
            {
              if (blockData[y + i][x + j + 1] != 0) moveBan = true;
            }
          }
        }
      }
      if (moveBan == false) x++;
      break;
  }
}

function speedfall(b)
{
  interval = (b == true ? 0.2 : 4);
}

function skip()
{
  while (control)
  {
    y++;
    collision();
  }
}

function rotate(direction)
{
  if (shape != shape_O)
  {
    let shape_temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    for (let i = 0; i < 4; i++)
    {
      for (let j = 0; j < 4; j++)
      {
        if (direction == "left") shape_temp[i][j] = shape[j][3 - i];
        else shape_temp[i][j] = shape[3 - j][i];

        if (j + x < 0) move("right");
        if (j + x > 9) move("left");
      }
    }

    shape = shape_temp;
  }
}

function gamesetup()
{
  timeReset();
  flame = 0, interval =  4;
  generation();
  for (let i = 0; i < blockData.length; i++)
  {
    for (let j = 0; j < blockData[0].length; j++)
    {
      blockData[i][j] = 0;
    }
  }
  if (DEBUG == true) console.log(blockData);
}

function game()
{
  background("#333333");
  time_UI();
  flamelate();
  contller();
  if (control == false) 
  {
    evacuationTime++;
    evacuationAllTime++;
    if (evacuationTime > 20)
    {
      confirm();
      generation();
    }
  }
  gamebackground();
}