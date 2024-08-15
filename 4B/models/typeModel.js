const pool = require('../db');

const getAllTypes = async () => {
  const result = await pool.query('SELECT * FROM type_tb');
  return result.rows;
};

const createType = async (name) => {
  const result = await pool.query('INSERT INTO type_tb (name) VALUES ($1) RETURNING *', [name]);
  return result.rows[0];
};

const updateType = async (id, name) => {
  const result = await pool.query('UPDATE type_tb SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return result.rows[0];
};

const deleteType = async (id) => {
  await pool.query('DELETE FROM type_tb WHERE id = $1', [id]);
};

module.exports = {
  getAllTypes,
  createType,
  updateType,
  deleteType,
};
