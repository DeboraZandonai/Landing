const email = document.getElementById("email");
const nome = document.getElementById("name");
const phone = document.getElementById("phone");

email.addEventListener("focus", () => {
  email.style.borderColor = "#4d10d1";
});

email.addEventListener("blur", () => {
  email.style.borderColor = "#ccc";
});

nome.addEventListener("focus", () => {
  nome.style.borderColor = "#4d10d1";
});

nome.addEventListener("blur", () => {
  nome.style.borderColor = "#ccc";
});

phone.addEventListener("focus", () => {
  phone.style.borderColor = "#4d10d1";
});

phone.addEventListener("blur", () => {
  phone.style.borderColor = "#ccc";
});
