let express = require('express');

let app = express();

app.use((req, res, next) => {
    let err = new Error('Not Found Path');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    if (err.status = 404) {
        res.status(404).json({message: 'Wrong path'});
    } else {
        res.status(500).json({message: 'Internal Server Error'});
    }
});