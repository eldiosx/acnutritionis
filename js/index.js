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

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');
    currentIndex = index;
}

function showNextSlide() {
    background4.classList.add("background4-2");
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
        newIndex = 0;
        background4.classList.remove("background4-2");
    }
    showSlide(newIndex);
}

function showPrevSlide() {
    background4.classList.add("background4-2");
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
        background4.classList.remove("background4-2");
    }
    showSlide(newIndex);
}


prevBtn.addEventListener('click', function () {
    showPrevSlide();
});

nextBtn.addEventListener('click', function () {
    showNextSlide();
});

showSlide(currentIndex);


//Select pack
const guide = document.getElementById("guidepack");
const select = document.getElementById("selectplan");
const freepack = document.getElementById("freepack");
const startplan = document.getElementById("startplan");
const nutritionpack = document.getElementById("nutritionplan");
const checkplan = document.getElementById("checkplan");
guide.classList.add("show");
select.addEventListener("change", () => {
    if (select.value === "free") {
        guide.classList.remove("show");
        freepack.classList.add("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "start") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.add("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.remove("show");
    } else if (select.value === "nutrition") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.add("show");
        checkplan.classList.remove("show");
    } else if (select.value === "check") {
        guide.classList.remove("show");
        freepack.classList.remove("show");
        startplan.classList.remove("show");
        nutritionpack.classList.remove("show");
        checkplan.classList.add("show");
    }
});
//Loader
window.addEventListener("load", function () {
    var loadingContainer = document.getElementById("loader");
    loadingContainer.style.display = "none";
});

// Translations
const translations = {
    '': '',
    'Inicio': 'Home',
    'Nutrición': 'Nutrition',
    'Sobre mí': 'About me',
    'Servicios': 'Services',
    'Contacto': 'Contact',
    'Idioma': 'Language',
    'Nutrición para la recuperación': 'Nutrition for Recovery',
    '¡Hola!, soy Alejandro Campos dietista-nutricionista y te ayudaré a dejar de lado las dietas restrictivas, a que aprendas a comer sin culpa y a que seas capaz de disfrutar del placer de la alimentación.': 'Hi! I\'m Alejandro Campos, a dietitian-nutritionist, and I\'ll help you move away from restrictive diets, learn to eat without guilt, and embrace the pleasure of food.',
    '¡Quiero una cita!': 'I want a date!',
    'Come sin culpa': 'Eat without guilt',
    'Consigamos juntos dejar de lado a la cultura de la dieta, permitiéndote cultivar aspectos como la autocompasión, el placer por la comida y a reconectar con tus señales de hambre y saciedad.': 'Let\'s work together to set aside diet culture, allowing you to cultivate aspects such as self-compassion, enjoyment of food, and reconnecting with your hunger and fullness cues.',
    '¡Crea tu plan de acción ahora!': 'Create your action plan now!',
    'Consultas Online': 'Online consultations',
    'Si quieres conocer más sobre cómo establecer y mantener una relación sana con la comida desde la teoria hasta la práctica en directo conmigo y de forma personalizada, esta opción es para ti.': 'If you want to learn more about how to establish and maintain a healthy relationship with food, from theory to practical application, live and personalized with me, then this option is for you.',
    'Mi pasión siempre ha sido ayudar a las personas a mejorar su calidad de vida mediante una alimentación flexible y equilibrada, evitando la obsesión por la comida y las dietas restrictivas.': 'My passion has always been to help people improve their quality of life through a flexible and balanced diet, while avoiding obsession with food and restrictive diets.',
    'Siempre me ha apasionado la nutrición clínica, por ello me he especializado en el área de los TCA y obesidad.': 'I have always been passionate about clinical nutrition; that\'s why I have specialized in the field of eating disorders and obesity.',
    'Mi método de trabajo se basa en aplicar las bases de una alimentación flexible, saludable, consciente y personalizada en función tus necesidades, siendo capaz de adaptarme a cada situación.': 'My working method is based on applying the principles of flexible, healthy, mindful, and personalized nutrition according to your needs, and I am capable of adapting to each situation.',
    'Asesoramiento Nutricional': 'Nutritional Counseling',
    'Coaching Nutricional': 'Nutritional Coaching',
    'Consultas Personalizadas': 'Custom Queries',
    '¿Cómo trabajo?': 'How do I work?',
    'Escoge un plan para saber mas información y su precio.': 'Choose a plan to access more information and its price.',
    'Selecciona tu plan': 'Choose your plan',
    'PLAN GRATUITO': 'FREE PLAN',
    'PLAN DE INICIO': 'INITIAL PLAN',
    'PLAN NUTRICIÓN': 'NUTRITION PLAN',
    'SEGUIMIENTOS': 'FOLLOW-UPS',
    '¿Aún tienes dudas sobre empezar tu plan? Conóceme eligiendo este pack y concertaremos una sesión de unos 20-30 min para que me cuentes tu situación de forma general y conozcas mi método de trabajo sin ningún compromiso.': 'Do you still have doubts about starting your plan? Get to know me by selecting this package, and we will schedule a 20-30 minute session for you to tell me about your situation in a general way and learn about my working method without any commitment.',
    'Incluye la 1ª y 2ª consulta por videollamada conmigo, el estudio y valoración de tus necesidades, herramientas nutricionales y prácticas para logar tus objetivos así como la entrega de tu tratamiento nutricional personalizado.': 'Includes the 1st and 2nd video call consultations with me, the assessment and evaluation of your needs, nutritional tools, and practices to achieve your goals, along with the delivery of your personalized nutritional treatment.',
    'Incluye 4 consultas por videollamada conmigo por el precio de 3. Incluye todo lo referente al pack de inicio. Valoración exhaustiva de tus necesidad, herramientas nutricionales, plan personalizado etc.': 'Includes 4 video call consultations with me for the price of 3. It encompasses everything included in the starter pack: a comprehensive assessment of your needs, nutritional tools, and a personalized plan, among other things.',
    'Los seguimientos se realizan a las 3-4 semanas del tratamiento, puede realizarse uno cada semana o cada dos semanas en función de cada paciente con el objetivo de resolver dificultades, dudas, educación nutricional y la modificación del plan dietético.': 'The follow-ups are conducted 3-4 weeks after the treatment, and they can be scheduled weekly or every two weeks, depending on each patient, with the goal of addressing difficulties, answering questions, providing nutritional education, and adjusting the diet plan.',
    'Precio': 'Price',
    'Solicita ya tu consulta online': 'Request your online consultation now',
    'Nombre': 'Name',
    'Para cualquier otro tipo de consultas, dudas o propuestas, ¡contáctame ahora!': 'For any other inquiries, doubts, or proposals, contact me now!',
    '(Recibirás siempre una respuesta en un plazo de 24-48 H días hábiles)': '(You will always receive a response within 24-48 business hours.)',
    'Teléfono': 'Phone',
    'Mensaje': 'Message',
    'Todos los derechos reservados ©2023 - GPL 3.0': 'All rights reserved ©2023 - GPL 3.0',
};
const elementsToTranslate = document.querySelectorAll('[data-translate]');
let isTranslated = getCookie('isTranslated') === 'es';
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
    const cookie = cookies.find(cookie => cookie[0] === name);
    return cookie ? decodeURIComponent(cookie[1]) : null;
}

function applyTranslation() {
    elementsToTranslate.forEach(element => {
        const originalText = element.getAttribute('data-translate');
        const translatedText = translations[originalText];
        if (isTranslated && translatedText) {
            element.textContent = translatedText;
        } else {
            element.textContent = originalText;
        }
    });
}
function toggleLang() {
    isTranslated = !isTranslated;
    setCookie('isTranslated', isTranslated ? 'es' : 'en', 30);
    applyTranslation();
    location.reload();
}
applyTranslation();
const translateButton = document.querySelector('.translateButton');
translateButton.addEventListener('click', toggleTranslation);
const translateButtonUserMenu = document.querySelector('.menuUsercontent .translateButton');
translateButtonUserMenu.addEventListener('click', toggleTranslation);
let language = isTranslated ? 'es' : 'en';
function copyemail() {
    var texto = document.getElementById("email");
    var textArea = document.createElement("textarea");
    textArea.value = texto.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
function copynumber() {
    var texto = document.getElementById("number");
    var textArea = document.createElement("textarea");
    textArea.value = texto.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}