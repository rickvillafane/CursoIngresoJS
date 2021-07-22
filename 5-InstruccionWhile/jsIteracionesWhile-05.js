/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
/*
AUTOR RICARDO VILLAFAÑE
WHILE 4
*/

function mostrar() {

	var sexo;
	sexo = prompt("Ingrese Sexo, 'M' para Masculino ó 'F' para Femenino");


	while (sexo != 'M' && sexo != 'F') {

		sexo = prompt("ERROR; Ingrese Sexo, 'M' para Masculino ó 'F' para Femenino");
	}

	if (sexo == 'M') {
		document.getElementById("txtIdSexo").value = "Masculino";
	}
	else {
		document.getElementById("txtIdSexo").value = "Femenino";
	}




}//FIN DE LA FUNCIÓN