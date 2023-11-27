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
    var navLinks = document.getElementById("navLinks");
    if (window.innerWidth > 1300) {
        if (window.scrollY > 100) {
            header.style.height = '70px';
            logo.style.height = '70px';
        } else {
            header.style.height = '110px';
            logo.style.height = '100px';
        }
    } else if (window.innerWidth > 700) {
        if (window.scrollY > 50) {
            header.style.height = '60px';
            logo.style.height = '60px';
        } else {
            header.style.height = '80px';
            logo.style.height = '70px';
        }
    }
});

// Scroll Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById('scrollBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Header Mobile

var isNavOpen = false;

function toggleNav() {
    var header = document.getElementById("header");
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.getElementById("button-menu");

    if (window.innerWidth < 700) {
        if (isNavOpen) {
            header.classList.remove("open-header");
            header.style.height = '80px';
            logo.style.height = '60px';
            menuIcon.classList.remove("icon-cross");
            menuIcon.classList.add("icon-menu");
        } else {
            header.classList.add("open-header");
            header.style.height = '100%';
            menuIcon.classList.remove("icon-menu");
            menuIcon.classList.add("icon-cross");
        }
        isNavOpen = !isNavOpen;
    }
}

// Send email

// document.getElementById("send").addEventListener("click", function () {
//     const name = document.getElementById("name").value;
//     const telefono = document.getElementById("telefono").value;
//     const email = document.getElementById("email").value;
//     const info = document.getElementById("info").value;

//     const message = `Nombre: ${name}\nTeléfono: ${telefono}\nCorreo Electrónico: ${email}\nInformación: ${info}`;

//     const link = `mailto:info@acnutritionis.com?subject=Formulario de AC Nutritionis&body=${encodeURIComponent(message)}`;
//     window.location.href = link;

//     document.getElementById("contact-form").reset();
// });

// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     resetForm();
// });


// Slider
const background4 = document.querySelector('.background4');
const prevBtn = document.querySelector('.icon-navigate_before');
const nextBtn = document.querySelector('.icon-navigate_next');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalId;

showSlideNext(currentIndex);

function showSlideNext(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('activeLeft');
        slides[i].classList.remove('activeRight');
    }

    slides[index].classList.add('activeRight');
    currentIndex = index;
}

function showSlidePrev(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('activeRight');
        slides[i].classList.remove('activeLeft');
    }

    slides[index].classList.add('activeLeft');
    currentIndex = index;
}

function showNextSlide() {
    background4.classList.add("background4-2");
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
        newIndex = 0;
        background4.classList.remove("background4-2");
    }
    showSlideNext(newIndex);
}

function showPrevSlide() {
    background4.classList.remove("background4-2");
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
        background4.classList.add("background4-2");
    }
    showSlidePrev(newIndex);
}


prevBtn.addEventListener('click', function () {
    showPrevSlide();
});

nextBtn.addEventListener('click', function () {
    showNextSlide();
});


//Select pack
const guide = document.getElementById("guidepack");
const select = document.getElementById("selectplan");
const freepack = document.getElementById("freepack");
const startplan = document.getElementById("startplan");
const nutritionpack = document.getElementById("nutritionplan");
const date = document.getElementById("dateplan");
const checkplan = document.getElementById("checkplan");
guide.classList.add("show");
select.addEventListener("change", () => {
    if (select.value === "free") {
        guide.classList.remove("show");
        freepack.classList.add("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        date.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "start") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.add("show");
        nutritionpack.classList.remove("show");
        date.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "nutrition") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.add("show");
        date.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "date") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        date.classList.add("show");
        checkplan.classList.remove("show");
    } else if (select.value === "check") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        date.classList.remove("show");
        checkplan.classList.add("show");
    }
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