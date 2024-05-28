document.addEventListener('DOMContentLoaded', function() {
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario de registro enviado.');
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario de inicio de sesión enviado.');
        });
    }
});
