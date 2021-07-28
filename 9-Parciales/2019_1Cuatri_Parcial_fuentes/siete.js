/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
/*
AUTOR RICARDO VILLAFAÑE
EJ 7 PARCIAL 2019
*/

function mostrar() {

    var altura;
    var alturaMasBaja;
    var promedioAlturas;
    var sexoMasBajo;
    var acumuladorAltura;
    var sexo;
    var mujeresAltas;
    var contador;


    contador = 0;
    mujeresAltas = 0;
    acumuladorAltura = 0;

    for (contador; contador < 5; contador++) {

        sexo = prompt("Ingrese el Sexo del jugador de la siguiente manera; 'M' 'F'");

        while (sexo != "M" && sexo != "F") {
            sexo=prompt("Dato no válido, 'M' para Masculino, 'F' para Femenino");
        }
        altura = prompt("Ingrese la altura del jugador o jugadora en centímetros");
        altura = parseInt(altura);

        while (altura < 0 || altura > 250) {
            altura=prompt("Dato no válido, la altura debe estar entre 0cm y 250 cm");
        }

        if (altura >= 190 && sexo == "F") {
            mujeresAltas++;
        }

        if (contador == 0) {
            alturaMasBaja = altura;
            sexoMasBajo = sexo;
        }
        else {
            if (altura < alturaMasBaja) {
                alturaMasBaja = altura;
                sexoMasBajo = sexo;
            }
        }

        acumuladorAltura = acumuladorAltura + altura;

    }

    
    promedioAlturas = acumuladorAltura / 5;

    if (sexo == "F") {
        sexo = "Femenino";
    }
    else {
        sexo = "Masculino";
    }

    alert("El promedio de las alturas es " + promedioAlturas + " cm");
    alert("La altura más baja es de " + alturaMasBaja + " cm y es de una jugadora de sexo " + sexo);

    if (mujeresAltas == 0) {
        alert("No hay mujeres que superen los 190cm");
    }
    else {
        alert("Las mujeres que superan los 190cm son: " + mujeresAltas);
    }
}
