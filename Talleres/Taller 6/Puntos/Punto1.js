import readline from "readline-sync";
import { crearPersona } from "./Model/objetModel.js";
import { ReturnPersonas } from "./Punto2.js";

let personas = []
personas = ReturnPersonas()


// Función para crear un objeto literal
const crearObjeto = (index) => {
  const name = readline("Ingrese el nombre: ");
  const age = readline("Ingrese la edad: ");
  const city = readline("Ingrese la ciudad: ");

  const persona = crearPersona(index, name, age, city);

  // Almacena el objeto en el array
  personas[index] = persona; // Almacenamos en el índice correspondiente
}

const Punto1 = () => {
  const cantidad = readline("¿Cuántos objetos desea crear? ");
  
  const index = personas.length; // Obtén el índice inicial basado en la longitud actual del array
  for (let i = 0; i < cantidad; i++) {
    console.log("Objeto " + (index + i)); // Muestra el índice correcto para cada objeto
    crearObjeto(index + i); // Llama a la función para crear el objeto
  }

  console.log("Objetos creados:", personas);
};

export { Punto1, personas }; // Exporta el array correctamente
