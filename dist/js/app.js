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
};

const emailSubmit = document.querySelector(UI.emailBtn),
  invalidMssg = document.querySelector(UI.errMssg),
  email = document.querySelector(UI.email),
  testimonial = document.querySelectorAll(UI.testimonial),
  tabTogglers = document.querySelectorAll(UI.togglers),
  hamburger = document.querySelector(UI.hamburger),
  navToggler = document.querySelector(UI.navToggler),
  navItems = document.querySelector(UI.navItems);

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
function showMenu() {
  navItems.style.display = "flex";
  // this.children[0].innerHTML = "<img src='../../images/icon-close.svg' />";
  // console.log(this.children.currentSrc);
  navToggler.innerHTML = "<img src='images/icon-close.svg' />";
  console.log(navToggler);
}

// Event Listeners
emailSubmit.addEventListener("click", emailValidation);

hamburger.addEventListener("click", showMenu);

togglerArr.forEach((toggler) => {
  toggler.addEventListener("click", displayItem);
});
