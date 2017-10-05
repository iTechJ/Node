let express = require('express');
let app = express();

let cb0 = (req, res, next) => {
    console.log('CB0');
    next();
};

let cb1 = (req, res, next) => {
    console.log('CB1');
    next();
};

let cb2 = (req, res) => {
    res.send('Hello from CB2!');
};

app.get('/example1', [cb0, cb1, cb2]);

app.get('/example2', (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
}, (req, res) => {
    res.send('Hello from CB!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
