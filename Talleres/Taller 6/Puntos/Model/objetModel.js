const crearPersona = (index, nombre, edad, ciudad) => {
    return {
        indice: index,
        nombre: nombre,
        edad: parseInt(edad, 10), // Convierte la edad a número
        ciudad: ciudad,
    };
};

const modifyAtribute = (persona, atribute, value) => {
    persona[atribute] = value;

    return persona
}

const addAtribute = (persona, atributo, valor) => {
    persona[atributo] = valor;
    
    return persona;
};

const deleteAtribute = (persona, atributo) => {
    delete persona[atributo];

    return persona;
}

export { crearPersona, addAtribute, deleteAtribute, modifyAtribute };
