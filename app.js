const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

//Servir contenido estatico
app.use(express.static('public'))

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)