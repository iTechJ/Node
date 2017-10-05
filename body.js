let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
let express = require('express');

app.use(multipartMiddleware);


let app = express();

app.use(express.static('public'));

app.use(express.static('files'));

app.use('/static', express.static('public'));