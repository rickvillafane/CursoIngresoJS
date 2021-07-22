/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/* AUTOR RICARDO VILLAFAÑE
WHILE 07
*/

function mostrar() {
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;

	contador = 0;
	acumulador = 0;

	do {
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese un Número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("Desea ingresar otro Número? SI // NO (MAYUSCULAS)");
	} while (respuesta == "SI"); 
	
	document.getElementById("txtIdSuma").value = "La suma es " + acumulador;
	document.getElementById("txtIdPromedio").value = "El promedio es " + acumulador / contador;
}