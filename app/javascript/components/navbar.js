const navbarScroll = () => {
  var navDiv = document.querySelector('nav');
  window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120 ) {
      navDiv.classList.add("scroll-navbar");
    } else {
      navDiv.classList.remove("scroll-navbar");
    };
  };
}
export { navbarScroll };