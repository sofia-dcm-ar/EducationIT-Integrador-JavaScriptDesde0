# EducationIT : Integrador JavaScript Desde 0

### Resumen

**Cliente:** empresa de seguros para el Hogar  
**Proyecto:** cotizador de seguros online  
**Funcionamiento:** los clientes obtienen una cotizacion rapida de la poliza de seguro para hogar/comercio ingresando datos  
**Interfaz de Usuario:**  
3 selects desplegables 
- El primero se lista tipos de propiedad
- El segundo se lista zonas geograficas
- El tercero ingresa metros cuadrados a cotizar de 20-500

**Detalles de costos:**  
**Costo Base por metro cuadrado:** es un valor monetario fijo para un metro cuadrado  

```
Costo Base * m2 = precio
```

**Costo Variable:** valor monetario se ajusta segun diversos factores que ofician como multiplicador  

```
Costo Base * m2 * fm = precio
```

---

### Indice

- Etapa 1
- Etapa 2
- Etapa 3
- Etapa 4
- Etapa 5
  
---

### Etapa 1 

Pasos en JS:

1. Declarar constante que almacene valor numerico de costo base
2. Declarar variable donde ingresar total de metros cuadrados. usar prompt para ingresar
3. Definir un factor multiplicador fm
4. Mostrar en cuadro alert() el monto total de la poliza multiplicando los 3 valores predeterminados

---

### Etapa 2

Pasos en JS:

1. Solicitar al usuario que ingrese tipo de vivienda a traves de un prompt()
2. usar un Switch() para validar el dato ingresado y asignar valor a la variable fm 
3. calcular el monto total
4. validar que fm: posea valor superior a 1.000 y que los metros cuadrados del prompt se puedan convertir a un entero
5. si todo sale bien mostrar el resultado con console.log
6. si algo sale mal mostrar console.warn

---

### Etapa 3

Pasos en JS:

1. Crear archivo "variables.js" que contenga 2 arrays  
    1.1. datosUbicacion = opciones de ubicaciones con sus fm  
    1.2. datosPropiedad = opciones de propiedades con sus fm  
2. Conectar variables.js al index.html para que todo sea mismo entorno  
    2.1. usa prompt() para solicitar al usuario que ingrese que vivienda es  
    2.2. Con la opcion de la vivienda, itera sobre el array buscando el factor que le corresponde  
    2.3. Al conseguir el correcto, toma el objeto guardandolo en fmPropiedad  
3. Repetir para ubicacion, guardando en fmUbicacion
4. Modificar if() que verifica los datos (fm , metros cuadrados)
5. Calcular el monto de la poliza ahora usando ambos factores (fmUbicacion, fmPropiedad)

---

### Etapa 4 

Pasos en JS:

1. Conectar los combo select del html con el js para presentar el contenido del desplegable dinamicamente
2. Crear funciones que carguen dinamicamente las opciones desplegables
3. Tomar los metros cuadrados desde el input
4. Crear funcion que recorra los array ubicando los valores fm segun las opciones seleccionadas
5. Tomar el boton cotizar, asignr evento de click
6. Formatear resultado de la poliza en 2 decimales

---

### Etapa 5 

Pasos en JS:

1. Desde js imprimir el resultado de la poliza en el span correspondiente
2. Asignar clase de bloqueo al div del formulario para evitar mas consultas durante el computo
3. Implementar settimeout() para retrasar la siguiente solicitud (simula backend)  
    3.1. aplicar gif de carga a boton  
    3.2. tiene dentro la logica de calculo de poliza  
4. Restaurar palabra "Cotizar" al boton
5. Quitar clase de bloqueo al div
