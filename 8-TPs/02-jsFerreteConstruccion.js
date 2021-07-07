/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno,anchoTerreno,perimetro,alambre;

    largoTerreno=parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno=parseFloat(document.getElementById("txtIdAncho").value);
    
    perimetro=2*largoTerreno+2*anchoTerreno;
    alambre=perimetro*3;

    alert("Usted necesitará " + alambre + " metros de alambre");
}

function Circulo () 
{
    let radioTerreno,perimetro,alambre;

    radioTerreno=parseFloat(document.getElementById("txtIdRadio").value);

    perimetro=radioTerreno*2*3.14;
    alambre=perimetro*3;

    alert("Usted necesitará " + alambre + " metros de alambre");
	
}

function Materiales () 
{
    let largoTerreno,anchoTerreno,bolsaArena,bolsaCemento;

    largoTerreno=parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno=parseFloat(document.getElementById("txtIdAncho").value);
   
    area=largoTerreno*anchoTerreno;
    bolsaCemento=2*area;
    bolsaArena=3*area;
    
    alert("Usted necesitará " + bolsaCemento + " bolsas de cemento y " + bolsaArena + " bolsas de arena" );
}
