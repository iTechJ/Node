let fs = require('fs');

fs.stat(__filename, (err, stat) => {
    console.log(stat);
    console.log('==================================');
});

fs.stat(__dirname, (err, stat) => {
    console.log(stat);
    console.log('==================================');
});