const { Router } = require('express');

const productsController = require('../controllers/productsController');

const productsRoute = Router();

productsRoute.get('/', productsController.listAll);
productsRoute.get('/:id', productsController.byId);
productsRoute.post('/', productsController.add);
productsRoute.put('/:id', productsController.edit);

module.exports = productsRoute;