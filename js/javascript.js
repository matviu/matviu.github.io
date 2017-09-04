/*--main-nav open-close--*/
(function(){

  var btnToggle = document.querySelector('.main-nav__toggle');
  var nav = document.querySelector('.main-nav');

  btnToggle.onclick = function() {
    if(nav.classList.contains("main-nav_closed")) {
      nav.classList.remove("main-nav_closed");
      nav.classList.add("main-nav_opened");
    } else {
      nav.classList.add("main-nav_closed");
      nav.classList.remove("main-nav_opened");
    }
  };



})();
