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
/* const costoBase = 1.16

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
}  */
//#endregion

//#region Etapa 4
/* const costoBase = 1.16

let ubicacionHtml = document.getElementById("ubicacion")
let propiedadHtml = document.getElementById("propiedad")

let polizaHtml = document.getElementById("valorPoliza")

function cargarComboPropiedad(){
    propiedadHtml.innerHTML = `<option selected disabled>...</option>`
    for(var propiedad of datosPropiedad){
        propiedadHtml.innerHTML += `<option value= ${propiedad.factor} > ${propiedad.tipo} </option>`
    }
}
function cargarComboUbicacion(){
    ubicacionHtml.innerHTML = `<option selected disabled>...</option>`
    for(var ubicacion of datosUbicacion){
        ubicacionHtml.innerHTML += `<option value=${ubicacion.factor}>${ubicacion.tipo}</option>`
    }
}
cargarComboPropiedad()
cargarComboUbicacion()

let metrosHtml 

let btnCotizar = document.getElementById("cotizar")
btnCotizar.onclick = function(){
    metrosHtml = document.getElementById("metros2")
    let metrosCuadrados = Number(metrosHtml.value)
    factoresMultiplicadores()

    console.log(metrosCuadrados)
    if( fmUbicacion > 1.000 && fmPropiedad > 1.000 && !isNaN(metrosCuadrados) && metrosCuadrados != null && metrosCuadrados % 1 === 0){
        var total = costoBase * metrosCuadrados * fmUbicacion * fmPropiedad
        console.log("monto total de la poliza: " + total)
        polizaHtml.innerHTML = total.toFixed(2)
        
    }   
    else{
        console.warn("Hubo un error al ingresar de datos")
        console.log(fm)
    } 
}

let fmPropiedad
let fmUbicacion

function factoresMultiplicadores(){
    fmPropiedad = propiedadHtml.value 
    fmUbicacion = ubicacionHtml.value
} */

//#endregion

//#region Etapa 5
const costoBase = 1.16

let divHtml = document.getElementById("div")

let ubicacionHtml = document.getElementById("ubicacion")
let propiedadHtml = document.getElementById("propiedad")

let polizaHtml = document.getElementById("valorPoliza")

function cargarComboPropiedad(){
    propiedadHtml.innerHTML = `<option selected disabled>...</option>`
    for(var propiedad of datosPropiedad){
        propiedadHtml.innerHTML += `<option value= ${propiedad.factor} > ${propiedad.tipo} </option>`
    }
}
function cargarComboUbicacion(){
    ubicacionHtml.innerHTML = `<option selected disabled>...</option>`
    for(var ubicacion of datosUbicacion){
        ubicacionHtml.innerHTML += `<option value=${ubicacion.factor}>${ubicacion.tipo}</option>`
    }
}
cargarComboPropiedad()
cargarComboUbicacion()

let metrosHtml 

let btnCotizar = document.getElementById("cotizar")
btnCotizar.onclick = function(){
    divHtml.classList.add("div-blocked")
    btnCotizar.innerHTML = `<img src="/images/animation.gif">`

    setTimeout(() => {
        let poliza = calcularPoliza()
        if(poliza == -1){
            alert("Datos mal ingresados")
        } else {
            polizaHtml.innerHTML = poliza.toFixed(2)
        }

        btnCotizar.innerHTML = "Cotizar"
        divHtml.classList.remove("div-blocked")
    }, 5000) 
}

let fmPropiedad
let fmUbicacion

function factoresMultiplicadores(){
    fmPropiedad = propiedadHtml.value 
    fmUbicacion = ubicacionHtml.value
}

function calcularPoliza(){
    metrosHtml = document.getElementById("metros2")
    let metrosCuadrados = Number(metrosHtml.value)
    factoresMultiplicadores()

    console.log(metrosCuadrados)
    if( fmUbicacion > 1.000 && fmPropiedad > 1.000 && !isNaN(metrosCuadrados) && metrosCuadrados != null && metrosCuadrados % 1 === 0){
        var total = costoBase * metrosCuadrados * fmUbicacion * fmPropiedad
        return total
    }   
    else{
        console.warn("Hubo un error al ingresar de datos")
        return -1
    } 
}
//#endregion