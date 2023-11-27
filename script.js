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
  // Selecciona el elemento HTML que deseas convertir
const element = document.getElementById('miPagina');

// Crea un nuevo documento PDF
const pdf = new jsPDF();

// Convierte el contenido HTML a PDF
pdf.html(element, {
  callback: function (pdf) {
    // Guarda el PDF con un nombre específico
    pdf.save('mi_archivo.pdf');
  }
});

// Selecciona el botón y el elemento HTML que deseas convertir
const botonDescargar = document.getElementById('descargarPDF');
const element = document.getElementById('miPagina');

// Crea un nuevo documento PDF
const pdf = new jsPDF();

// Agrega un evento de clic al botón
botonDescargar.addEventListener('click', function () {
  // Convierte el contenido HTML a PDF
  pdf.html(element, {
    callback: function (pdf) {
      // Guarda el PDF con un nombre específico
      pdf.save('mi_archivo.pdf');
    }
  });
});