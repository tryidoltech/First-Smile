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

const popup = document.getElementById("appointmentPopup");
const bookAppointmentBtn = document.getElementById("book-appointment");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("appointmentForm");

// Show the popup
bookAppointmentBtn.onclick = function () {
  popup.style.display = "block";
};

// Close the popup
closeBtn.onclick = function () {
  popup.style.display = "none";
};

// Close the popup when clicking outside of it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// Handle form submission
form.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const fullName = form.elements.fullName.value;
  const phoneNumber = form.elements.phoneNumber.value;
  const appointmentDate = form.elements.appointmentDate.value;
  const service = form.elements.service.value;


  // Construct the WhatsApp message
  const message =
    encodeURIComponent(`Hello, I would like to book an appointment.
    
    Full Name: ${fullName}
    Phone Number: ${phoneNumber}
    Appointment Date: ${appointmentDate}
    Service: ${service}
    
    Thank you!`);

  // WhatsApp URL
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Redirect to WhatsApp
  window.location.href = whatsappUrl;

  // Optionally, you can hide the popup after redirection
  popup.style.display = "none";
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

document.addEventListener("DOMContentLoaded", () => {
  // GSAP animation for page load
  gsap.from(".hero-content", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
  });

  gsap.from(".hero-banner-icon", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power3.out",
  });

  // GSAP animation for cursor hover
  const heroSection = document.querySelector(".hero");
  heroSection.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    gsap.to(".hero-content", {
      duration: 0.5,
      x: x * 30,
      y: y * 30,
      ease: "power3.out",
    });

    gsap.to(".hero-banner-icon", {
      duration: 0.5,
      x: -x * 30,
      y: -y * 30,
      ease: "power3.out",
    });
  });
});

// gsap animation for service section which is in home page

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".section-subtitle", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-subtitle",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  gsap.from(".section-title", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  gsap.from(".service-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".service-list",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  gsap.from(".service-banner", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".service-banner",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  // Additional animation for service cards when hovered
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        ease: "power3.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        ease: "power3.out",
      });
    });
  });
});

// gsap animation for hero section part 3

// When the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Select the elements to animate
  const banner = document.querySelector(".about-banner-hero");
  const content = document.querySelector(".about-content-hero");

  // GSAP animation for scroll trigger
  gsap.fromTo(
    banner,
    { x: "-100%", opacity: 0 }, // Starting position
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: banner,
        start: "top 80%", // Trigger animation when banner is 80% from the top of the viewport
        end: "bottom 30%", // End animation when banner is 30% from the bottom of the viewport
        scrub: true, // Smooth scrubbing
      },
    }
  );

  gsap.fromTo(
    content,
    { x: "100%", opacity: 0 }, // Starting position
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 80%", // Trigger animation when content is 80% from the top of the viewport
        end: "bottom 30%", // End animation when content is 30% from the bottom of the viewport
        scrub: true, // Smooth scrubbing
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the elements to animate
  const banner = document.querySelector(".about-banner-hero");
  const content = document.querySelector(".about-content-hero");

  // GSAP animation on hover
  gsap.fromTo(
    banner,
    { x: "-100%", opacity: 0 }, // Starting position
    {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      paused: true, // Pauses the animation initially
      onComplete: function () {
        banner.addEventListener("mouseenter", () => gsap.play());
        banner.addEventListener("mouseleave", () => gsap.reverse());
      },
    }
  );

  gsap.fromTo(
    content,
    { x: "100%", opacity: 0 }, // Starting position
    {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      paused: true, // Pauses the animation initially
      onComplete: function () {
        content.addEventListener("mouseenter", () => gsap.play());
        content.addEventListener("mouseleave", () => gsap.reverse());
      },
    }
  );
});

//blog section animation part hero section

document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Select all blog cards
  const blogCards = document.querySelectorAll(".blog-card-hero");

  // GSAP animation for scroll-triggered animation
  blogCards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 }, // Starting position
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Trigger animation when card is 80% from the top of the viewport
          end: "bottom 30%", // End animation when card is 30% from the bottom of the viewport
          scrub: true, // Smooth scrubbing
        },
      }
    );
  });

  // GSAP animation for hover
  blogCards.forEach((card) => {
    gsap.fromTo(
      card,
      { scale: 1, rotation: 0 }, // Initial scale and rotation
      {
        scale: 1.05,
        rotation: 2,
        duration: 0.5,
        ease: "power2.out",
        paused: true, // Pauses the animation initially
        onComplete: function () {
          card.addEventListener("mouseenter", () =>
            gsap.to(card, { scale: 1.05, rotation: 2, duration: 0.5 })
          );
          card.addEventListener("mouseleave", () =>
            gsap.to(card, { scale: 1, rotation: 0, duration: 0.5 })
          );
        },
      }
    );
  });
});
