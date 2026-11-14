
// ==================================
// MARCELA NAIL DESIGNER
// JAVASCRIPT
// ==================================

// IMPORTANTE: substitua pelo WhatsApp real da Marcela.
// Formato: 55 + DDD + número, somente números.
const WHATSAPP_NUMBER = "5581999999999";

// ==================================
// MENU MOBILE
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });

    });

}

// ==================================
// FORMULÁRIO WHATSAPP
// ==================================

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("client-name").value.trim();
        const service = document.getElementById("service").value;
        const payment = document.getElementById("payment").value;

        if (!name || !service || !payment) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (WHATSAPP_NUMBER === "5581999999999") {
            alert("Configure o número real do WhatsApp da Marcela no arquivo js/script.js antes de testar.");
            return;
        }

        const message = `
Olá, Marcela! Tudo bem?

Gostaria de solicitar um agendamento.

Nome: ${name}
Serviço: ${service}
Forma de pagamento: ${payment}

Gostaria de saber quais horários estão disponíveis.

Aguardo seu retorno! 💅
        `.trim();

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}

// ==================================
// ANO AUTOMÁTICO NO RODAPÉ
// ==================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ==================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ==================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}

// ==================================
// GALERIA COM AMPLIAÇÃO
// ==================================

const portfolioItems = document.querySelectorAll(".portfolio-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

}

portfolioItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        if (!lightbox || !lightboxImage) return;

        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    });

});

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});
