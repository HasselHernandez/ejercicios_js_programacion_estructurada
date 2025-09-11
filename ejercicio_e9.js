// Crear una cola
let cola = [];
// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log (cola);

// Eliminar elementos (dequeue)
console.log(cola.shift()); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift()); // "Tarea 2"
console.log(cola); // ["Tarea 3"]

console.log (cola); //[]
console.log (cola.shift(), "ha sido eliminada"); //undefined ha sido eliminado 
console.log (cola); //[]





// Crear una pila
let pila = [];

// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log (pila); 

// Eliminar elementos (pop)
console.log(pila.pop()); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop()); // "Plato 2"
console.log(pila);



// ARREGLO PARA LA COLA 
let colaTareas = [];

// ACCION PARA AGREGAR AL FINAL 

const agregarAlFinal = (tarea) => {
  colaTareas.push(tarea);
console.log ('Tarea agregada: ${tarea}. cola actual: ${colaTareas}');
};

// ACCION PARA REMOVER EL INICIO 
const removerDelInicio = () => {
  if (colaTareas.length ===0){
    console.log("cola vacía.");
    return null;
  }
  const tareaProcesada = colaTareas.shift();
  console.log('Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}')
  return tareaProcesada;
};

// Simulacion del proceso 
agregarAlFinal("Tarea A");
agregarAlFinal("Tarea B");
agregarAlFinal("Tarea C");
removerDelInicio();
removerDelInicio();
removerDelInicio();




// ARREGLO PARA LA COLA CON LIMITE 

let colaMensajes = [];
const tamanoMaximo = 5;

// Acción para insertar al final (flecha)
const insertarAlFinal = (mensaje) => {
  colaMensajes.push(mensaje);
  if (colaMensajes.length > tamanoMaximo) {
    const mensajeEliminado = colaMensajes.shift();
    console.log('Límite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}');
  } else {
    console.log('Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}');
  }
};

// Acción para extraer del inicio (flecha)
const extraerDelInicio = () => {
  if (colaMensajes.length === 0) {
    console.log("Cola vacía.");
    return null;
  }
  const mensajeExtraido = colaMensajes.shift();
  console.log('Mensaje extraído: ${mensajeExtraido}. Cola actual: ${colaMensajes}');
  return mensajeExtraido;
};

// Simulación del proceso
insertarAlFinal("Mensaje 1"); // Cola: ["Mensaje 1"]
insertarAlFinal("Mensaje 2"); // Cola: ["Mensaje 1", "Mensaje 2"]
insertarAlFinal("Mensaje 3"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3"]
insertarAlFinal("Mensaje 4"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]
insertarAlFinal("Mensaje 5"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]
insertarAlFinal("Mensaje 6"); // Límite excedido, elimina "Mensaje 1", Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]

extraerDelInicio(); // Extrae "Mensaje 2", Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]




// ARREGLO PARA LA COLA
let lineaEspera = [];

// Acción para unir al final (flecha)
const unirAlFinal = (persona) => {
  lineaEspera.push(persona);
  console.log('Persona unida: ${persona}. Línea actual: ${lineaEspera}');
};

// Acción para atender del inicio (flecha)
const atenderDelInicio = () => {
  if (lineaEspera.length === 0) {
    console.log("Línea vacía, nadie para atender.");
    return null;
  }
  const personaAtendida = lineaEspera.shift();
  console.log('Persona atendida: ${personaAtendida}. Línea actual: ${lineaEspera}');
  return personaAtendida;
};

// Simulación del proceso
unirAlFinal("Persona X"); // Línea: ["Persona X"]
unirAlFinal("Persona Y"); // Línea: ["Persona X", "Persona Y"]
unirAlFinal("Persona Z"); // Línea: ["Persona X", "Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona X", Línea: ["Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona Y", Línea: ["Persona Z"]
atenderDelInicio(); // Atiende "Persona Z", Línea: []
atenderDelInicio(); // Línea vacía




// ARREGLO PARA LA PILA 
let historialPaginas = [];

// ACCION PARA AGREGAR PAGINAS (FUNCION FLECHA)
const agregarUltimaPagina = (url) => {
historialPaginas.push(url);
console.log('Pagina visitada: ${url}. Historial: ${historialPaginas}');
};

// ACCION PARA RETROCEDER {FLECHA}
const retrocederPagina = () =>{
if (historialPaginas.length === 0) {
  console.log("Historial vacío.");
  return null;
}
const pagina = historialPaginas.pop();
console.log ['Retrocediendo a: ${pagina}. Historial: ${historialPaginas}'];
return pagina;
;}

// SIMULACION DEL PROCESO 
agregarUltimaPagina("inicio.com");
agregarUltimaPagina("articulos.com");
agregarUltimaPagina("detalles.com");
retrocederPagina();
retrocederPagina();





