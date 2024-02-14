// Header Mobile

var isNavOpen = false;

function toggleNav() {
  var header = document.getElementById("header");
  var menuIcon = document.getElementById("button-menu");
  var menuIcon2 = document.getElementById("button-menu2");

  if (isNavOpen) {
    header.classList.remove("open-header");
    menuIcon.style.display = "flex";
    menuIcon2.style.display = "none";
  } else {
    header.classList.add("open-header");
    menuIcon2.style.display = "flex";
    menuIcon.style.display = "none";
  }
  isNavOpen = !isNavOpen;
}

// Slider
const prevBtn = document.querySelector(".navigate_left");
const nextBtn = document.querySelector(".navigate_right");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let intervalId;

showSlideNext(currentIndex);

function showSlideNext(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("activeLeft");
    slides[i].classList.remove("activeRight");
  }

  slides[index].classList.add("activeRight");
  currentIndex = index;
}

function showSlidePrev(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("activeRight");
    slides[i].classList.remove("activeLeft");
  }

  slides[index].classList.add("activeLeft");
  currentIndex = index;
}

function showNextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) {
    newIndex = 0;
  }
  showSlideNext(newIndex);
}

function showPrevSlide() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  showSlidePrev(newIndex);
}

prevBtn.addEventListener("click", function () {
  showPrevSlide();
});

nextBtn.addEventListener("click", function () {
  showNextSlide();
});

//Copy
function copynumber() {
  var texto = document.getElementById("number");
  var textArea = document.createElement("textarea");
  textArea.value = texto.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

//Loader
window.addEventListener("load", function () {
  var loadingContainer = document.getElementById("loader");
  loadingContainer.style.display = "none";
});
