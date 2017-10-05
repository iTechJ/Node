let fs = require('fs');
let path = require('path');

let oldpath = path.join(__dirname, 'output.txt');
let newpath = path.join(__dirname, 'input.txt');

fs.rename(oldpath, newpath, (err) => {
    if (!err) {
        console.log('File was renamed!');
    }
});