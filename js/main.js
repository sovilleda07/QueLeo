//Ejecutar la función main, una vez que esté todo cargado
$(document).ready(main);

// Declarar varible
var contador = 1;

//Crear función
function main(){
    // Una vez que la ejecute va a acceder al .menu_bar
    // y cuando reciba un click, va a ejecutar una función
    $('.menu_bar').click(function(){
        // una vez que se presione se va a evaluar una condicional
        if (contador == 1) {
            // a nuestro elemento nav, se le va a aplicar un animate
            // y dentro va a recibir un objeto left
            $('nav').animate({
                // se va a desplazar de la izq. a la der. hasta
                // llegar a la posicion 0 
                left: '0'
            });
            // regresando la variable a 0
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });

        }
    });

    // Mostramos y ocultamos submenus
    // Cuando se le de click a una de las opciones con Submenu
    // se va a ejecutar una función
    $('.submenu').click(function(){
        // Los hijos de este que tengan la clase .children
        // de submenu van a tener lo siguiente
        $(this).children('.children').slideToggle();
    });
}