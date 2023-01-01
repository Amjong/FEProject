'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  navbarChange();
  homeTransparent();
});

// Make home slowly fade to transparent as the window scroll down
function homeTransparent() {
  const opacityValue = 1 - window.scrollY / homeHeight;
  home.style.opacity = opacityValue.toString();
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

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }
});

arrowBtn.addEventListener('click', () => {
  window.scrollTo(top);
  homeTransparent();
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
