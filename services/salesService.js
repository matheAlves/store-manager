const Joi = require('joi');
const productsModel = require('../models/productsModel');
const runSchema = require('./validators');
const throwError = require('../errors/error');
const salesModel = require('../models/salesModel');

const salesService = {
  validateSales: runSchema(Joi.object({
    productId: Joi.required(),
    quantity: Joi.number().min(1).required(),
  })),

  async checkExists(id) {
    const list = await productsModel.list();
    const exists = list.some((p) => p.id === id);
    if (!exists) {
      throwError('NotFound', 'Product not found');
    }
  },

  async addToSales() {
    const id = await salesModel.addToSales();
    return id;
  },

  async addToSalesProducts(id, sale) {
    await salesModel.addToSalesProducts(id, sale.productId, sale.quantity);
  },
};

module.exports = salesService;