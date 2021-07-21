/*
AUTOR RICARDO VILLAFAÑE
SWITCH 7
*/


function mostrar() {

	var destino;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Bariloche":
			alert("Se encuentra al OESTE de Argentina");
			break;
		case "Cataratas":
			alert("Se encuentra al NORTE de Argentina");
			break;
		case "Ushuaia":
			alert("Se encuentra al SUR de Argentina");
			break;
		case "Mar del plata":
			alert("Se encuentra al ESTE de Argentina");
			break;
	}
}
	
