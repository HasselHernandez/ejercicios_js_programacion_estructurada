// 1. Declara una variable nombre y asignale tu nombre Muestra su valor en consola 

let.nombre = 'Hassel Josue Lira Hernandez';
console.log(nombre);

//2. Declara dos variables edad y ciudad y muéstralas juntas en un solo

let edad = 30;
let ciudad = "Juigalpa";
console.log(`Edad: ${edad}, Ciudad: ${ciudad}`);

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.
const PI = 3.1416;
console.log ("valor de PI: " + PI);

//4. Declara tres variables con valores numéricos y calcula su promedio.
let a = 50;
let b = 70;
let c = 90;
let promedio = (a + b + c) / 3;
console.log(promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = true;
console.log("¿Es mayor de edad?" + esMayorDeEdad);

// 6. Declara dos números y muestra su suma.
let n1 = 15;
let n2 = 25;
let suma = n1 + n2;
console.log (suma);


// 7. Declara dos números y muestra su resta, multiplicación y división.
let num1 = 100;
let num2 = 20;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
console.log ("resta, multiplicacion, division");

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.
let nume1 = 2;
let nume2 = 3;
console.log(`El resultado de ${nume1} elevado a ${nume2} es: ${nume1 ** nume2}`);

// 9. Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 100;
let descuento = 20; // en %
let precioFinal = precio - (precio * descuento / 100);
console.log(`El precio final con ${descuento}% de descuento es: ${precioFinal}`);

// 10.Usando un for, muestra en consola los números del 1 al 10.
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11.Usando un for, muestra en consola la tabla de multiplicar del 5.
console.log("Tabla del 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 12.Usando un while, muestra en consola los números pares del 2 al 20.
console.log("Números pares del 2 al 20:");
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

// 13.Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Hassel");

// 14.Crea una función sumar que reciba dos números y retorne su suma.
function sumar(a, b) {
    return a + b;
}
console.log(`La suma es: ${sumar(5, 7)}`);

// 15.Crea una función esPar que reciba un número y retorne true si es par, false si no lo es

function esPar(numero) {
  return numero % 2 ==0;

}

console.log (esPar(10));

// 16.Crea una función areaRectangulo que reciba base y altura y retorne su área.
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log(`El área del rectángulo es: ${areaRectangulo(5, 3)}`);

// 17.Crea una función flecha multiplicar que reciba dos números y retorne su producto.
const multiplicar = (a, b) => a * b;
console.log(`Multiplicación: ${multiplicar(4, 6)}`);

// 18.Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(`25°C en Fahrenheit son: ${convertirCelsiusAFahrenheit(25)}°F`);

//19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.

let mayorDeDos =(num1, num2) => {
  return num1 > num2 ? num1 : num2;
}
console.log(mayorDeDos(10,20));

//20.Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = (precio) => precio * 1.15;
console.log(`El precio con IVA es: ${calcularIVA(200)}`);