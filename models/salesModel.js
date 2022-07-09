const db = require('./connection');

const salesModel = {
  async addToSales() {
    const sql = 'INSERT INTO StoreManager.sales () VALUES ()';
    const [{ insertId }] = await db.query(sql);
    return insertId;
  },

  async addToSalesProducts(saleId, prodId, quantity) {
    const sql = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?) `;

    await db.query(sql, [saleId, prodId, quantity]);
  },
};

module.exports = salesModel;