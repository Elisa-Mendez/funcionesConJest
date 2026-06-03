// Ejercicio 1 -> Calculadora
function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje inválido";
    }

    return precio - (precio * porcentaje / 100);
}

// Ejercicio 2 -> contraseña
function validarPassword(password) {
    const tieneLongitudMinima = password.length >= 8;
    const tieneNumero = /\d/.test(password);

    return tieneLongitudMinima && tieneNumero;
}

// Ejercicio 3 -> convertir celcius a farenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Ejercicio 4 -> mayoria de edad
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// Ejercicio 4 -> nombre completo
function generarNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}

module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;
   
    