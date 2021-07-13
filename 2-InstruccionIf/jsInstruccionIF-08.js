/*
Autor Ricardo Villafañe
Ejercicio 8 IF
*/

function mostrar() {
	var edad, estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero") {

	}
	else if (edad >= 18 && estadoCivil == "Soltero") {

		alert("Usted es soltero y no es menor");
	}

}