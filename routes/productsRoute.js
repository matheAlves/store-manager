const { Router } = require('express');

const productsController = require('../controllers/productsController');

const productsRoute = Router();

productsRoute.get('/', productsController.listAll);
productsRoute.get('/:id', productsController.byId);
productsRoute.post('/', productsController.add);
module.exports = productsRoute;