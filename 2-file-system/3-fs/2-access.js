let fs = require('fs');
let path = require('path');

let filepath = path.join(__dirname, 'output.txt');
let missingFilepath = path.join(__dirname, 'nofile.txt');

fs.access(filepath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('For existing file:');
    console.log(err);
});

fs.access(missingFilepath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('For missing file:');
    console.log(err);
});
