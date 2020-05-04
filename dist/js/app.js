// UI Elements
const UI = {
  errMssg: "#err-mssg",
  emailBtn: "#btn",
  email: "#email-input",
};

const emailSubmit = document.querySelector(UI.emailBtn),
  invalidMssg = document.querySelector(UI.errMssg),
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

// Event Listeners
emailSubmit.addEventListener("click", emailValidation);
