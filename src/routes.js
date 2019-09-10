const express = require('express');
const routes  = express.Router();


routes.get('/', (req, res) => {
	res.send('Helo Iago');
});


const ProductController = require('./Controllers/ProductController');

routes.get('/Product', ProductController.index);

module.exports = routes;