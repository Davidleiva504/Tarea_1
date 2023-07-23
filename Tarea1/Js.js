const colors = require('colors');

function mostrarMensajeColoreado(mensaje, color) {
  const mensajeColoreado = colors[color](mensaje);
  console.log(mensajeColoreado);
}

mostrarMensajeColoreado('Hola, este mensaje está en color rojo!', 'red');
mostrarMensajeColoreado('Este mensaje está en color cyan!', 'cyan');
mostrarMensajeColoreado('Y este mensaje está en color amarillo!', 'yellow');
mostrarMensajeColoreado('Inge si ve esto me debe un punto extra <3!', 'green');


