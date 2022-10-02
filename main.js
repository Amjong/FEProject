'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  navbarChange();
  homeTransparent();
});

// Make home slowly fade to transparent as the window scroll down
function homeTransparent() {
  if (window.scrollY > 0) {
    const opacityValue = 1 - window.scrollY / homeHeight;
    home.style.opacity = opacityValue.toString();
  }
}

function navbarChange() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
}

// when click navbar menu, scroll move to proper section
const navbarMenuItem = document.querySelector('.navbar__menu');
navbarMenuItem.addEventListener('click', (event) => {
  scrollIntoView(event.target.dataset.link);
});

// handle contact me btn to move scroll contact section
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
  scrollIntoView(event.target.dataset.link);
});

function scrollIntoView(Selector) {
  document.querySelector(Selector).scrollIntoView({ behavior: 'smooth' });
}
