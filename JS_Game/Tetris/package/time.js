const FPS = 60;
var time_decimal;
var time_second;

function timeDecimalCount()
{
  time_decimal++;
  if (time_decimal >= FPS / 10)
  {
    time_decimal = 0;
    return true;
  }
  else
  {
    return false;
  }
}

function timeSecondCount()
{
  time_second++;
  if (time_second >= FPS)
  {
    time_second = 0;
    return true;
  }
  else
  {
    return false;
  }
}

function timeReset()
{
  time_decimal = 0;
  time_second = 0;
}