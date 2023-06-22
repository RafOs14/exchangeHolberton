
// Funcion para calcular el valor total a entregar

function calcular() {
    const monrecibe = document.getElementById("monedaorigen");
    const cant = document.getElementById("recibe");
    const monentrega = document.getElementById("monedadestino");
    const cantentrega = document.getElementById("entrega");
    const cotiza = document.getElementById("cotiza");
  
    let monrecibeval = monrecibe.options[monrecibe.selectedIndex].value;
    let monentregaval = monentrega.options[monentrega.selectedIndex].value;
    let cantval = cant.value;
  
    var myHeaders = new Headers();
    myHeaders.append("apikey", "YnHGUXTkQYtZYlPRYaXzjBWqM2uh2ibo");
  
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders

    };
  
    let response = fetch(
      `https://api.apilayer.com/currency_data/convert?to=${monentregaval}&from=${monrecibeval}&amount=${cantval}`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => {
        let resultado = JSON.parse(result);
        console.log(resultado);
        cantentrega.value = resultado.result;
        cotiza.value = resultado.info.quote;
      })
      .catch(error => console.log("error", error));
  }

/* Anclajes a las secciones de la pagina */
(function(){
  $('a[href*=#ancla]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          let $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
              let targetOffset = $target.offset().top;
              $('html,body').animate({scrollTop: targetOffset}, 800);
              return true;
          }
      }
  });
});
/*Fin de anclajes */

//EmailJs integration

const btn = document.getElementById('button');
const formulario = document.getElementById('form');


formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_vqjlfxs';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {    
      alert('Mensaje enviado correctamente, nos pondremos en contacto con usted lo antes posible');
      formulario.reset();
  }, (err) => {    
      alert(JSON.stringify(err));
  });
});
//EmailJS