function setImage() {
  var box = document.getElementById('ckb');
  var img = document.getElementById('arrow_img');
  
  if (box.checked == true) {
    arrow_img.setAttribute('src', '../Image/arrow_2.png');

    
  }
  else {
    arrow_img.setAttribute('src', '../Image/arrow_1.png');
  }
}