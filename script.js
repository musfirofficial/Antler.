'use strict';

const navToggle = document.querySelector('.navtoggle');
const navBar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
  navBar.classList.toggle('hidden');
});
