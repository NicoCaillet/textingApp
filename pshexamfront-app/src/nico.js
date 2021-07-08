// cuando todos los elementos del documento hayan sido cargados
$(document).ready(function() {
console.log('la concha de tu vieja chiara')
    /* ---------------
      menu desplegable
    ------------------ */
  
    // al cliquear en el icono menu ...
    $("#llamamenu").click( function() {
  

        
      /* ... a la etiqueta <ul> dentro de
        la etiqueta cuyo atributo ID es "menu",
         le agregue la clase "visible" si NO la tiene,
         y se la quite si la tiene */
      $("#menu ul").toggleClass("visible");
  
      /* guarde en la variable "icono"
         cuál es el ícono que está siendo mostrado */
      let icono = $("#llamamenu i").text();
  
      // si el ícono es "hamburguesa"...
      if (icono == "menu") {
  
          //  que lo cambie por el ícono "cerrar"
          $("#llamamenu i").text("close");
  
      } else { // si NO es "hamburguesa"...
          // que lo cambie para que lo sea
          $("#llamamenu i").text("menu");
      }
  
    }); // fin de lo que se hace si se cliquea el icono del menu
  
  
    //  al cliquear en un vínculo del menu o fuera de ellos
    $("#menu ul li a, ul").click( function() {
  
      // le quita la clase "visible" a "#menu ul"
      $("#menu ul").removeClass("visible");
  
      // cambia el ícono de "cerrar" por "hamburguesa"
      $("#llamamenu i").text("menu");
  
    }); // fin de lo que se hace si se cliquea en link del menu
  
      
  $(document).ready(function() {
  
    /* -------------------
      CATEGORIAS DESPLEGABLE
    ----------------------- */
  
    // al cliquear en el icono categorias
    $("#llamacategorias").click( function() {
  
      /* ... a la etiqueta <ul> dentro de
        la etiqueta cuyo atributo ID es "categoriasnav",
         le agregue la clase "catevisibles" si NO la tiene,
         y se la quite si la tiene */
      $("#categoriasnav ul").toggleClass("catevisibles");
  
      /* guarde en la variable "icono"
         cuál es el ícono que está siendo mostrado */
      let icono = $("#llamacategorias i").text();
  
      // si el ícono es "expand more"...
      if (icono == "expand_more") {
  
          //  que lo cambie por el ícono "expand less"
          $("#llamacategorias i").text("expand_less");
  
      } else { // si NO es "expand more"...
          // que lo cambie para que lo sea
          $("#llamacategorias i").text("expand_more");
      }
  
    }); // fin de lo que se hace si se cliquea el icono del menu
  
  
    //  al cliquear en un vínculo del menu o fuera de ellos
    $("#categoriasnav ul li a, ul").click( function() {
  
      // le quita la clase "catevisibles" a "#categoriasnav"
      $("#categoriasnav ul").removeClass("catevisibles");
  
      // cambia el ícono de "expand less" por "expand more"
      $("#llamacategorias i").text("expand_more");
  
    }); // fin de lo que se hace si se cliquea en link del menu
  
  }); // fin de lo que se hace si el documento ha sido cargado
      
      
      /*----------------------------------------
          NOTIFICACIONES
          -----------------------------------*/
      
      // al cliquear en el icono menu ...
    $("#llamanotif").click( function() {
  
      /* ... a la etiqueta <ul> dentro de
        la etiqueta cuyo atributo ID es "menu",
         le agregue la clase "visible" si NO la tiene,
         y se la quite si la tiene */
      $("#notificaciones ul").toggleClass("notifvisible");
  
      /* guarde en la variable "icono"
         cuál es el ícono que está siendo mostrado */
      let icono = $("#llamanotif i").text();
  
      // si el ícono es "hamburguesa"...
      if (icono == "notifications") {
  
          //  que lo cambie por el ícono "cerrar"
          $("#llamanotif i").text("close");
  
      } else { // si NO es "hamburguesa"...
          // que lo cambie para que lo sea
          $("#llamanotif i").text("notifications");
      }
  
    }); // fin de lo que se hace si se cliquea el icono del menu
  
  
    //  al cliquear en un vínculo del menu o fuera de ellos
    $("#notificaciones ul li a, ul").click( function() {
  
      // le quita la clase "visible" a "#menu ul"
      $("#notificaciones ul").removeClass("notifvisible");
  
      // cambia el ícono de "cerrar" por "hamburguesa"
      $("#llamanotif i").text("notifications");
  
    }); // fin de lo que se hace si se cliquea en link del menu
  
      
      
      
      
      
      
      
      
  }); // fin de lo que se hace si el documento ha sido cargado