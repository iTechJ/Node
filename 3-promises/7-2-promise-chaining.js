
let functionA = (value) =>
    new Promise(
        (resolve) => resolve(value + 2)
    );

let functionB1 = (value) =>
    new Promise(
        (resolve) => resolve(value / 2)
    );

let functionB2 = (value) =>
    new Promise(
        (resolve) => resolve(value * 2)
    );

let flag = false;
let promise = functionA(5);

if (flag) {
    promise = promise.then(functionB1);
} else {
    promise = promise.then(functionB2);
}

promise
    .then(
        (result) => {
            console.log(result);
        }
    );