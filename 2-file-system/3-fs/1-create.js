let fs = require('fs');
let path = require('path');

let filepath = path.join(__dirname, 'output.txt');
let fd = fs.openSync(filepath, 'w');
fs.closeSync(fd);
