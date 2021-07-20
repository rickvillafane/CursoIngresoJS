/*
Enunciado:
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica.
Curso de ingreso UTN FRA
*/
/*
AUTOR RICARDO VILLAFAÑE
TP 6 PARCIAL 2019
*/

function mostrar() {
    var hora;
    hora = parseInt(document.getElementById("laHora").value);

    switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de Tarde");
            break;
        default:
            if (hora > 24) {
                alert("No es una hora válida");
            }
            else {
                if (hora > 19 && hora <= 24) {
                    alert("Es de noche");
                }
                else {
                    alert("A dormir!");
                }
            }

    }

}
