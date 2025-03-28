let index = 0;

function showSlides() {
    let slides = document.querySelectorAll(".carousel-images img");
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    index++;
    if (index >= slides.length) { index = 0; } // Cambiado a >= para que funcione correctamente
    slides[index].style.display = "block";
    dots[index].classList.add("active");
    setTimeout(showSlides, 7000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();

    // Función para manejar el checkbox personalizado
    const customCheckbox = document.getElementById('customCheckbox');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    customCheckbox.addEventListener('click', () => {
        rememberMeCheckbox.checked = !rememberMeCheckbox.checked;
        customCheckbox.classList.toggle('checked', rememberMeCheckbox.checked);
    });

    // Cargar el email guardado al cargar la página
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        rememberMeCheckbox.checked = true;
        customCheckbox.classList.add('checked');
    }
});

// Función para manejar el inicio de sesión
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Guardar en localStorage si "Remember Me" está marcado
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    // Simular inicio de sesión (aquí iría la lógica real)
    alert(`Logged in with Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
}

    // Función para manejar el registro
    function togglePassword() {
        const passwordField = document.getElementById("password");
        const toggleIcon = document.querySelector(".password-toggle");
        
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordField.type = "password";
            toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }