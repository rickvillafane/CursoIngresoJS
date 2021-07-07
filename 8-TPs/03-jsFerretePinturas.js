/*
AUTOR: VILLAFAÑE RICARDO
ENUNCIADO: TP N3


3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura,temperaturaCentigrados

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    temperaturaCentigrados=temperatura-32

    alert(temperatura + " grados Farenheit son " + temperaturaCentigrados + " grados centígrados")

}

function CentigradosFahrenheit () 
{
    let temperatura,temperaturaFarenheit

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    temperaturaFarenheit=temperatura+32;

    alert(temperatura + " grados Centígrados son " + temperaturaFarenheit + " grados Farenheit")
    	
}
