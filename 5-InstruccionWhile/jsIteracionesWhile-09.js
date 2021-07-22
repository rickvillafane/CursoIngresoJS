/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
AUTOR RICARDO VILLAFAÑE
WHILE 9
*/


function mostrar() {

	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaDelPrimero = true

	do {
		numeroIngresado = prompt("Ingrese un número")
		numeroIngresado = parseInt(numeroIngresado);
		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
			console.log (numeroMaximo);
			console.log (numeroMinimo);
			console.log (banderaDelPrimero);
		}
		else {
			if (numeroMaximo < numeroIngresado) {
				numeroMaximo = numeroIngresado;
				console.log (numeroMaximo);
			}
			else {
				if (numeroMinimo > numeroIngresado) {
					numeroMinimo = numeroIngresado;
					console.log (numeroMinimo);
				}
			}

		}
		respuesta = prompt("Desea ingresar otro Número? SI // NO (MAYUSCULAS)");
	} while (respuesta != "NO");
		


	document.getElementById("txtIdMaximo").value = "El número Máximo ingresado es " + numeroMaximo;
	document.getElementById("txtIdMinimo").value = "El número Mínimo ingresado es " + numeroMinimo;
}