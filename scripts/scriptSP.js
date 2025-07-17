// Función para mostrar alerta dinámica
function showAlert(message, type = 'info') {
  const toastsContainer = document.getElementById('toasts');

  const alert = document.createElement('div');
  alert.className = `fade alert alert-${type} alert-dismissible show`;
  alert.role = 'alert';
  alert.innerHTML = `
    <button type="button" class="btn-close" aria-label="Close alert"></button>
    <div class="d-flex">
      <img alt="noti-icon" src="https://brand.workingsolutions.com/components/images/information.svg" width="28" class="me-4">
      <div>
        <div class="alert-heading h4">Correo enviado</div>
        <p>${message}</p>
      </div>
    </div>
  `;

  toastsContainer.appendChild(alert);
}

// Delegación para cerrar cualquier alerta al hacer clic en el botón close
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-close')) {
    const alert = e.target.closest('.alert');
    if (alert) {
      alert.remove();
    }
  }
});
 
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página
  const email = document.getElementById('email').value;

  if (email) {
    showAlert('Revisa tu bandeja de entrada para continuar con la recuperación.', 'info');
  } else {
    showAlert('Por favor ingresa un correo válido.', 'danger');
  }
});
