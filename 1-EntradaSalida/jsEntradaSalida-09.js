/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo,aumento;
	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	aumento=sueldo*0.1;
	document.getElementById("txtIdResultado").value=sueldo+aumento;
}
