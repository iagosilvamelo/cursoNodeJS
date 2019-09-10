const express = require('express');
const routes  = express.Router();


routes.get('/', (req, res) => {
	res.send('Welcome to the NodeAPI.');
});


const ProductController = require('./Controllers/ProductController');

routes.get('/Product', ProductController.index);
routes.get('/Product/All', ProductController.all);
routes.get('/Product/:id', ProductController.show);

routes.post('/Product', ProductController.store);
routes.put('/Product/:id', ProductController.update);
routes.delete('/Product/:id', ProductController.destroy);

module.exports = routes;