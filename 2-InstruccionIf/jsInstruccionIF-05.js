/*
Autor: Ricardo Villafañe
Ejercicio 5 IF
*/

function mostrar() {
	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad >= 18) {

		alert("Usted no es Adolescente");
	}

}