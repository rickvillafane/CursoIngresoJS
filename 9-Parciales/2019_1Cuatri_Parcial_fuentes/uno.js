
/*
Autor: Ricardo Villafañe
Ejercicio parcial N1
*/

function mostrar()
{
  let ladoTriangulo,perimetro,mensaje;

  ladoTriangulo=prompt("Ingrese el tamaño de los lados del triángulo equilátero");
  ladoTriangulo=parseFloat(ladoTriangulo);

  perimetro=ladoTriangulo*3;
  mensaje="El perímetro del Triángulo equilátero es "+perimetro;

  alert(mensaje);



}
