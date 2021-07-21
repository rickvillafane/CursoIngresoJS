/*
AUTOR RICARDO VILLAFAÑE
SWITCH 9
*/


function mostrar() {

	var destino;
	var estacion;
	var precioBase;
	var porcentajeAumento;
	var porcentajeDescuento;
	var aumento;
	var descuento;
	var precioFinal;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	precioBase = 15000;
	porcentajeAumento = 0;
	porcentajeDescuento = 0;
	

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					porcentajeAumento = 20;
					break;
				case "Mar del plata":
					porcentajeDescuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeDescuento = 10;
					break;
			}

			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					porcentajeDescuento = 20;
					break;
				case "Mar del plata":
					porcentajeAumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeAumento = 10;
					break;
			}

			break;
		default:
			switch (destino) {
				case "Cordoba":
					porcentajeDescuento = 0;
					break;
				default:
					porcentajeAumento = 10;
					break;
			}
			break;
	}

	aumento = (precioBase * porcentajeAumento) / 100;
	descuento = (precioBase * porcentajeDescuento) / 100;
	precioFinal = precioBase + aumento - descuento;
	
	
	alert("Su viaje a " + destino + " en " + estacion + " sale $" + precioFinal);



}

