import readline from './Helpers/readline.js';
import { personas } from "./Punto1.js";
import { addAtribute, deleteAtribute, modifyAtribute } from "./Model/objetModel.js";

const ModifieAtribute = () => {
    console.log(personas);
    const indexObjet = parseInt(readline("Índice del objeto: "));
    
    if (indexObjet < 0 || indexObjet >= personas.length) {
        console.log("Índice fuera de rango");
        return;
    }

    const nameAtribute = readline("Ingrese el nombre del atributo: ");   
    const atribute = readline("Ingrese el valor del atributo: ");   

    personas[indexObjet] = modifyAtribute(personas[indexObjet], nameAtribute, atribute);

    console.log(personas[indexObjet]);
}

const AddAtribute = () => {
    console.log(personas);
    const indexObjet = readline("Índice del objeto: ");
    
    if (indexObjet < 0 || indexObjet >= personas.length) {
        console.log("Índice fuera de rango");
        return;
    }

    const nameAtribute = readline("Ingrese el nombre del atributo: ");   
    const atribute = readline("Ingrese el valor del atributo: ");   

    personas[indexObjet] = addAtribute(personas[indexObjet], nameAtribute, atribute);

    console.log(personas[indexObjet]);
}

const DeleteAtribute = () => {
    console.log(personas);
    const indexObjet = parseInt(readline("Índice del objeto: "));
    
    if (indexObjet < 0 || indexObjet >= personas.length) {
        console.log("Índice fuera de rango");
        return;
    }

    const atribute = readline("Ingrese el nombre del atributo a eliminar: ");   

    personas[indexObjet] = deleteAtribute(personas[indexObjet], atribute);
    console.log("Atributo eliminado. Objeto actualizado:", personas[indexObjet]);
}

const mostrarMenu = () => {
    console.log('Seleccione una opción:');
    console.log('1. Modificar atributo');
    console.log('2. Agregar atributo');
    console.log('3. Eliminar atributo');
    console.log('4. Volver al menu anterior');
}

const Punto2 = () => {
    let opcion = 0;
    while (opcion !== 4) {
        mostrarMenu();
        opcion = parseInt(readline('Ingrese su opción: '));
        switch (opcion) {
            case 1:
                ModifieAtribute();
                break;
            case 2:
                AddAtribute();
                break;
            case 3:
                DeleteAtribute();
                break;
            case 4:
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida, por favor intente de nuevo.');
        }
    }
}

const ReturnPersonas = () => {
    return personas;
}

export { Punto2, ReturnPersonas };
