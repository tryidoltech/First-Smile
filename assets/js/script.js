"use strict";

/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
};

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNav);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const popup = document.getElementById("appointment-popup");
const bookAppointmentBtn = document.getElementById("book-appointment");
const closeBtn = document.querySelector(".close");

bookAppointmentBtn.onclick = function () {
  popup.style.display = "block";
};

closeBtn.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "btn" that have text content "Book appointment"
  const bookButtons = Array.from(document.getElementsByClassName("btn")).filter(
    (button) => button.textContent.trim().toLowerCase() === "book appointment"
  );
  const popup = document.getElementById("appointmentPopup");
  const closeBtn = popup.querySelector(".close");

  // Add click event listener to all "Book appointment" buttons
  bookButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      popup.style.display = "block";
    });
  });

  // Close the popup when clicking the close button
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Close the popup when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });

  // Handle form submission (you can customize this part)
  const form = popup.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Appointment booked successfully!");
    popup.style.display = "none";
  });
});

//gsap animation in HOME PAGE

//GSAP animation for hero section

document.addEventListener('DOMContentLoaded', () => {
  // GSAP animation for page load
  gsap.from('.hero-content', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power3.out',
  });

  gsap.from('.hero-banner-icon', {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: 'power3.out',
  });

  // GSAP animation for cursor hover
  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    gsap.to('.hero-content', {
      duration: 0.5,
      x: x * 30,
      y: y * 30,
      ease: 'power3.out',
    });

    gsap.to('.hero-banner-icon', {
      duration: 0.5,
      x: -x * 30,
      y: -y * 30,
      ease: 'power3.out',
    });
  });
});

// gsap animation for service section which is in home page 

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.section-subtitle', {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
  });

  gsap.from('.section-title', {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
  });

  gsap.from('.service-card', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.service-list',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
  });

  gsap.from('.service-banner', {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.service-banner',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
  });

  // Additional animation for service cards when hovered
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power3.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        ease: 'power3.out'
      });
    });
  });
});
