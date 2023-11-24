// Mostrar el modal al cargar la página
window.onload = function () {
    document.getElementById('login-modal').style.display = 'block';
};

// Función para cerrar el modal
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Función para verificar la contraseña y acceder a la documentación
function login() {
    var password = document.getElementById('password').value;

    // Verifica la contraseña (puedes cambiarla según sea necesario)
    if (password === '123456') {
        closeModal(); // Cierra el modal si la contraseña es correcta
        window.location.href = 'index1.html'; 
    } else {
        alert('Contraseña incorrecta. Intenta de nuevo.'); // Muestra un mensaje de error
    }
}
