
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

let functionC = () =>
    new Promise(
        (resolve) => {
            console.log('Function C');
            resolve(4)
        }
    );

let promises = [
    functionA(), functionB(), functionC()
];

Promise.all(promises).then((result) => {
    console.log(result);
});