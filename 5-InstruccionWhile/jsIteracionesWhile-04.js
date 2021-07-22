/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*
AUTOR RICARDO VILLAFAÑE
WHILE 4
*/

function mostrar() {
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un numero entre 0 y 9 inclusive");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0  || numeroIngresado > 9) {
		numeroIngresado = prompt("Numero no Válido. Ingrese otro del 0 al 9 inclusive");
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;


}//FIN DE LA FUNCIÓN