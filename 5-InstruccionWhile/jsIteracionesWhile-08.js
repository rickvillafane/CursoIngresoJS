/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
/*
AUTOR RICARDO VILLAFAÑE
WHILE 8
*/

function mostrar() {
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var banderaDelPrimerNegativo;

	banderaDelPrimerNegativo = true
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	do {
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese un Número");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else {
			if (numeroIngresado != 0) {
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
				banderaDelPrimerNegativo = false;
			}
		}

		respuesta = prompt("Desea ingresar otro Número? SI // NO (MAYUSCULAS)");
	} while (respuesta == "SI");

	if (banderaDelPrimerNegativo == true) {
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = "La suma de los Números positivos es " + sumaPositivos;
	document.getElementById("txtIdProducto").value = "La multiplicación de los Números negativos es " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN