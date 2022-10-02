'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// when click navbar menu, scroll move to proper section
const navbarMenuItem = document.querySelector('.navbar__menu');
navbarMenuItem.addEventListener('click', (event) => {
  const tempElement = document.querySelector(
    event.target.dataset.link.toString()
  );
  tempElement.scrollIntoView({ behavior: 'smooth' });
});
