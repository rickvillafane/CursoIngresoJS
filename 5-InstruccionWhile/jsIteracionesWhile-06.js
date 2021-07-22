/* AUTOR RICARDO VILLAFAÑE
WHILE 06
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5){
		contador=contador + 1;
		numeroIngresado=prompt("Ingrese un Número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
	}
	
	document.getElementById("txtIdSuma").value= "La suma es " + acumulador; 
	document.getElementById("txtIdPromedio").value= "El promedio es "	+ acumulador/5;
}