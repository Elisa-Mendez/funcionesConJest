const funciones = require("./funciones.js");

test("el precio final al descontar el 20% a 1000 es de 800 ", () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});

test("el precio final al descontar el 10% a 500 es de 450 ", () => {
    expect(funciones.calcularDescuento(500, 10)).toBe(450);
});

test("El porcentaje es invalido", () => {
    expect(funciones.calcularDescuento(300, 120)).toBe("Porcentaje inválido");
});

test("La contraseña abc12345 es correcta", () => {
    expect(funciones.validarPassword("abc12345")).toBeTruthy();
});

test("La contraseña abcdef NO es correcta", () => {
    expect(funciones.validarPassword("abcdef")).toBeFalsy();
});

test("La contraseña 12345678 es correcta", () => {
    expect(funciones.validarPassword("12345678")).toBeTruthy();
});

test("el precio final al descontar el 10% a 500 es de 450 ", () => {
    expect(funciones.calcularDescuento(500, 10)).toBe(450);
});

test("debe convertir 0°C a 32°F", () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
});

test("debe convertir 25°C a 77°F", () => {
    expect(funciones.celsiusAFahrenheit(25)).toBe(77);
});

test("debe convertir -10°C a 14°F", () => {
    expect(funciones.celsiusAFahrenheit(-10)).toBe(14);
});

test("debe devolver Verdadero para 18 años", () => {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy();
});

test("debe devolver Verdadero para mayores de 18", () => {
    expect(funciones.esMayorDeEdad(25)).toBeTruthy();
});

test("debe devolver falso para menores de 18", () => {
    expect(funciones.esMayorDeEdad(17)).toBeFalsy();
});

test("debe unir nombre y apellido", () => {
    expect(funciones.generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
});

test("debe unir nombre y apellido", () => {
    expect(funciones.generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
});