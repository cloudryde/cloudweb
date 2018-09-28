window.onscroll = function() {
  let siteHeader = document.getElementsByClassName('js-siteHeader')[0];
};

let media = window.matchMedia('(max-width: 980px)');

media.addListener((mq) => {

});

let toggleMobileNav = function() {
  mobileNav.classList.toggle('show');
  mobileArrow.classList.toggle('swap');
}

let mobileArrow = document.getElementsByClassName('js-mobile-nav-arrow')[0];
let mobileNav = document.getElementsByClassName('js-site-nav')[0];
mobileArrow.addEventListener('touchstart', toggleMobileNav);
mobileArrow.addEventListener('click', toggleMobileNav);

