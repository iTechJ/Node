const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/json', (req, res) => {
    res.status(200).json({message: 'Hello'});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

