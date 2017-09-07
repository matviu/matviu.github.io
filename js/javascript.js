var body = document.querySelector('body');

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

/*--about__item open-close--*/
(function(){

  if (body.classList.contains('body-about')) {

    var list = document.querySelector('.about__list');

    list.onclick = function(event) {
      var target = event.target;

      if (target.tagName != "SPAN") return;

      var parent = target.parentNode;

      if (parent.classList.contains("about__item_closed")) {
        parent.classList.remove("about__item_closed");
        parent.classList.add("about__item_opened");
      } else {
        parent.classList.add("about__item_closed");
        parent.classList.remove("about__item_opened");
      }

    };

  }

})();

/*--contacts__item open-close--*/
(function(){

  if (body.classList.contains('body-contacts')) {

    var list = document.querySelector('.contacts__list');

    list.onclick = function(event) {
      var target = event.target;

      if (target.tagName != "SPAN") return;

      var parent = target.parentNode;

      if (parent.classList.contains("contacts__item_closed")) {
        parent.classList.remove("contacts__item_closed");
        parent.classList.add("contacts__item_opened");
      } else {
        parent.classList.add("contacts__item_closed");
        parent.classList.remove("contacts__item_opened");
      }

    };

  }

})();
