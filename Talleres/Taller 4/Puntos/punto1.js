
function multiplicationTable (Number, Limit) {
    let table = [];
    for (let i = 1; i <= Limit; i++) {
        table.push(Number * i);
    }
    return table;
}

// console.log(multiplicationTable(2, 4));

function showMultiplicationTable(Number, Limit){
    let table = multiplicationTable(Number, Limit);
    for (let i = 0; i < table.length; i++) {
        console.log(`${Number} X ${i + 1} = ${table[i]}`);
    }
}

// showMultiplicationTable(2, 4)

export default showMultiplicationTable;