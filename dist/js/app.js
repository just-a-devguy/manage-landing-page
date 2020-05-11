// UI Elements
const UI = {
  errMssg: "#err-mssg",
  emailBtn: "#btn",
  email: "#email-input",
  testimonial: ".testimonials__item",
  togglers: ".testimonials__toggler",
  hamburger: ".mobile-nav__burger",
  navToggler: ".mobile-nav__toggler",
  navItems: ".main-nav__items",
  closeBtn: "#close-btn",
  modal: ".mobile-nav__modal",
  body: "body",
};

const emailSubmit = document.querySelector(UI.emailBtn),
  invalidMssg = document.querySelector(UI.errMssg),
  email = document.querySelector(UI.email),
  testimonial = document.querySelectorAll(UI.testimonial),
  tabTogglers = document.querySelectorAll(UI.togglers),
  hamburger = document.querySelector(UI.hamburger),
  navToggler = document.querySelector(UI.navToggler),
  navItems = document.querySelector(UI.navItems),
  modal = document.querySelector(UI.modal);
body = document.getElementsByTagName(UI.body);

// Functionalities
function emailValidation(e) {
  e.preventDefault();
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/;

  if (!re.test(email.value)) {
    invalidMssg.style.display = "block";
    email.style.border = "1px solid red";
    email.style.color = "red";
  } else {
    invalidMssg.style.display = "none";
    email.style.border = "none";
    email.style.color = "initial";
  }
}

let togglerArr = [...tabTogglers];

// Carousel
function displayItem() {
  testimonial[this.id].scrollIntoView({
    inline: "start",
    behavior: "smooth",
    block: "nearest",
  });

  togglerArr.forEach((toggler) => {
    toggler.style.listStyle = "circle";
  });

  this.style.listStyle = "disc";
}

// Mobile Nav
// console.log(hamburger);
// console.log(navItems);

function menuToggle() {
  if (navItems.style.display === "none") {
    showMenu();
  } else {
    hideMenu();
  }
}

function showMenu() {
  navItems.style.display = "flex";
  navToggler.setAttribute("id", "close-btn");
  navToggler.setAttribute("src", "images/icon-close.svg");
  navToggler.setAttribute("alt", "close-icon");
  modal.style.display = "block";
  body[0].style.overflow = "hidden";
}

function hideMenu() {
  navItems.style.display = "none";
  navToggler.removeAttribute("id");
  navToggler.setAttribute("src", "images/icon-hamburger.svg");
  navToggler.setAttribute("alt", "hamburger");
  modal.style.display = "none";
  body[0].style.overflow = "visible";
}

// Event Listeners
emailSubmit.addEventListener("click", emailValidation);

hamburger.addEventListener("click", menuToggle);

togglerArr.forEach((toggler) => {
  toggler.addEventListener("click", displayItem);
});
