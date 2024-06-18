'use strict';

document.querySelectorAll('a[data-target]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });

      hamburgerMenu.classList.remove('active');
      hamburgerIcon.classList.remove('active');
    }
  });
});

function scrollToSection3() {
  const section3 = document.querySelector('.section-3');

  if (section3) {
    section3.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToContactForm() {
  const contactFormSection = document.getElementById('contact');

  if (contactFormSection && isMobileDevice()) {
    const offsetFromBottom = 733;
    const contactFormPosition =
      contactFormSection.getBoundingClientRect().top + window.scrollY;
    const windowHeight = window.innerHeight;

    window.scrollTo({
      top: contactFormPosition - windowHeight + offsetFromBottom,
      behavior: 'smooth',
    });
  }
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

document
  .querySelector('.hamburger-menu a[data-target="home"]')
  .addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerMenu.classList.remove('active');
    hamburgerIcon.classList.remove('active');
  });

const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', function () {
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.remove('active');
    hamburgerIcon.classList.remove('active');
  } else {
    hamburgerMenu.classList.add('active');
    hamburgerIcon.classList.add('active');
  }
});
