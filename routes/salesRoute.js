const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/', salesController.add);

salesRoute.get('/', salesController.list);

salesRoute.get('/:id', salesController.byId);

module.exports = salesRoute;
