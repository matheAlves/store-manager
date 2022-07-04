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
};

module.exports = productsController;