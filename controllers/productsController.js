const { validateBodyAdd } = require('../services/productsService');
const productsService = require('../services/productsService');

const productsController = {
  async listAll(_req, res) {
    const result = await productsService.list();
    res.status(200).json(result);
  },

  async byId(req, res) {
    const { id } = await productsService.validateParamsId(req.params);

    await productsService.checkExists(id);

    const result = await productsService.getById(id);

    res.status(200).json(result);
  },

  async add(req, res) {
    const { name } = await validateBodyAdd(req.body);
    const result = await productsService.add(name);
    res.status(201).json(result);
  },
};

module.exports = productsController;