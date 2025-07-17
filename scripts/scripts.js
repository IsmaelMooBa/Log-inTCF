document.addEventListener("DOMContentLoaded", function () {

    let emailInput = document.getElementById("email");
    let rememberCheckbox = document.getElementById("remember");
    
    if (emailInput && rememberCheckbox) {
        // Cargar email almacenado si existe
        let savedEmail = localStorage.getItem("savedEmail");
        if (savedEmail) {
            emailInput.value = savedEmail;
            rememberCheckbox.checked = true;
        }

        // Guardar o eliminar email al cambiar la casilla
        rememberCheckbox.addEventListener("change", function () {
            if (this.checked) {
                localStorage.setItem("savedEmail", emailInput.value);
            } else {
                localStorage.removeItem("savedEmail");
            }
        });

        // Guardar el email al escribir
        emailInput.addEventListener("input", function () {
            if (rememberCheckbox.checked) {
                localStorage.setItem("savedEmail", emailInput.value);
            }
        });
    }

    let passwordInput = document.getElementById("password");
    if (passwordInput) {
        passwordInput.removeAttribute("disabled");
        passwordInput.removeAttribute("readonly");
    }

 
    function togglePassword() {
        let passwordInput = document.getElementById("password");
        let toggleIcon = document.querySelector(".password-toggle");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.classList.remove("fa-eye");
            toggleIcon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            toggleIcon.classList.remove("fa-eye-slash");
            toggleIcon.classList.add("fa-eye");
        }
    }

    let toggleIcon = document.querySelector(".password-toggle");
    if (toggleIcon) {
        toggleIcon.addEventListener("click", togglePassword);
    }

 
    let slideIndex = 0;
    let slides = document.querySelectorAll(".carousel-images img");
    let dots = document.querySelectorAll(".carousel-indicators .dot");

    function showSlides() {

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                slideIndex = index;
                showManualSlide(index);
            });
        });
        
        function showManualSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].classList.remove("active");
            }
        
            slides[index].style.display = "block";
            dots[index].classList.add("active");
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
    }

    if (slides.length > 0) {
        showSlides();
    }
});

function showToast(title, message, iconUrl = "https://brand.workingsolutions.com/components/images/information.svg") {
    const toastsContainer = document.getElementById("toasts");

    const toast = document.createElement("div");
    toast.className = "toast-alert";

    toast.innerHTML = `
        <button type="button" class="btn-close" aria-label="Close alert" onclick="this.parentElement.remove()"></button>
        <img alt="icon" src="${iconUrl}" width="28">
        <div>
            <div class="alert-heading h4">${title}</div>
            <p>${message}</p>
        </div>
    `;

    toastsContainer.appendChild(toast);

    // Auto remover después de 5 segundos
    setTimeout(() => {
        toast.remove();
    }, 5000);
}
 
function handleLogin() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        showToast("Campos vacíos", "Por favor, completa todos los campos.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast("Correo inválido", "El correo electrónico no tiene un formato válido.");
        return;
    }

    // Login exitoso (simulado)
    showToast("Inicio exitoso", "Bienvenido de nuevo.");
}