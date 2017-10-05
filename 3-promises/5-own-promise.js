let externalFunction = () =>
    new Promise((resolve, reject) => {
        resolve(5);
    });

let promiseFunction = () =>
    new Promise((resolve, reject) => {
        externalFunction()
            .then((result) => {
                result++;
                resolve(result);
            })
            .catch((ex) => {
                console.log('Something went wrong!');
                reject(ex);
            });
    });

promiseFunction().then((result) => {
    console.log(result);
});