//Scripts para galeria.html

// Función para filtrar imágenes
document.getElementById('searchInput').addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('#gallery .col');
    
    items.forEach(item => {
        let title = item.querySelector('.card-title').textContent.toLowerCase();
        item.style.display = title.includes(filter) ? "block" : "none";
    });
})

// Funcionalidad de visualización de imagen en detalle
document.querySelectorAll('.img-click').forEach(img => {
    img.addEventListener('click', function () {
        const nada = document.getElementById('modalImg');
        document.getElementById('modalImg').src = this.src;
        document.getElementById('imageModal').style.display = "flex";
    });
})

// Cerrar el modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('imageModal').style.display = "none";
})

// Cerrar el modal al hacer clic fuera de la imagen
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});


//Scripts para nosotros.html

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío por defecto

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email

        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (mensaje.length < 10) {
            alert("El mensaje debe contener al menos 10 caracteres.");
            return;
        }

        alert("Formulario enviado con éxito.");
        this.submit(); // Si todo está bien, envía el formulario
    });
});
