/*
AUTOR RICARDO VILLAFAÑE
SWITCH 4
*/


function mostrar() {
	
	var mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 29 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días");
			break;
		default:
			alert("Este mes tiene 30 días");
			break;
	}

}