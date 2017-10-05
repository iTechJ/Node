let fs = require('fs');
let path = require('path');

let filepath = path.join(__dirname, 'output.txt');

fs.appendFile(filepath, 'New text', (err) => {
    if (!err) {
        console.log('File was updated!');
    }
});