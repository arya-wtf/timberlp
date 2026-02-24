// nav.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const closeBtn = document.querySelector('.nav-overlay-close');
  const navLinks = document.querySelectorAll('.nav-overlay a');
  const body = document.body;

  function openMenu() {
    body.classList.add('nav-open');
  }

  function closeMenu() {
    body.classList.remove('nav-open');
  }

  // Toggle on hamburger click
  hamburger.addEventListener('click', () => {
    if (body.classList.contains('nav-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on X button click
  closeBtn.addEventListener('click', closeMenu);

  // Close when a link inside the overlay is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
