let fs = require('fs');
let path = require('path');

let filepath = path.join(__dirname, 'input.txt');

fs.unlink(filepath, (err) => {
    if (!err) {
        console.log('File was removed!');
    }
});

