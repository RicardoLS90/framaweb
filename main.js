document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene que el formulario se envíe de manera predeterminada
  alert('Correo enviado exitosamente');
});

// Obtener los valores del formulario
// var email = document.getElementById('email').value;
// var message = document.getElementById('message').value;

// // Parámetros para enviar con EmailJS
// var templateParams = {
//     from_email: email,
//     message: message
// };

// // Enviar correo con EmailJS
// emailjs.send('service_rleon', 'template_rleon', templateParams)
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Correo enviado exitosamente');
//     }, function(error) {
//         console.log('FAILED...', error);
//         alert('Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo.');
//     });
