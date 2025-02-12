let botones = document.querySelectorAll(".boton");
let contadorCarrito = 0;

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        contadorCarrito++;
        let imagenProducto = document.querySelectorAll(".producto img")[index].src; // Obtener la imagen del producto
        mostrarNotificacion("Producto agregado", contadorCarrito, imagenProducto);
    });
});

function mostrarNotificacion(mensaje, contador, imagen) {
    const notificaciones = document.getElementById("notificaciones");

    // Crear el elemento de notificación
    const notificacion = document.createElement("div");
    notificacion.className = "notificacion";

    // Crear la imagen del producto
    const img = document.createElement("img");
    img.src = imagen; // Establecer la imagen específica del producto
    img.alt = "Producto";

    // Crear el texto de la notificación
    const texto = document.createElement("span");
    texto.textContent = `${mensaje} - Productos en el carrito: ${contador}`;

    // Agregar la imagen y el texto a la notificación
    notificacion.appendChild(img);
    notificacion.appendChild(texto);

    // Agregar la notificación al contenedor
    notificaciones.appendChild(notificacion);

    // Remover la notificación después de 3 segundos
    setTimeout(() => {
        notificaciones.removeChild(notificacion);
    }, 3000);
}
