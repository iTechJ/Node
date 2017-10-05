let externalFunction = (callback) =>
    callback(null, 5);

let promiseFunction = () =>
    new Promise((resolve, reject) => {
        externalFunction((err, result) => {
            if (!err) {
                result++;
                resolve(result);
            } else {
                console.log('Something went wrong!');
                reject(err);
            }
        });
    });

promiseFunction().then((result) => {
    console.log(result);
});

