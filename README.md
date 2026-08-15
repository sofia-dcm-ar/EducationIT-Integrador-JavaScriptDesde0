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

- [Etapa 1](#etapa1)

---

### Etapa 1 {#etapa1}

Pasos en JS:

1. Declarar constante que almacene valor numerico de costo base
2. Declarar variable donde ingresar total de metros cuadrados. usar prompt para ingresar
3. Definir un factor multiplicador fm
4. Mostrar en cuadro alert() el monto total de la poliza multiplicando los 3 valores predeterminados

---
