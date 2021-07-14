/*4.	
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

/*
AUTOR RICARDO VILLAFAÑE
TP N4 SWITCH CANTIDAD IF MARCAS
*/

/*
function CalcularPrecio() {

    var precioLamparas, marcaLampara, cantidadLamparas, precioFinal, precioDescuento, porcentajeDescuento, precioBruto, impuesto;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;
    precioBruto = cantidadLamparas * precioLamparas;

    switch (cantidadLamparas) {
        case 5:
            if (marcaLampara == "ArgentinaLuz") {
                porcentajeDescuento = 40;
            }
            else {
                porcentajeDescuento = 30;
            }
            break;
        case 4:
            if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
                porcentajeDescuento = 25;
            }
            else {
                porcentajeDescuento = 20;
            }
            break;
        case 3:
            if (marcaLampara == "ArgentinaLuz") {
                porcentajeDescuento = 15;
            }
            else if (marcaLampara == "FelipeLamparas") {
                porcentajeDescuento = 10;
            }
            else {
                porcentajeDescuento = 5;
            }
            break;
        case 2:
            porcentajeDescuento = 100
            break;
        case 1:
            porcentajeDescuento = 100
            break;
        default:
            porcentajeDescuento = 50;
            break;
    }
    precioDescuento = (precioBruto*porcentajeDescuento) / 100
    impuesto = precioDescuento * 0.1;

    if (precioDescuento > 120) {
        precioFinal = precioDescuento + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("Usted pagó $" + impuesto + " de IIBB");
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    }
}
*/

/*
function CalcularPrecio() {

    var precioLamparas, marcaLampara, cantidadLamparas, precioFinal, precioDescuento, porcentajeDescuento, precioBruto, impuesto;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;
    precioBruto = cantidadLamparas * precioLamparas;

    if (cantidadLamparas >= 6) {
        porcentajeDescuento = 50;
    }
    else if (cantidadLamparas == 5) {
        switch (marcaLamparas) {
            case "ArgentinaLuz":
                porcentajeDescuento = 40;
                break;
            default:
                porcentajeDescuento = 30;
                break;
        }
    }
    else if (cantidadLamparas == 4) {
        switch (marcaLamparas) {
            case "ArgentinaLuz":
                porcentajeDescuento = 25;
                break;
            case "FelipeLamparas":
                porcentajeDescuento = 25;
                break;
            default:
                porcentajeDescuento = 20;
                break;
        }
    }
    else if (cantidadLamparas == 3) {
        switch (marcaLamparas) {
            case "ArgentinaLuz":
                porcentajeDescuento = 15;
                break;
            case "FelipeLamparas":
                porcentajeDescuento = 10;
                break;
            default:
                porcentajeDescuento = 5;
                break;
        }
    }
    else if (cantidadLamparas < 3) {
        porcentajeDescuento = 100;
    }
    precioDescuento = (precioBruto * porcentajeDescuento) / 100
    impuesto = precioDescuento * 0.1;

    if (precioDescuento > 120) {
        precioFinal = precioDescuento + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("Usted pagó $" + impuesto + " de IIBB");
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    }
}
*/


function CalcularPrecio() {

    var precioLamparas, marcaLamparas, cantidadLamparas, precioFinal, precioDescuento, porcentajeDescuento, precioBruto, impuesto;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;
    precioBruto = cantidadLamparas * precioLamparas;

    switch (cantidadLamparas) {
        case 5:
            switch (marcaLamparas) {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40;
                    break;
                default:
                    porcentajeDescuento = 30;
                    break;
            }
            break;
        case 4:
            switch (marcaLamparas) {
                case "ArgentinaLuz":
                    porcentajeDescuento = 25;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento = 25;
                    break;
                default:
                    porcentajeDescuento = 20;
                    break;
            }
            break;
        case 3:
            switch (marcaLamparas) {
                case "ArgentinaLuz":
                    porcentajeDescuento = 15;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento = 10;
                    break;
                default:
                    porcentajeDescuento = 5;
                    break;
            }
            break;
        case 2:
            porcentajeDescuento = 100;
            break;
        case 1:
            porcentajeDescuento = 100;
            break;
        default:
            porcentajeDescuento = 50;
            break;
    }
    precioDescuento = (precioBruto * porcentajeDescuento) / 100
    impuesto = precioDescuento * 0.1;

    if (precioDescuento > 120) {
        precioFinal = precioDescuento + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("Usted pagó $" + impuesto + " de IIBB");
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    }
}




/*
function CalcularPrecio() {

    var precioLamparas, marcaLampara, cantidadLamparas, precioFinal, precioDescuento, porcentajeDescuento, precioBruto, impuesto;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;
    precioBruto = cantidadLamparas * precioLamparas;


    if (cantidadLamparas >= 6) {
        porcentajeDescuento = 50;
    }
    else if (cantidadLamparas == 5) {
        if (marcaLampara == "ArgentinaLuz") {
            porcentajeDescuento = 40;
        }
        else {
            porcentajeDescuento = 30;
        }
    }
    else if (cantidadLamparas == 4) {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
            porcentajeDescuento = 25;
        }
        else {
            porcentajeDescuento = 20;
        }
    }
    else if (cantidadLamparas == 3) {
        if (marcaLampara == "ArgentinaLuz") {
            porcentajeDescuento = 15;
        }
        else if (marcaLampara == "FelipeLamparas") {
            porcentajeDescuento = 10;
        }
        else {
            porcentajeDescuento = 5;
        }
    }
    else if (cantidadLamparas<3){
        porcentajeDescuento = 100;
    }
    precioDescuento = (precioBruto*porcentajeDescuento) / 100
    impuesto = precioDescuento * 0.1;

    if (precioDescuento > 120) {
        precioFinal = precioDescuento + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("Usted pagó " + impuesto + " de IIBB");
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    }
}

*/



