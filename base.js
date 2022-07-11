function header()
{
  document.write(
    `
    <header>
      <a href="../TopPage/index.html"><img class="logo" src="../Image/Logo.png"></a>
      <ol class="headerURL">
        <a href="../ClubIntroduction/index.html"><li>部活動紹介</li></a>
        <a href="../PageList/index.html"><li>記事一覧</li></a>
        <a href="../MyIntroduction/index.html"><li>自己紹介</li></a>
        <a href="../LinkData/index.html"><li>外部リンク集</li></a>
      </ol>
    </header>
    `
  );
}

function footer()
{
  document.write(
    `
    <footer>
      <div class="space"></div>
      <div class="footerContents">
        <div class="footerLogo"><img src="../Image/Logo.png" width="300px" height="45px"></div>
        <p class="copyright">&copy;Ryoga Nishihan</p>
      </div>
    </footer>
    `
  )
}

function fadeoutScene()
{
  document.write(
    `<div id="change" class="change"></div>
    <script src="../fade.js"></script>`
  )
}