function contentLoaded() {
  // LANG BAR
  let switchEn = document.getElementById('switch-en');
  let switchEs = document.getElementById('switch-es');
  let myRoot = document.querySelector(':root');

  function langEnglish() {
    console.log("clicking on EN");
    myRoot.style.setProperty('--lang-en', 'block');
    myRoot.style.setProperty('--lang-es', 'none');
  }
  function langSpanish() {
    console.log("clicking on ES");
    myRoot.style.setProperty('--lang-es', 'block');
    myRoot.style.setProperty('--lang-en', 'none');
  }

  switchEn.addEventListener('click', langEnglish);
  switchEs.addEventListener('click', langSpanish);

}
