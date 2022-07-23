function writeText(t, x, y, px, c)
{
  let text = px + "px arial";
  ctx.font = text;
  ctx.fillStyle = c;
  ctx.fillText(t, x, y);
}

function writeStrokeText(t, x, y, px, c)
{
  let text = px + "px arial";
  ctx.font = text;
  ctx.strokeStyle = c;
  ctx.strokeText(t, x, y);
}

function align(a)
{
  switch(a)
  {
    case "right":
    case "右":
      ctx.textAlign = "right";
      break;
    case "center":
    case "中央":
      ctx.textAlign = "center";
      break;
    case "left":
    case "左":
      ctx.textAlign = "left";
      break;
  }
}

function background(c)
{
  drawRect(0, 0, 600, 600);
  fillColor(c);
}

function drawLine(fx, fy, ex, ey)
{
  ctx.beginPath();
  ctx.moveTo(fx, fy);
  ctx.lineTo(ex, ey);
  ctx.closePath();
}

function drawStroke()
{
  ctx.stroke();
}

function fillColor(c)
{
  ctx.fillStyle = c;
  ctx.fill();
}

function strokeColor(c)
{
  ctx.strokeStyle = c;
}

function drawRect(x, y, w, h)
{
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
}

function drawStrokeRect(x, y, w, h, s)
{
  ctx.lineWidth = s;
  ctx.strokeRect(x, y, w, h);
}
