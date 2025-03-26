  // Función para manejar el checkbox personalizado
  const customCheckbox = document.getElementById('customCheckbox');
  const rememberMeCheckbox = document.getElementById('rememberMe');

  customCheckbox.addEventListener('click', () => {
      rememberMeCheckbox.checked = !rememberMeCheckbox.checked;
      customCheckbox.classList.toggle('checked', rememberMeCheckbox.checked);
  });

  // Función para manejar el inicio de sesión
  function handleLogin() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const rememberMe = rememberMeCheckbox.checked;

      // Guardar en localStorage si "Remember Me" está marcado
      if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
      } else {
          localStorage.removeItem('rememberedEmail');
      }

      // Simular inicio de sesión (aquí iría la lógica real)
      alert(`Logged in with Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
  }

  // Cargar el email guardado al cargar la página
  window.onload = function () {
      const rememberedEmail = localStorage.getItem('rememberedEmail');
      if (rememberedEmail) {
          document.getElementById('email').value = rememberedEmail;
          rememberMeCheckbox.checked = true;
          customCheckbox.classList.add('checked');
      }
  };
  // Función para mostrar u ocultar la contraseña
  function togglePassword() {
      const passwordField = document.getElementById("password");
      const toggleIcon = document.querySelector(".password-toggle");
      
      if (passwordField.type === "password") {
          passwordField.type = "text";
          toggleIcon.classList.remove("fa-eye");
          toggleIcon.classList.add("fa-eye-slash");
      } else {
          passwordField.type = "password";
          toggleIcon.classList.remove("fa-eye-slash");
          toggleIcon.classList.add("fa-eye");
      }
  }
