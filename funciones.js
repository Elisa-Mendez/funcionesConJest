function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje inválido";
    }

    return precio - (precio * porcentaje / 100);
}

function validarPassword(password) {
    const tieneLongitudMinima = password.length >= 8;
    const tieneNumero = /\d/.test(password);

    return tieneLongitudMinima && tieneNumero;
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function esMayorDeEdad(edad) {
    return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}

module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;
   
    