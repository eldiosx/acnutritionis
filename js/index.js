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

document.getElementById("send").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const info = document.getElementById("info").value;

    const mensaje = `Nombre: ${name}\nTeléfono: ${telefono}\nCorreo Electrónico: ${email}\nInformación: ${info}`;

    const link = `mailto:acnutricion@protonmail.com?subject=Formulario de AC Nutricion&body=${encodeURIComponent(mensaje)}`;
    window.location.href = link;
});