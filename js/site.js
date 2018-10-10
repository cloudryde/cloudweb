window.onscroll = function() {
  let siteHeader = document.getElementsByClassName('js-siteHeader')[0];
};

let rand = function() {
  return Math.floor(Math.random() * Math.floor(100));
}

// dots
// const dotsContainer = document.getElementsByClassName('js-scooter-dots')[0];
// let dots = document.getElementsByClassName('js-scooter-dot');
// for (var i = 0; i < 14; i++) {
//   let clonedNode = dots[0].cloneNode(true);
//   clonedNode.style.top = rand() + '%';
//   clonedNode.style.left = rand() + '%';
//   dotsContainer.appendChild(clonedNode);
// }

// swap dom
let media = window.matchMedia('(max-width: 910px)');
let contents = [];
let desktop = document.getElementsByClassName('js-desktop-contents');
let mobile = document.getElementsByClassName('js-mobile-contents');
let map = Array.prototype.map;

let clickEvent = typeof window.ontouchstart === 'undefined' ? 'click' : 'touchstart';

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

// mobile nav
let toggleMobileNav = function() {
  mobileNav.classList.toggle('show');
  mobileArrow.classList.toggle('swap');
}

let mobileArrow = document.getElementsByClassName('js-mobile-nav-arrow')[0];
let mobileNav = document.getElementsByClassName('js-site-nav')[0];
mobileArrow.addEventListener(clickEvent, toggleMobileNav);

// carousel
let carouselContent = document.getElementsByClassName('js-carousel-content');
let carouselRight = document.getElementsByClassName('js-carousel-right')[0];
let carouselLeft = document.getElementsByClassName('js-carousel-left')[0];
let carouselIndex = 0;
const carouselMax = carouselContent.length;

const carousel = function(direction) {
  if (direction == 'right') {
    if (carouselIndex == carouselMax - 1) {
      carouselIndex = 0;
    }
    else {
      ++carouselIndex;
    }
  }
  else {
    if (carouselIndex == 0) {
      carouselIndex = carouselMax - 1;
    }
    else {
      --carouselIndex;
    }
  }

  Array.prototype.forEach.call(carouselContent, function(el) {
    el.classList.remove('show');
  });
  carouselContent[carouselIndex].classList.add('show');
};

carouselRight.addEventListener(clickEvent, function() {
  carousel('right');
});

carouselLeft.addEventListener(clickEvent, function() {
  carousel('left');
});
