$(document).ready(function(){

    //Bajar el mouse y nos lleve hasta arriba
    //acceder por medio de un manejador de eventos al botón
    //accedemos a la clase
    $('.ir-arriba').click(function(){
        //envía hasta la parte de arriba
        //animate recibe un objeto
        $('body, html').animate({
            scrollTop: '0px'
        }, 800);
    });

    //Cuando el usuario haga un scroll o baje en la página
    $(window).scroll(function(){
        // si el usuario no ha movido nada no aparecerá el botón.
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });



});