let Promise = require('Promise');

let childFunction = () =>
    Promise.resolve(1);

let mainFunction = () =>
    childFunction()
        .then((result) => {
            result++;
            return result;
        });

mainFunction()
    .then((result) => {
        console.log(result);
    });

