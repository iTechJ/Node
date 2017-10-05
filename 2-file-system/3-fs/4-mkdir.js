let fs = require('fs');
let path = require('path');

let dirPath = path.join(__dirname, 'newDir');

fs.mkdir(dirPath, (err) => {
    if (!err) {
        console.log('New directory was created!');
    }
});