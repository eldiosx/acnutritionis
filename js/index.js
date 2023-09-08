// Scroll Animation

const header = document.querySelector('header');
var logo = document.getElementById("logo");

function checkScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkScrollAnimations);

checkScrollAnimations();

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1000) {
        if (window.scrollY > 100) {
            header.style.height = '70px';
            logo.style.height = '70px';
        } else {
            header.style.height = '120px';
            logo.style.height = '110px';
        }
    }
});

// Header Mobile

function toggleNav() {
    if (window.innerWidth < 1000) {
        var header = document.getElementById("header");
        var navLinks = document.getElementById("navLinks");
        var menuIcon = document.getElementById("button-menu");
        if (navLinks.style.display === "flex") {
            header.classList.remove("open-header");
            header.style.height = '80px';
            logo.style.height = '60px';
            navLinks.style.display = "none";
            menuIcon.classList.remove("icon-cross");
            menuIcon.classList.add("icon-menu");
        } else {
            header.classList.add("open-header");
            header.style.height = '100%';
            logo.style.height = '100px';
            navLinks.style.display = "flex";
            menuIcon.classList.remove("icon-menu");
            menuIcon.classList.add("icon-cross");
            menuIcon.style.paddingRight = '20px';

        }
    }
}

// Send email

document.getElementById("send").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const info = document.getElementById("info").value;

    const mensaje = `Nombre: ${name}\nTeléfono: ${telefono}\nCorreo Electrónico: ${email}\nInformación: ${info}`;

    const link = `mailto:acnutricion@protonmail.com?subject=Formulario de AC Nutricion&body=${encodeURIComponent(mensaje)}`;
    window.location.href = link;
});

// Slider

const prevBtn = document.querySelector('.icon-circle-left');
const nextBtn = document.querySelector('.icon-circle-right');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalId;
function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');
    currentIndex = index;
}
function showNextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
        newIndex = 0;
    }
    showSlide(newIndex);
}
function startAutoSlide() {
    intervalId = setInterval(showNextSlide, 6000);
}
function stopAutoSlide() {
    clearInterval(intervalId);
}
prevBtn.addEventListener('click', function () {
    stopAutoSlide();
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    showSlide(newIndex);
    startAutoSlide();
});
nextBtn.addEventListener('click', function () {
    stopAutoSlide();
    showNextSlide();
    startAutoSlide();
});
showSlide(currentIndex);
startAutoSlide();
//Select pack
const select = document.getElementById("selectplan");
const freepack = document.getElementById("freepack");
const startplan = document.getElementById("startplan");
const nutritionpack = document.getElementById("nutritionpack");
const checkplan = document.getElementById("checkplan");
select.addEventListener("change", () => {
    if (select.value === "free") {
        freepack.classList.add("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "start") {
        freepack.classList.remove("show");
        startplan.classList.add("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "nutrition") {
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.add("show");
        checkplan.classList.remove("show");
    } else if (select.value === "check") {
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.add("show");
    }
});
