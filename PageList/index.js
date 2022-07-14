function smoothScroll() {
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));

      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 30;
      const target = rect + offset - gap;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    })
  }
}

function setImage() {
  var box = document.getElementById('ckb');
  var img = document.getElementById('arrow_img');
  
  if (box.checked == true) {
    console.log("チェックされています");
    arrow_img.setAttribute('src', '../Image/arrow_2.png');

    
  }
  else {
    console.log("チェックされていません");
    arrow_img.setAttribute('src', '../Image/arrow_1.png');
  }
}