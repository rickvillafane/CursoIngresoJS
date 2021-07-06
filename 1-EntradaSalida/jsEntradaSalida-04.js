/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre,mensaje;
	nombre=prompt("Ingrese su nombre");
	mensaje="Su nombre es: " + nombre;
	document.getElementById("txtIdNombre").value=mensaje;
	
}

