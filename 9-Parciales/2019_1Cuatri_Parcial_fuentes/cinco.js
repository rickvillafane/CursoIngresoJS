/*
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
Curso de ingreso UTN FRA
*/
/*
AUTOR: RICARDO VILLAFAÑE
EJ 5 PARCIAL 2019
*/

function mostrar() {
    var continente;
    var precioDia;
    var dias;
    var formaPago;
    var porcentajeDescuento = 0;
    var porcentajeRecargo = 0;
    var descuento = 0;
    var recargo = 0;
    var precioBruto;
    var precioFinal;

    continente = document.getElementById("Marca").value;
    dias = prompt("Ingrese cantidad de Días");
    dias = parseInt(dias);
    formaPago = prompt("Ingrese forma de pago; Efectivo, Débito, Mercado Pago, Otro");
    precioDia = 100;
    precioBruto = precioDia * dias;

    switch (continente) {

        case "América":
            porcentajeDescuento = 50;
            switch (formaPago) {
                case "Débito":
                    porcentajeDescuento = porcentajeDescuento + 10;
                    break;
                default:
                    break;
            }
            break;

        case "África":
            porcentajeDescuento = 60;
            switch (formaPago) {
                case "Mercado Pago":
                case "Efectivo":
                    porcentajeDescuento = porcentajeDescuento + 15;
                    break;
            }
            break;
        case "Europa":
            porcentajeDescuento = 20;
            switch (formaPago) {
                case "Débito":
                    porcentajeDescuento = porcentajeDescuento + 15;
                    break;
                case "Mercado Pago":
                    porcentajeDescuento = porcentajeDescuento + 10;
                    break;
                default:
                    porcentajeDescuento = porcentajeDescuento + 15;
                    break;
            }
            break;

        default:
            porcentajeRecargo = 20
            break;
    }

    descuento = (precioBruto * porcentajeDescuento) / 100;
    recargo = (precioBruto * porcentajeRecargo) / 100;

    precioFinal = precioBruto - descuento + recargo;

    alert("El precio de su viaje de " + dias + " días hacia " + continente + " es de $" + precioFinal);
}
