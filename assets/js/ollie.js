/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})

/* // Función para enviar los datos del formulario al servidor
function sendData(data) {
  // Crear una instancia del objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open('POST', 'http://localhost:3000/contacto');

  // Establecer el encabezado de la solicitud
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Escuchar el evento "load" de la respuesta del servidor
  xhr.addEventListener('load', function() {
    // Mostrar la respuesta del servidor
    console.log(xhr.responseText);
  });

  // Enviar la solicitud con los datos del formulario como JSON
  xhr.send(JSON.stringify(data));
}

// Manejar el evento "submit" del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Evitar que se envíe el formulario de forma predeterminada
  event.preventDefault();

  // Recopilar los datos del formulario
  var form = event.target;
  var data = {
    name: form.elements['nombre'].value,
    email: form.elements['email'].value,
    message: form.elements['mensaje'].value
  };

  // Enviar los datos al servidor
  sendData(data);
}); */

document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const data = {
        name: nombre,
        email: email,
        texto: mensaje
    };

    try {
        const response = await fetch("http://localhost:3000/api/endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Manejar la respuesta exitosa (por ejemplo, mostrar un mensaje de éxito)
            console.log("Formulario enviado con éxito");
        } else {
            // Manejar la respuesta no exitosa (por ejemplo, mostrar un mensaje de error)
            console.log("Error al enviar el formulario");
        }
    } catch (error) {
        // Manejar errores de red (por ejemplo, mostrar un mensaje de error)
        console.log("Error de red al enviar el formulario");
    }
});
