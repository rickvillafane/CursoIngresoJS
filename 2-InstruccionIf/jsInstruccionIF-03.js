/*
Autor: Ricardo Villafañe
Ejercicio 3 IF
*/

function mostrar() {

	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {

		alert("Usted es mayor de edad");
	}
	else {

		alert("Usted es menor de edad");

	}
}