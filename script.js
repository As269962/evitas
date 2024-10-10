document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registro exitoso.'); // Aquí se debería manejar el registro
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Aquí puedes agregar la lógica de autenticación real
    if (username && password) {
        if (rememberMe) {
            localStorage.setItem('username', username);
        }
        alert('Inicio de sesión exitoso.'); // Simulando el inicio de sesión
        window.location.href = 'index.html'; // Redirigir al sitio principal
    }
});

// Al cargar la página, verifica si hay un usuario guardado
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember-me').checked = true;
    }
};
