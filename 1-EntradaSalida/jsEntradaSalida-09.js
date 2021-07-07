/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo,aumento,porcentajeAumento;
	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	porcentajeAumento=parseInt(prompt("Ingrese el porcentaje a Aumentar"));
	aumento=(sueldo*porcentajeAumento)/100;
	document.getElementById("txtIdResultado").value=sueldo+aumento;
}
