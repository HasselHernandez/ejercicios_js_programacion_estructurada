
// const = para variables 
// function = para funciones 

// Función anónima asignada a una variable
  const sumar = function(a, b) {
    return a + b;
      };
        console.log(sumar(3, 4));


// Función con asignación de nombre
  function sumar (a, b) {
    return a + b;
      };
        console.log(sumar(3, 4));


// Sintaxis normal
  const multiplicar = function(a, b) {
    return a * b;
      };


// Función flecha
  const multiplicarFlecha = (a, b) => a * b;
    console.log(multiplicarFlecha(3, 4)); // 12

try {
  // Aquí va el código que podría fallar
} catch (error) {
  // Aquí se maneja el error si ocurre
}


try {
  console.log("Intentando dividir...");
    let resultado = 10 / 0; // No error real, da Infinity
      console.log(resultado);
  } catch (error) {
      console.log("Error atrapado:", error.message);
  } finally {
      console.log("Fin del bloque");
  }


function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0



const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"


const persona = {
  nombre: "Ana",
  hobbies: ["leer", "pintar", "correr"]
};
console.log(persona.hobbies[1]); // "pintar"


const personas = [
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 25 }
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25


const usuario = { nombre: "Carlos", edad: 28 };
console.log(usuario.nombre); // "Carlos"
console.log(usuario.edad); // 28


const usuarios = { nombre: "Ana", "correo ": "ana@mail.com" };
console.log(usuario["nombre"]); // "Ana"
console.log(usuario["correo-personal"]); // "ana@mail.com"







































































































































































