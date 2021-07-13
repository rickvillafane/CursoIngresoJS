/*
Autor Ricardo Villafañe
Ejercicio 6
*/

function mostrar() {
	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {

		alert("Usted es mayor de edad");
	}
	else if (edad >= 13 && edad <= 17) {

		alert("Usted es Adolescente");
	}
	else {
		alert("Usted es un niño");
	}
}