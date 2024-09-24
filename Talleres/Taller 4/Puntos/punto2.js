function generateSpaces(N) {
    const list = [];
    for (let i = 0; i < N; i++) {
        list.push(' ');
    }
    return list;
}

function generateCaracteres(Number, caracter) {
    const list = [];
    for (let i = 0; i < Number; i++) {
        list.push(caracter);
    }
    for (let i = 0; i < Number - 1; i++) {
        list.push(caracter);
    }
    return list;
}

function printThings(list) {
    for (let i = 0; i < list.length; i++) {
        process.stdout.write(list[i].toString());
    }
}

function mirrorPyramid(M, Caracter) {
    
    for (let i = 1; i <= M; i++) {
        printThings(generateSpaces(M - i));
        printThings(generateCaracteres(i, Caracter));
        console.log();
    }
}

// mirrorPyramid(9, "*");

export default mirrorPyramid;