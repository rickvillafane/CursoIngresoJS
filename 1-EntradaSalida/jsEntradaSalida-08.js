/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo,divisor,resultado,resto
	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado=parseInt(dividendo/divisor);
	resto=dividendo-divisor*resultado;
	alert("El resto de la división es " + resto);

}
