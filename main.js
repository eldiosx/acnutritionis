// Header Mobile

var isNavOpen = false;

function toggleNav() {
  var header = document.getElementById("header");
  var menuIcon = document.getElementById("button-menu");
  var menuIcon2 = document.getElementById("button-menu2");

  header.classList.toggle("open-header");
  menuIcon.style.display = isNavOpen ? "flex" : "none";
  menuIcon2.style.display = isNavOpen ? "none" : "flex";
  isNavOpen = !isNavOpen;
}

// Slider
const prevBtn = document.querySelector(".navigate_left");
const nextBtn = document.querySelector(".navigate_right");
const slides = document.querySelectorAll(".slide");
let currentIndex = 1;

toggleSlide();

function toggleSlide(direction) {
  let newIndex = currentIndex + (direction === "next" ? 1 : -1);
  newIndex = newIndex < 0 ? slides.length - 1 : newIndex % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.remove("activeLeft", "activeRight");
    if (index === newIndex) {
      slide.classList.add(direction === "next" ? "activeRight" : "activeLeft");
    }
  });

  currentIndex = newIndex;
}

prevBtn.addEventListener("click", () => toggleSlide("prev"));
nextBtn.addEventListener("click", () => toggleSlide("next"));

//Copy
function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado con éxito");
    })
    .catch((err) => {
      console.error("Error al copiar texto: ", err);
    });
}

function copynumber() {
  copyToClipboard("number");
}
function copyemail() {
  copyToClipboard("email");
}

//Loader
window.addEventListener("load", function () {
  var loadingContainer = document.getElementById("loader");
  loadingContainer.style.display = "none";
});

//Translate
let translations = JSON.parse(localStorage.getItem("translations")) || {};
if (Object.keys(translations).length === 0) {
  fetchTranslations();
}

function fetchTranslations() {
  fetch("i18n.json")
    .then((response) => response.json())
    .then((data) => {
      translations = data;
      localStorage.setItem("translations", JSON.stringify(data));
      applyTranslation();
    })
    .catch((error) => console.error("Error:", error));
}

function setCookie(name, value, days) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Strict`;
}
function getCookie(name) {
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("="));
  const cookie = cookies.find((cookie) => cookie[0] === name);
  return cookie ? decodeURIComponent(cookie[1]) : null;
}

const elementsToTranslate = document.querySelectorAll("[data-translate]");
let isTranslated = getCookie("isTranslated") === "es";

function applyTranslation() {
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent =
      isTranslated && translations[key] ? translations[key] : key;
  });
}

function toggleLang() {
  isTranslated = !isTranslated;
  setCookie("isTranslated", isTranslated ? "es" : "en", 30);
  applyTranslation();
}

applyTranslation();
document.querySelectorAll(".translateButton").forEach((button) => {
  button.addEventListener("click", toggleLang);
});
