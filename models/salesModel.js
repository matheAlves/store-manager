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

  async list() {
    const sql = `
    SELECT 
    id AS saleId, 
    date, 
    product_id AS productId, 
    quantity 
    FROM StoreManager.sales
    INNER JOIN sales_products 
    ON sales.id = sales_products.sale_id
    ORDER BY sales.id, sales_products.product_id;`;
    const [items] = await db.query(sql);
    return items;
  },
};

module.exports = salesModel;