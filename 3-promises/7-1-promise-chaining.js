
let functionA = (value) =>
    new Promise(
        (resolve) => resolve(value + 2)
    );

let functionB = (value) =>
    new Promise(
        (resolve) => resolve(value * 3)
    );

let functionC = (value) =>
    new Promise(
        (resolve) => resolve(value - 4)
    );

functionA(5)
    .then(functionB)
    .then(functionC)
    .then(
        (result) => {
            console.log(result);
        }
    );

