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
function descargarArchivo() {
    var url = 'nombre_carpeta/archivo_excel.xlsx';
    var nombreArchivo = 'archivo_excel.xlsx';
  
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = url;
    enlaceDescarga.download = nombreArchivo;
  
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
  
    enlaceDescarga.click();
  
    // Manejo de errores
    enlaceDescarga.onerror = function() {
      console.error('Error al cargar el archivo. Redirigiendo a la página principal.');
      window.location.href = 'index.html';  // Reemplaza 'index.html' con la ruta de tu página principal
    };
  
    document.body.removeChild(enlaceDescarga);
  }
 // Función para actualizar el reloj cada segundo
function actualizarReloj() {
    const reloj = document.getElementById("reloj");
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const tiempoActual = `${horas}:${minutos}:${segundos}`;
    reloj.textContent = tiempoActual;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamada inicial para que el reloj se actualice inmediatamente al cargar la página
actualizarReloj();

