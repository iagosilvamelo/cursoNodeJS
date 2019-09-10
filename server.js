const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

// Router
app.get('/', (req, res) => {
	res.send('Helo Iago');
});

// Porta para acesso do app
app.listen(3001);