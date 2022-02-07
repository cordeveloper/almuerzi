const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Plugins
app.use(bodyParser.json());
app.use(cors());

// Conexión BBDD
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('*', (req,response) => {
    res.send('Chanchito feliz');
})

module.exports = app;

