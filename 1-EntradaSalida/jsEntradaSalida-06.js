/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno,numerodos,suma
	numerouno=document.getElementById("txtIdNumeroUno").value;
	numerodos=document.getElementById("txtIdNumeroDos").value;
	suma=parseInt(numerouno)+parseInt(numerodos);
	alert("El resultado de la Suma es "	+ suma);
}

