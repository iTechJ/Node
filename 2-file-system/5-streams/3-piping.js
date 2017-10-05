let fs = require('fs');
let path = require('path');
let zlib = require('zlib');

let inputPath = path.join(__dirname, 'input.txt');
let outputPath = path.join(__dirname, 'output.txt');

const readable = fs.createReadStream(inputPath);
const writable = fs.createWriteStream(outputPath);
readable.pipe(writable);
