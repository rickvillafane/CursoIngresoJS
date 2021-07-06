/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno,numerodos,resultado;
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=numerouno+numerodos
	alert("El resultado es " + resultado);

	
}

function restar()
{
	var numerouno,numerodos,resultado;
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=numerouno-numerodos;
	alert("El resultado es " + resultado);
}

function multiplicar()
{ 
	var numerouno,numerodos,resultado;
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=numerouno*numerodos;
	alert("El resultado es " + resultado);
}

function dividir()
{
	var numerouno,numerodos,resultado;
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=numerouno/numerodos;
	alert("El resultado es " + resultado);
}

