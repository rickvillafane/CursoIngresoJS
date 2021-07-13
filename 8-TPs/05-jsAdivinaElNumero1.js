/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  var numeroUsuario;

  contadorIntentos = 1;
  numeroSecreto = parseInt(Math.random() * 100) + 1;
  //console.log(numeroSecreto);
  numeroUsuario = parseInt(document.getElementById("txtIdNumero").value);

  if (numeroSecreto == numeroUsuario) {

    alert("Usted es el Ganador!!! Y en solo " + contadorIntentos + " intentos!");
  }
  else if (numeroSecreto > numeroUsuario) {

    alert("Falta...");
  }
  else {
    alert("Se pasó...");
  }

  document.getElementById("txtIdIntentos").value = contadorIntentos;
}

function verificar() {

  var numeroUsuario;
  numeroUsuario = parseInt(document.getElementById("txtIdNumero").value);
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  contadorIntentos = contadorIntentos + 1;

  if (numeroSecreto == numeroUsuario) {

    alert("Usted es el Ganador!!! Y en solo " + contadorIntentos + " intentos!")
  }
  else if (numeroSecreto > numeroUsuario) {

    alert("Falta...")
  }
  else {
    alert("Se pasó...")
  }

  document.getElementById("txtIdIntentos").value = contadorIntentos;
}