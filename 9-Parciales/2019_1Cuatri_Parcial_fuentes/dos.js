/*
Autor: Ricardo Villafañe
Enunciado: Parcial Ejercicio 2


*/
function mostrar()
{
    let nombreUno,nombreDos,pesoUno,pesoDos,pesoTotal,pesoPromedio,mensaje;

    nombreUno=prompt("Ingrese Primer nombre");
    pesoUno=prompt("Ingrese el peso de "+nombreUno);
    nombreDos=prompt("Ingrese Segundo Nombre");
    pesoDos=prompt("Ingrese el peso de "+nombreDos);

    pesoUno=parseFloat(pesoUno);
    pesoDos=parseFloat(pesoDos);

    pesoTotal=pesoUno+pesoDos;
    pesoPromedio=(pesoUno+pesoDos)/2;

    mensaje="Ustedes se llaman "+nombreUno+" y "+nombreDos+" y pesan "+pesoUno+" y "+pesoDos+" kilos que sumados son "+pesoTotal+" y el promedio de peso es "+pesoPromedio+" kilos";

    alert(mensaje);

}
