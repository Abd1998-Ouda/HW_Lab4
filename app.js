const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/greeting/:name', (req, res) => {
    res.send(JSON.parse(`{ "message": "Hello ${req.params.name}" }`));
});

app.post('/data', (req, res) => {
    console.log(req.body);
    req.body['name'] = 'Abdullah Ouda';
    res.send(req.body);
});

app.listen(port);
