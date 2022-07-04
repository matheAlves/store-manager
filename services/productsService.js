const Joi = require('joi');
const productsModel = require('../models/productsModel');
const runSchema = require('./validators');
const throwError = require('../errors/error');

const productsService = {
  async list() {
    const result = await productsModel.list();
    return result;
  },

  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  }).required()),

  async checkExists(id) {
    const exists = await productsModel.exists(id);
    if (!exists) throwError('NotFound', 'Product not found');
  },

  async getById(id) {
    const result = await productsModel.getOne(id);
    return result;
  },
};

module.exports = productsService;