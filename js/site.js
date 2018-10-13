let rand = function() {
  return Math.floor(Math.random() * Math.floor(100));
}

let map = Array.prototype.map;
let forEach = Array.prototype.forEach;

let clickEvent = typeof window.ontouchstart === 'undefined' ? 'click' : 'touchstart';
let hoverEvent = typeof window.ontouchstart === 'undefined' ? 'mouseenter' : 'touchstart';

// nav scroll
let navLinks = document.getElementsByClassName('js-nav-link');
map.call(navLinks, function(el) {
  let hash = el.getAttribute('href');
  let scrollToEl = document.getElementById(hash.substring(1));

  if (!scrollToEl) {
    return;
  }

  el.addEventListener(clickEvent, function(event) {
    event.preventDefault();
    // window.location.hash = hash;
    window.scroll({
      top: scrollToEl.offsetTop - 100, 
      left: 0, 
      behavior: 'smooth' 
    });
  });
});


// dots
let initDots = function() {
  let dots = document.getElementsByClassName('js-scooter-dot');
  forEach.call(dots, function(el) {
    el.addEventListener(hoverEvent, function(event) {
      event.target.classList.toggle('hover');
    });
    if (hoverEvent === 'mouseenter') {
      el.addEventListener('mouseleave', function(event) {
        event.target.classList.toggle('hover');
      })
    }
  });
}

// swap dom
let media = window.matchMedia('(max-width: 910px)');
let contents = [];
let desktop = document.getElementsByClassName('js-desktop-contents');
let mobile = document.getElementsByClassName('js-mobile-contents');

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
  initDots();
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

// TODO: close the nav when you click a link

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
