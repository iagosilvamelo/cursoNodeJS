const express = require('express');
const routes  = express.Router();


routes.get('/', (req, res) => {
	res.send('Helo Iago');
});


const ProductController = require('./Controllers/ProductController');

routes.get('/Product', ProductController.index);
routes.get('/Product/:id', ProductController.show);
routes.post('/Product', ProductController.store);
routes.put('/Product/:id', ProductController.update);
routes.delete('/Product/:id', ProductController.destroy);

module.exports = routes;