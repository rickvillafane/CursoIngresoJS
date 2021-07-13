/*
Ricardo Villafañe
Ejercicio 10 if
*/

function mostrar() {

	var notaExamen;

	notaExamen = parseInt(Math.random()*10)+1;

	if (notaExamen<=10 && notaExamen>=9){

		alert("Nota: " + notaExamen + " Excelente");
	}
	else if (notaExamen>=4 && notaExamen<9){

		alert("Nota: " + notaExamen + " Aprobó");
	}
	else{
		
		alert("Nota: " + notaExamen + " Vamos! La próxima se puede");
	}

}