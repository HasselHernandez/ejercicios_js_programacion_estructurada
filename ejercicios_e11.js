// ARREGLO DE NUMEROS 
let numeros = [5, 2, 9, 1, 7];

// ORDEN ASCENDENTE 
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

// ORDEN DESCENDENTES 
numeros.sort((a, b) => b - a);
console.log(numeros); // [9, 7, 5, 2, 1]

// ARREGLO DE CADENAS 
let frutas = ["banana", "manzana", "naranja", "uva"];
frutas.sort(); // ORDEN ALFABETICO POR DEFECTO
console.log(frutas);

// ORDEN ALFABETICO INVERSO 
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);




let personas = [
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {nombre: "Pedro", edad: 20}
];

// ORDENAR POR EDAD (ASCENDENTE)
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

// ORDENAR POR NOMBRE ALFABETICO 
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);



let calificaciones = [
{estudiante: "Eliab", asignatura: "Matematica", calificacion: 60},
{estudiante: "Xiomara", asignatura: "Historia", calificacion: 100},
{estudiante: "Camilo", asignatura: "Español", calificacion: 80},
{estudiante: "Ramiro", asignatura: "Fisica", calificacion: 55},
{estudiante: "Ana", asignatura: "Quimica", calificacion: 77}
];


calificaciones.sort((a, b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);


let numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1);

let palabra = ["hola", "mundo", "javaScript"];
palabra.reverse();
console.log(palabra);


let personas1 = [
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {nombre: "Pedro", edad: 20}
];

personas1.reverse();
console.log(personas1);
