const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
	'mongodb://localhost:27017/nodeapi', 
	{ 
		useUnifiedTopology: true, 
		useNewUrlParser: true 
	}
);
requireDir('./src/Models');


app.use('/api', require('./src/routes'));
app.listen(3001);