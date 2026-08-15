//#region Etapa 1
/* const costoBase = 1.16
const metrosCuadrados = Number(prompt("Ingrese cantidad de metros cuadrados"))
const fm = 2.5

var total = costoBase * metrosCuadrados * fm

alert("monto total de la poliza: " + total) */
//#endregion

//#region Etapa 2
/* const costoBase = 1.16
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
} */
//#endregion

//#region Etapa 3
const costoBase = 1.16

let metrosCuadrados = Number(prompt("Ingrese cantidad de metros cuadrados"))

let fmPropiedad
let fmUbicacion
let seguir = true

let viviendaString
do{
    let viviendaOpcion = prompt("Ingrese el tipo de vivienda:\n  0 = casa \n  1 = P.H. \n  2 = Dto. Edificio \n  3 = Barrio Privado \n  4 = Oficina \n  5 = Local Comercial  \n  6 = Deposito de Logistica")
    switch(viviendaOpcion){
        case "0" :
            viviendaString = "casa"
            break;
        case "1" :
            viviendaString = "P.H."
            break;
        case "2" :
            viviendaString = "Dto. Edificio"
            break;
        case "3" :
            viviendaString = "Barrio Privado"
            break;
        case "4" :
            viviendaString = "Oficina"
            break;
        case "5" :
            viviendaString = "Local Comercial"
            break;
        case "6" :
            viviendaString = "Deposito de Logistica"
            break;
        default:
            viviendaString = "error"
    }

    for(let propiedad of datosPropiedad){
        if(propiedad.tipo == viviendaString){
            fmPropiedad = propiedad
            seguir = false
        }
    }

    if(seguir){ alert("error en el dato ingresado, ingrese un numero de las opciones") }
}
while(seguir)
console.log(viviendaString)

seguir = true
let ubicacionString
do{
    let ubicacionOpcion = prompt("Ingrese la ubicacion de la vivienda:\n  0 = CABA \n  1 = Tandil \n  2 = Costa Atlantica \n  3 = Patagonia Argentina")

    switch(ubicacionOpcion){
        case "0" :
            ubicacionString = "CABA"
            break;
        case "1" :
            ubicacionString = "Tandil"
            break;
        case "2" :
            ubicacionString = "Costa Atlantica"
            break;
        case "3" :
            ubicacionString = "Patagonia Argentina"
            break;
        default:
            ubicacionString = "error"
    }

    for(let ubicacion of datosUbicacion){
        if(ubicacion.tipo == ubicacionString){
            fmUbicacion = ubicacion
            seguir = false
        }
    }

    if(seguir){ alert("error en el dato ingresado, ingrese un numero de las opciones") }
}
while(seguir)
console.log(ubicacionString)

if( fmUbicacion.factor > 1.000 && fmPropiedad.factor > 1.000 && !isNaN(metrosCuadrados) && metrosCuadrados != null && metrosCuadrados % 1 === 0){
    var total = costoBase * metrosCuadrados * fmUbicacion.factor * fmPropiedad.factor
    console.log("monto total de la poliza: " + total)
}
else{
    console.warn("Hubo un error al ingresar de datos")
} 
//#endregion
