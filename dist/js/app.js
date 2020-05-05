// UI Elements
const UI = {
  errMssg: "#err-mssg",
  emailBtn: "#btn",
  email: "#email-input",
  testimonial: ".testimonials__item",
  next: "#next",
  prev: "#prev",
};

const emailSubmit = document.querySelector(UI.emailBtn),
  invalidMssg = document.querySelector(UI.errMssg),
  testimonial = document.querySelectorAll(UI.testimonial),
  nextBtn = document.querySelector(UI.next),
  prevBtn = document.querySelector(UI.prev),
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

// Carousel
function showNextItem() {
  testimonial[3].scrollIntoView({
    inline: "start",
    behavior: "smooth",
    block: "nearest",
  });
}

function showPrevItem() {
  testimonial[0].scrollIntoView({
    inline: "start",
    behavior: "smooth",
    block: "nearest",
  });
}

// Event Listeners
emailSubmit.addEventListener("click", emailValidation);
next.addEventListener("click", showNextItem);
prev.addEventListener("click", showPrevItem);
