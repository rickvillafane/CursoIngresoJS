/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
/*
AUTOR RICARDO VILLAFAÑE
EJ 8 PARCIAL 2019
*/

function mostrar() {
    var letra;
    var numero;
    var banderaPrimero;
    var seguir;
    var contadorCeros;
    var contadorPositivos;
    var acumuladorPositivos;
    var promedioPositivos;
    var acumuladorNegativos;
    var contadorPares;
    var contadorImpares;
    var numeroMaximo;
    var letraMaximo;
    var numeroMinimo;
    var letraMinimo;

    banderaPrimero = true;
    contadorCeros = 0;
    contadorPositivos = 0;
    acumuladorNegativos = 0;
    contadorPares = 0;
    contadorImpares = 0;
    acumuladorPositivos = 0;


    do {
        letra = prompt("Ingrese una letra");
        numero = prompt("Ingrese un número entre -100 y 100");
        numero = parseInt(numero);
        while (numero < -100 || numero > 100) {
            numero = prompt("Número no Válido. Ingrese nuevamente entre -100 y 100");
        }
        if (banderaPrimero == true) {
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
            banderaPrimero = false;
        }
        else {
            if (numeroMaximo < numero) {
                numeroMaximo = numero;
                letraMaximo = letra;
            }
            else {
                if (numeroMinimo > numero) {
                    numeroMinimo = numero;
                    letraMinimo = letra;
                }
            }
        }

        if (numero == 0) {
            contadorCeros++;
        }
        else {
            if (numero > 0) {
                acumuladorPositivos = acumuladorPositivos + numero;
                contadorPositivos++;
            }
            else {
                acumuladorNegativos = acumuladorNegativos + numero;

            }
        }

        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }

        seguir = prompt("Desea continuar ingresando datos? Si // No");
        while (seguir != "Si" && seguir != "No") {
            seguir = prompt("La respuesta debe ser 'Si' o 'No'");
        }


    } while (seguir == "Si");

    promedioPositivos = acumuladorPositivos / contadorPositivos;

    document.write("La cantidad de numeros pares es " + contadorPares + "<br>" +
        "La cantidad de números impares es " + contadorImpares + "<br>" +
        "La cantidad de ceros es " + contadorCeros + "<br>" +
        "El promedio de todos los números positivos ingresados es " + promedioPositivos + "<br>" +
        "La suma de los números negativos es " + acumuladorNegativos + "<br>" +
        "El número Máximo es " + numeroMaximo + " y su letra es: " + letraMaximo + "<br>" +
        "El número Mínimo es " + numeroMinimo + " y su letra es: " + letraMinimo + "<br>")




}
