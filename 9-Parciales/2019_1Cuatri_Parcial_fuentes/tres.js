/*
Autor: Ricardo Villafañe
Enunciado: Parcial Ejercicio 3

*/
function mostrar()
{
    let precio,porcentajeDescuento,descuento,precioFinal;

    precio=prompt("Ingrese el precio");
    porcentajeDescuento=prompt("Ingrese el porcentaje a descontar sin signos Ej: 10");

    precio=parseFloat(precio);
    porcentajeDescuento=parseFloat(porcentajeDescuento);
    descuento=(precio*porcentajeDescuento)/100;
    precioFinal=precio-descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;

}
