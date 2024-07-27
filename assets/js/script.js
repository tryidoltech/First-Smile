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

// testimonila slider work

// let currentIndex = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll('.testimonial-card');
//   const totalSlides = slides.length;

//   slides.forEach((slide, i) => {
//     slide.style.display = i === index ? 'block' : 'none';
//   });

//   currentIndex = index;
// }

// function prevSlide() {
//   const totalSlides = document.querySelectorAll('.testimonial-card').length;
//   const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(newIndex);
// }

// function nextSlide() {
//   const totalSlides = document.querySelectorAll('.testimonial-card').length;
//   const newIndex = (currentIndex + 1) % totalSlides;
//   showSlide(newIndex);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   showSlide(currentIndex);
// });
