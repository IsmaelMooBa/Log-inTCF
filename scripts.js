let carouselIndex = 0;

// Función principal del carrusel (priorizada)
function initCarousel() {
    function showSlides() {
        const slides = document.querySelectorAll(".carousel-images img");
        const dots = document.querySelectorAll(".dot");
        
        // Ocultar todas las slides y desactivar dots
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));
        
        // Avanzar índice y reiniciar si es necesario
        carouselIndex = (carouselIndex + 1) % slides.length;
        
        // Mostrar slide actual y activar dot correspondiente
        slides[carouselIndex].style.display = "block";
        dots[carouselIndex]?.classList.add("active");
        
        // Programar próximo cambio
        setTimeout(showSlides, 7000);
    }

    // Iniciar carrusel inmediatamente
    showSlides();
}

// Toggle de visibilidad de contraseña
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.querySelector(".password-toggle");
    
    if (passwordField && toggleIcon) {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordField.type = "password";
            toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }
}

// Funciones de manejo de login
function setupLoginHandlers() {
    // Checkbox personalizado
    const customCheckbox = document.getElementById('customCheckbox');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    if (customCheckbox && rememberMeCheckbox) {
        customCheckbox.addEventListener('click', () => {
            rememberMeCheckbox.checked = !rememberMeCheckbox.checked;
            customCheckbox.classList.toggle('checked', rememberMeCheckbox.checked);
        });
    }

    // Cargar email guardado
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        const emailField = document.getElementById('email');
        if (emailField) emailField.value = rememberedEmail;
        if (rememberMeCheckbox) {
            rememberMeCheckbox.checked = true;
            if (customCheckbox) customCheckbox.classList.add('checked');
        }
    }

    // Toggle de visibilidad de contraseña
    const toggleIcon = document.querySelector(".password-toggle");
    if (toggleIcon) {
        toggleIcon.addEventListener('click', togglePassword);
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    const rememberMe = document.getElementById('rememberMe')?.checked;

    if (!email || !password) {
        alert('Por favor complete todos los campos');
        return;
    }

    // Guardar en localStorage si "Remember Me" está marcado
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    // Simular inicio de sesión
    console.log(`Login attempt - Email: ${email}, Remember Me: ${rememberMe}`);
    alert(`Inicio de sesión exitoso para: ${email}`);
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    initCarousel(); // Prioridad al carrusel
    setupLoginHandlers();
    
    // Asignar manejador de login al formulario
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});