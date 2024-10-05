
const isEMail = (cadena) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(cadena);
}

// Ejemplo de uso
// console.log(esCorreoElectronico("ejemplo@dominio.com")); // true
// console.log(esCorreoElectronico("no_es_un_correo")); // false

export default isEMail;