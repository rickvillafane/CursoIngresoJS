/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

/*
Autor Ricardo Villafañe
Parcial 2019 EJ 4
*/

function mostrar() {

    var numeroUno;
    var numeroDos;
    var suma;
    var resta = 0
    var resultado;

    numeroUno = prompt("Ingrese un número");
    numeroDos = prompt("Ingrese otro número");

    if (numeroUno == numeroDos) {

        resultado = numeroUno + numeroDos;
    }

    else {
        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

        if (numeroUno > numeroDos) {

            resta = numeroUno - numeroDos;
            resultado = resta
        }
        else {

            suma = numeroUno + numeroDos;
            resultado = suma;
        }
    }

    if (resta > 10) {

        alert("La resta es " + resta + " y superó el 10");
    }


    alert("El resultado es " + resultado);

}



