let express = require('express');
let app = express();

// Middleware
app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');
    next();
});

app.post('/about', (req, res) => {
    res.send('POST request to the about');
});

// Regex
app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
});

// Everyting that has 'test' in the route name
app.get(/test/, (req, res) => {
    res.send('/test/');
});
// Request URL: http://localhost:3000/users/34/books/8989
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});


