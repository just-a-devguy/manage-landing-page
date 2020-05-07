alert("connected");
// UI Elements
const UI = {
  errMssg: "#err-mssg",
  emailBtn: "#btn",
  email: "#email-input",
  testimonial: ".testimonials__item",
  togglers: ".testimonials__toggler",
};

const emailSubmit = document.querySelector(UI.emailBtn),
  invalidMssg = document.querySelector(UI.errMssg),
  testimonial = document.querySelectorAll(UI.testimonial),
  tabTogglers = document.querySelectorAll(UI.togglers),
  email = document.querySelector(UI.email);

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

// Event Listeners
emailSubmit.addEventListener("click", emailValidation);
togglerArr.forEach((toggler) => {
  toggler.addEventListener("click", displayItem);
});
