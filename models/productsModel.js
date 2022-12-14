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

  async add(name) {
    const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';

    const [{ insertId: id }] = await db.query(sql, name);
    return { id, name };
  },

  async edit(id, name) {
    const sql = `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`;

    await db.query(sql, [name, id]);
  },

  async delete(id) {
    const sql = `DELETE FROM StoreManager.products
    WHERE id = ?`;

    await db.query(sql, [id]);
  },
};

module.exports = productsModel;