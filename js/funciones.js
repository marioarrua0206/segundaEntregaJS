// Función obtener el tipo de torta por porciones
function obtenerTipoTorta(cantidadPorciones, tiposTorta) {
    return tiposTorta.find(torta => cantidadPorciones <= torta.maxPorciones);
}
12
// Función  calcular el precio base de la torta
function calcularPrecioBase(cantidadPorciones, precioPorcion) {
    return cantidadPorciones * precioPorcion;
}

// Función  obtener decoración seleccionada
function obtenerDecoracion(decoraciones) {
    let decoracion;
    do {
        decoracion = prompt("¿Qué tipo de decoración desea? \nIngrese el nímero: \n1) Infantil, \n2) Adultos, \n3) Comunion, \n4) Bautismo");
    } while (!decoraciones.some(dec => dec.id === decoracion));

    return decoraciones.find(dec => dec.id === decoracion);
}

// Función aplicar el factor decoración
function aplicarFactorDecoracion(precioTotal, factor) {
    return precioTotal * factor;
}

// Función para aplicar descuentos si el precio supera un tope
function aplicarDescuentos(precioTotal, topePrecio) {
    const descuento = 0.10
    while (precioTotal > topePrecio) {
        precioTotal -= precioTotal * descuento;
    }
    return precioTotal;
}

// Función para calcular el precio basado en la cantidad de porciones
function calcularPrecioPorciones(cantidadPorciones, precioPorPorcion) {
    let nombreTorta;
    let precioTotal;

    if (cantidadPorciones <= 10) {
        nombreTorta = "MINI CAKE";        
        precioTotal = 10 * precioPorPorcion ;
    } else if (cantidadPorciones > 10 && cantidadPorciones <= 19) {
        nombreTorta = "TORTA MEDIANA";
        precioTotal = 20 * precioPorPorcion ;
    } else if (cantidadPorciones > 20 && cantidadPorciones <= 28) {
        nombreTorta = "TORTA GRANDE";
        precioTotal = 28 * precioPorPorcion ;
    } else if (cantidadPorciones > 29 && cantidadPorciones <= 35) {
        nombreTorta = "TORTA ESPECIAL";
        precioTotal = 35 * precioPorPorcion ;
    } else if (cantidadPorciones > 36) {
        alert("Consultar precio por privado");
    }

    return {
        nombre: nombreTorta,
        precio: precioTotal
    };
}

// Función principal para calcular el precio total de la torta
function calcularPrecioTorta() {
    const tiposTorta = [
        { nombre: "MINI CAKE", maxPorciones: 10, precioPorcion: 50 },
        { nombre: "TORTA MEDIANA", maxPorciones: 19, precioPorcion: 45 },
        { nombre: "TORTA GRANDE", maxPorciones: 28, precioPorcion: 40 },
        { nombre: "TORTA ESPECIAL", maxPorciones: 35, precioPorcion: 35 }
    ];

    const decoraciones = [
        { id: "1", nombre: "Infantil", factor: 1.20, tipo: "TORTA INFANTIL" },
        { id: "2", nombre: "Adultos", factor: 1.30, tipo: "TORTA ADULTOS" },
        { id: "3", nombre: "Comunion", factor: 1.15, tipo: "TORTA COMUNION" },
        { id: "4", nombre: "Bautismo", factor: 1.15, tipo: "TORTA BAUTISMO" }
    ];

    let cantidadPorciones = parseInt(prompt("Ingrese para cuántas personas es la torta"));

    // Si es mayor a 36, muestra mensaje y termina la ejecución
    if (cantidadPorciones >= 36) {
        alert("Consultar precio por privado");
        return;
    }

   
    let tipoTorta = obtenerTipoTorta(cantidadPorciones, tiposTorta);
    alert("Usted necesita una " + tipoTorta.nombre);
    
    let resultadoTorta = calcularPrecioPorciones(cantidadPorciones, tipoTorta.precioPorcion);
    
    let precioTotal = resultadoTorta.precio;
    
    let decoracionSeleccionada = obtenerDecoracion(decoraciones);
    precioTotal = aplicarFactorDecoracion(precioTotal, decoracionSeleccionada.factor);
    
    const topePrecio = 1000;
    precioTotal = aplicarDescuentos(precioTotal, topePrecio);
    
    alert(`El tipo de torta es: ${decoracionSeleccionada.tipo}`);
    alert(`El precio total de la torta es: $${precioTotal.toFixed(2)}`);
}
