//基準[0][0]
var shape_O = 
[
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
]

var shape_I = 
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 2, 2, 2],
  [0, 0, 0, 0]
]

var shape_S = 
[
  [0, 0, 0, 0],
  [0, 3, 3, 0],
  [3, 3, 0, 0],
  [0, 0, 0, 0]
]

var shape_Z = 
[
  [0, 0, 0, 0],
  [4, 4, 0, 0],
  [0, 4, 4, 0],
  [0, 0, 0, 0]
]

var shape_L = 
[
  [0, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 5, 5, 5],
  [0, 0, 0, 0]
]

var shape_J = 
[
  [0, 0, 0, 0],
  [0, 0, 6, 0],
  [6, 6, 6, 0],
  [0, 0, 0, 0]
]

var shape_T = 
[
  [0, 0, 0, 0],
  [7, 7, 7, 0],
  [0, 7, 0, 0],
  [0, 0, 0, 0]
]

var shape_C = 
[
  [0, 0, 0, 0],
  [8, 0, 8, 0],
  [8, 8, 8, 0],
  [0, 0, 0, 0]
]

var shape_1 = 
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [9, 9, 9, 0],
  [0, 0, 0, 0]
]

function blockColor(n, edge)
{
  switch (n)
  {
    case 1:
      return (edge == false ? "#FFFFCC" : "#FFFF00");
      break;
    case 2:
      return (edge == false ? "#99FFFF" : "#33FFFF");
      break;
    case 3:
      return (edge == false ? "#FF6666" : "#FF3333");
      break;
    case 4:
      return (edge == false ? "#99FF99" : "#33FF33");
      break;
    case 5:
      return (edge == false ? "#FFCC66" : "#FF9933");
      break;
    case 6:
      return (edge == false ? "#6666FF" : "#3333FF");
      break;
    case 7:
      return (edge == false ? "#FF99FF" : "#FF33FF");
      break;
    case 8:
      return (edge == false ? "#99ffcc" : "#00ffcc");
      break;
    case 9:
    default:
      return (edge == false ? "#eeeeee" : "#cccccc");
      break;
  }
}