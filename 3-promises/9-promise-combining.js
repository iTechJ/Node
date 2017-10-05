
let functionA = () =>
    new Promise(
        (resolve) => {
            console.log('Function A');
            resolve(2);
        }
    );

let functionB = () =>
    new Promise(
        (resolve) => {
            setTimeout(() => {
                console.log('Function B');
                resolve(3)
            }, 2000);
        }
    );

let functionC = (value) =>
    new Promise(
        (resolve) => {
            console.log('Function C');
            resolve(value + 4)
        }
    );

let promises = [
    functionA().then(functionC), functionB()
];

Promise.all(promises).then((result) => {
    console.log(result);
});

