window.onscroll = function() {
  let siteHeader = document.getElementsByClassName('js-siteHeader')[0];
};

let media = window.matchMedia('(max-width: 910px)');
let contents = [];
let desktop = document.getElementsByClassName('js-desktop-contents');
let mobile = document.getElementsByClassName('js-mobile-contents');
let map = Array.prototype.map;

map.call(desktop, function(el, i) {
  contents[i] = el.innerHTML;
});

const swapContents = function(mq) {
  if (mq.matches) {
    map.call(desktop, function(el, i) {
      el.innerHTML = '';
    });
    map.call(mobile, function(el, i) {
      el.innerHTML = contents[i];
    });
  }
  else {
    map.call(mobile, function(el, i) {
      el.innerHTML = '';
    });
    map.call(desktop, function(el, i) {
      el.innerHTML = contents[i];
    });
  }
}

media.addListener(swapContents);
swapContents(media);

let toggleMobileNav = function() {
  mobileNav.classList.toggle('show');
  mobileArrow.classList.toggle('swap');
}

let mobileArrow = document.getElementsByClassName('js-mobile-nav-arrow')[0];
let mobileNav = document.getElementsByClassName('js-site-nav')[0];
// mobileArrow.addEventListener('touchstart', toggleMobileNav);
mobileArrow.addEventListener('click', toggleMobileNav);

