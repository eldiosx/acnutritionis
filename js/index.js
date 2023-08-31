function toggleNav() {
    if (window.innerWidth < 1000) {
        var header = document.getElementById("header");
        var navLinks = document.getElementById("navLinks");
        var menuIcon = document.getElementById("button-menu");
        if (navLinks.style.display === "flex") {
            header.classList.remove("open-header");
            navLinks.style.display = "none";
            menuIcon.classList.remove("icon-cross");
            menuIcon.classList.add("icon-menu");
        } else {
            header.classList.add("open-header");
            navLinks.style.display = "flex";
            menuIcon.classList.remove("icon-menu");
            menuIcon.classList.add("icon-cross");
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