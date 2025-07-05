/*
En este archivo se encuentra el comportamiento del formulario 
Se extraen los valores de los campos y del radio button 
Y se muestra un mensaje en el DIV a la derecha del formulario
*/

// Obtiene los valores del form, div y boton de limpiar
const form = document.getElementById('formularioSorteo'); // Obtengo el formulario
const resultadoDiv = document.getElementById('resultado'); // Obtengo el DIV
const btnLimpiar = document.getElementById('btnLimpiar');  // Obtengo el botón de limpiar

// Escuchamos el botón enviar (submit) del form y llmamos a la función mostrarMensje 
form.addEventListener('submit', mostrarMensaje);

// Escuchamos el click al botón de limpiar
btnLimpiar.addEventListener('click', limpiarForm);

//Funciones

//En esta función creamos el mensaje de acuerdo a la valoración recibida
function mostrarMensaje(evt) {
  evt.preventDefault();   // Evita que el formulario se envíe y recargue la página

  // Obtiene los valores de los campos
  const txtEmail = document.getElementById("email").value;
  const txtNombre = document.getElementById('nombre').value;
  const txtApellido = document.getElementById('apellido').value;
  const txtComentario = document.getElementById("comentario").value;

  // Obtiene la calificación seleccionada
  const valoracion = document.querySelector('input[name="valoranos"]:checked').value;


  // Crea la línea con los datos a mostrar
  
  let lineaDatos = ` Estimado Sr/a. ${txtApellido}, ${txtNombre} \n\n`

  if (valoracion == 5){
    lineaDatos+=`Le agradecemos su MÁXIMA valoración de ${valoracion} puntos!!\n\n`;
  } else if (valoracion == 4 || valoracion == 3){
    lineaDatos+=`Le agradecemos su valoración de ${valoracion} puntos.\n`;
    lineaDatos+=`Aún así, sabemos que nos quedan cosas para mejorar y así alcanzar tu máxima valoración.\n\n`
  } else {
    lineaDatos+=`Le pedimos disculpas que no sea de su agrado nuestra página web.\n`;
    lineaDatos+=`Su valoración de ${valoracion} punto`;
    lineaDatos+= valoracion==2 ? `s` : ``;
    lineaDatos+= ` nos indica que debemos mejorar.\n\n`;
  }
  
  if (txtComentario.length>0){  
    lineaDatos+= `Su comentario: \" ${txtComentario}\" lo tendremos en cuenta.\n\n`;
    lineaDatos+= `Le responderemos a la brevedad a su casilla de correo: ${txtEmail}\n`;
  }
  lineaDatos+= `\n\n    ¡¡ Muchas gracias por ayudarnos !!`;

  // Muestra la línea en el div de resultado
  resultadoDiv.innerText = lineaDatos;
  // Agrega las clases para mostrar el recuadro y asigna el tipo de letra
  resultadoDiv.classList.add('mostrar-borde');
  resultadoDiv.classList.add('texto');
}

//En esta función limpimos los campos del formulario y el DIV del resultado

function limpiarForm(evt) {
  form.reset(); // Limpia los campos del formulario
  resultadoDiv.innerText = ''; // Limpia el resultado
  // Limpia las clases
  resultadoDiv.classList.remove('mostrar-borde'); 
  resultadoDiv.classList.remove('texto');
}
