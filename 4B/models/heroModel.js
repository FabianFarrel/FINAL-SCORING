const pool = require('../db');

const getAllHeroes = async () => {
  const result = await pool.query('SELECT heroes_tb.*, type_tb.name AS type_name FROM heroes_tb JOIN type_tb ON heroes_tb.type_id = type_tb.id');
  return result.rows;
};

const getHeroById = async (id) => {
  const result = await pool.query('SELECT heroes_tb.*, type_tb.name AS type_name FROM heroes_tb JOIN type_tb ON heroes_tb.type_id = type_tb.id WHERE heroes_tb.id = $1', [id]);
  return result.rows[0];
};

const createHero = async (name, type_id, photo, user_id) => {
  try {
    const result = await pool.query(
      'INSERT INTO heroes_tb (name, type_id, photo, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, type_id, photo, user_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating hero:', error);
    throw error;
  }
};


const updateHero = async (id, name, type_id, photo) => {
  const result = await pool.query('UPDATE heroes_tb SET name = $1, type_id = $2, photo = $3 WHERE id = $4 RETURNING *', [name, type_id, photo, id]);
  return result.rows[0];
};

const deleteHero = async (id) => {
  await pool.query('DELETE FROM heroes_tb WHERE id = $1', [id]);
};

module.exports = {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
};
