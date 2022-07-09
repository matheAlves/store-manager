const salesService = require('../services/salesService');

const salesController = {
    /** @type {import('express').RequestHandler} */
  async add(req, res) {
    // valida o corpo da req e retorna as vendas
    const sales = await Promise.all(
      req.body.map((s) => salesService.validateSales(s)),
    );
    
    // verifica existencia do produto por id
    await Promise.all(
      sales.map((s) => salesService.checkExists(s.productId)),
    );
    
    // adiciona entrada na tabela sales e retorna o id da venda
    const id = await salesService.addToSales();
    
    await Promise.all(
      sales.map((s) => salesService.addToSalesProducts(id, s)),
    );

    const result = {
      id, itemsSold: sales,
    };

    res.status(201).json(result);
  },
};

module.exports = salesController;