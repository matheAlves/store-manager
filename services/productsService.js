const Joi = require('joi');
const productsModel = require('../models/productsModel');
const runSchema = require('./validators');
const throwError = require('../errors/error');

const productsService = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  }).required()),

  validateBodyAdd: runSchema(Joi.object({
    name: Joi.string().required().min(5),
  })),

  async list() {
    const result = await productsModel.list();
    return result;
  },  

  async checkExists(id) {
    const exists = await productsModel.exists(id);
    if (!exists) throwError('NotFound', 'Product not found');
  },

  async getById(id) {
    const result = await productsModel.getOne(id);
    return result;
  },

  async add(name) {
    const result = await productsModel.add(name);
    return result;
  },
  
};

module.exports = productsService;