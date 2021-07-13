/*
Autor: Ricardo Villafañe
Ejercicio 4 IF
*/

function mostrar() {
	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 17 && edad >= 13) {
		
		alert("Usted es Adolescente");
	}
}