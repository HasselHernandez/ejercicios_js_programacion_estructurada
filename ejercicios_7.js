//• Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al final del arreglo y devuelva el nuevo arreglo.
let agregarElemento = (arreglo, elementos) => {
arreglo.push(elementos);
return arreglo;
}

let numeros = [1, 2, 3];
 
console.log(agregarElemento(numeros,8));

//• Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al inicio del arreglo y devuelva el nuevo arreglo.
let agregarElementoInicio = (arreglo, elementos) => {
  arreglo.unshift(elementos);
  return arreglo;
}

let numeros2 = [1, 2, 3];
console.log (agregarElementoInicio(numeros2,0));

//• Crear una función flecha que reciba un arreglo, elimine y devuelva el último elemento del arreglo.
let eliminarElementoFinal = (arreglo) => {
  let ultimo = arreglo.pop();
  return ultimo;
}

let numeros3 = [24, 32, 89, 51, 1000];
console.log(eliminarElementoFinal(numeros3));

//• Crear una función flecha que reciba un arreglo, elimine y devuelva el primer elemento del arreglo.
let eliminarElementoInicio = (arreglo) => {
  let primerElemento = arreglo.unshift
}

//• Crear una función flecha que reciba un arreglo, un elemento y opcionalmente un índice de inicio, y devuelva el índice de la primera aparición del elemento o -1 si no lo encuentra.
let num = [10, 20, 30, 20, 40];
let indice = num.indexOf(20);
let indiceDesde2 = num.indexOf(20, 2);
console.log(indice); // 1
console.log(indiceDesde2); // 3

//• Crear una función flecha que reciba un arreglo y devuelva la cantidad de elementos en el arreglo.
const contarElementos = (arr) => arr.length;
let arreglo = [1, 2, 3, 4];
console.log(contarElementos(arreglo)); // 4

//• Crear una función flecha que reciba un arreglo de números y los ordene en orden ascendente usando una función comparadora.
const ordenarAsc = (arr) => [...arr].sort((a, b) => a - b);
let numeros4 = [3, 1, 4, 2];
console.log(ordenarAsc(numeros4)); // [1, 2, 3, 4]

//• Crear una función flecha que reciba un arreglo y un separador, y devuelva una cadena con los elementos del arreglo unidos por el separador.
let palabras = ['Carlos', 'Guevara'];
let texto = palabras.join(" ");
console.log(texto); // 'Carlos Guevara'

//• Crear una función flecha que reciba uno o más arreglos y/o elementos, y devuelva un nuevo arreglo con todos los elementos combinados.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]

//• Crear una función flecha que reciba un arreglo y una función callback, y ejecute la función por cada elemento del arreglo sin devolver un nuevo arreglo.
let forEachElemento = (arr, callback) => {
  arr.forEach(callback);
};
forEachElemento(["rojo", "verde", "azul"], (color) => console.log(color));
// Imprime: rojo, verde, azul

//• Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los resultados de aplicar la función a cada elemento.
let mapElemento = (arr, callback) => {
  return arr.map(callback);
};
console.log(mapElemento([1, 2, 3], (x) => x * 2)); // [2, 4, 6]

//• Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los elementos que cumplen la condición definida por la función.
let filterElemento = (arr, callback) => {
  return arr.filter(callback);
};
console.log(filterElemento([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]

//• Crear una función flecha que reciba un arreglo, una función callback y opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando la función acumuladora.
let reduceElemento = (arr, callback, inicial) => {
  return arr.reduce(callback, inicial);
};
console.log(reduceElemento([1, 2, 3, 4], (acc, val) => acc + val, 0)); // 10