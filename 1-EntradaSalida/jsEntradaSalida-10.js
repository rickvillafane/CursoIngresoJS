/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe,descuento,porcentajeDescuento;
	importe=parseInt(document.getElementById("txtIdImporte").value);
	porcentajeDescuento=parseInt(prompt("Ingrese el porcentaje a descontar"));
	descuento=(importe*porcentajeDescuento)/100;
	document.getElementById("txtIdResultado").value=importe-descuento;
}
