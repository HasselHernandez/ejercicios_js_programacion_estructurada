// Usando corchetes []:
let arreglo = [1, 2, 3, "texto", true];

// Usando el constructor Array:
let arreglo1 = new Array(1, 2, 3);

// Arreglo vacío:
let arreglo2 = [];

// Arreglo con objetos vacío:
let arreglo3 = [{}, {}, {}];

// Arreglo con objetos:
let arreglo4 = [{"nombre":"Hassel Lira", "edad":"18"}, {}, {}];

//Arreglos en arreglo

let arreglo5 = [[{},{}], ["A",1,2], [true, false]];


// push()

let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

// unshitf(
let letras1 = ['b', 'c'];
let longitud1 = letras.unshift('a');
console.log(letras1); // ['a', 'b', 'c']
console.log(longitud1); // 3)

// pop
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// shift
let numeros2 = [10, 20, 30, 20, 40];
let indice = numeros.indexOf(20); // 1
let indiceDesde2 = numeros.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3



// añadir y quit¿¿¿¿ar final 
//push () es para ingrear al final y devuelve la longitu 
// pop() quitar al final y nos devuelve el ultimo elemento

//añadir y quitar al inicio 

//unshift y shift 


//indexOf(elemento, [inicio]):
let numeros1 = [10, 20, 30, 20, 40];
let indice1 = numeros.indexOf(20); // 1
let indiceDesde1 = numeros.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3


// length:
let nums = [1,2,3];
console.log(nums.lenguaje );//3
nums.length = 1; //Trunca a 1
nums.length = 5; // Extiende a [1,undefined, undefined, undefined, undefined]

// sort([comparador])
let numeros3 = [3, 1, 4, 2];
numeros3.sort((a, b) => b - a); // Orden ascendente
console.log(numeros3); // [1, 2, 3, 4]

let caracteres =['z','a','x','m','j','y'];
caracteres.sort ();
console.log(caracteres);

// join(separador)

let palabras = ['Hassel', 'Josue','Lira','Hernandez'];
let texto = palabras.join(' '); // 'Separador entre palabras'
console.log (texto);

// concat(arreglo1, arreglo2, ...)

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5,6,7],'Hassel');
console.log(combinado); // [1, 2, 3, 4, 5]

// forEach(callback(elemento, indice, arreglo))

let colores = ['rojo', 'verde', 'azul'];
colores.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

for (let color of color){
    console.log(color);
}

for (let i = 0; i < colores.lengt; i++){
    console.log(colores[i]);
}

// map(callback(elemento, indice, arreglo))

let numeros4 = [1, 2, 3];
let dobles = numeros4.map(numero => numero * 2);
console.log(dobles); // [2, 4, 6]

// filter(callback(elemento, indice, arreglo))

let datos = [53, 21, 22, 51, 37, 88, 1000, 4];
let pares = datos.filter(x => x % 2 === 1);
console.log(pares); // [2, 4]

// reduce(callback(acumulador, elemento, indice, arreglo), [valorInicial])

let precios = [1, 2, 3, 4];
let suma = precios.reduce((acumulador , valorActual) =>  + acumulador + valorActual, 0);
console.log(suma); // 10

