/*
AUTOR RICARDO VILLAFAÑE
SWITCH 1
*/


function mostrar() {
	
	var mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("¡Que comiences bien el año!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las Vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!");
			break;
		default:
			break;
	}


}//FIN DE LA FUNCIÓN