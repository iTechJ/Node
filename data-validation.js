let express = require('express');

let app = express();

let TokenSchema = {
    type: 'object',
    properties: {
        token: {
            type: 'string',
            format: 'alphanumeric',
            minLength: 10,
            maxLength: 10,
            required: true
        }
    }
};

let StreetSchema = {
    type: 'object',
    properties: {
        number: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            required: true,
            enum: ['Street', 'Avenue', 'Boulevard']
        }
    }
};

let validate = require('express-jsonschema').validate;

app.post('/street/', validate({body: StreetSchema, query: TokenSchema}), (req, res) => {
    // application code
});

