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
TP N4 SOLO IF
*/

function CalcularPrecio() {

    var precioLamparas, marcaLampara, cantidadLamparas, precioFinal, precioDescuento, precioBruto, impuesto;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;
    precioBruto = cantidadLamparas * precioLamparas;


    if (cantidadLamparas >= 6) {
        precioDescuento = (precioBruto * 50) / 100;
    }
    else if (cantidadLamparas == 5) {
        if (marcaLampara == "ArgentinaLuz") {
            precioDescuento = (precioBruto * 40) / 100;
        }
        else {
            precioDescuento = (precioBruto * 30) / 100;
        }
    }
    else if (cantidadLamparas == 4) {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
            precioDescuento = (precioBruto * 25) / 100;
        }
        else {
            precioDescuento = (precioBruto * 20) / 100;
        }
    }
    else if (cantidadLamparas == 3) {
        if (marcaLampara == "ArgentinaLuz") {
            precioDescuento = (precioBruto * 15) / 100;
        }
        else if (marcaLampara == "FelipeLamparas") {
            precioDescuento = (precioBruto * 10) / 100;
        }
        else {
            precioDescuento = (precioBruto * 5) / 100;
        }
    }
    else if (cantidadLamparas<3){
        precioDescuento = precioBruto;
    }    
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





