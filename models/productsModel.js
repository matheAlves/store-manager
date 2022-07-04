const db = require('./connection');

const productsModel = {
  async list() {
    const sql = 'SELECT * FROM StoreManager.products';
    const [items] = await db.query(sql);
    return items;
  },

    async exists(id) {
    const sql = 'SELECT 1 FROM StoreManager.products WHERE id = ?';
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },
    
  async getOne(id) {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[result]] = await db.query(sql, [id]);
    return result;
  },
};

module.exports = productsModel;