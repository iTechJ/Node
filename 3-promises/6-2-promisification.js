function externalFunction (callback) {
    callback(null, 5);
}

let path = require('path');
let inputPath = path.join(__dirname, 'input.txt');
let promisify = require("promisify-node");
let fs = promisify("fs");

fs.readFile(inputPath)
    .then((contents) => {
        console.log(contents);
    });

let promiseFunction = promisify(externalFunction);
promiseFunction().then((result) => {
    console.log(result);
});

