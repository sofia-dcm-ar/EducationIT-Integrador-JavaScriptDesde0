//#region Etapa 1
/* const costoBase = 1.16
const metrosCuadrados = Number(prompt("Ingrese cantidad de metros cuadrados"))
const fm = 2.5

var total = costoBase * metrosCuadrados * fm

alert("monto total de la poliza: " + total) */
//#endregion

//#region Etapa 2
const costoBase = 1.16
let metrosCuadrados = Number(prompt("Ingrese cantidad de metros cuadrados"))
let fm 

var vivienda = prompt("Ingrese el tipo de vivienda:\n  0 = P.H. \n  1 = Dto. Edificio \n  2 = Barrio Privado \n  3 = Oficina \n  4 = Local Comercial  \n  5 = Deposito de Logistica")

switch(vivienda){
    case "0" :
        fm = 1.009
        break;
    case "1" :
        fm = 1.005
        break;
    case "2" :
        fm = 1.002
        break;
    case "3" :
        fm = 1.019
        break;
    case "4" :
        fm = 1.039
        break;
    case "5" :
        fm = 1.041
        break;
    case "6" :
        fm = 1.092
        break;
    default:
        fm = 0
}

if( fm > 1.000 && !isNaN(metrosCuadrados) && metrosCuadrados != null && metrosCuadrados % 1 === 0){
    var total = costoBase * metrosCuadrados * fm
    console.log("monto total de la poliza: " + total)
}
else{
    console.warn("Hubo un error al ingresar de datos")
} 
//#endregion
