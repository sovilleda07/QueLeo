function validar(){
    // Obtener el valor de un elemento HTML
    // DOM (Document Object)
    var correoE = document.getElementById('correo');
    // Si no ha elegido un regalo, obligar a que elija uno
    if (correoE.value === '') {
        alert("¡Debes ingresar tu correo!");
        correoE.focus();
    } else {
        alert("¡Gracias por suscribirse!");
        correoE.focus();
    }
}
