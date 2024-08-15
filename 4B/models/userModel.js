const pool = require('../db');
const bcrypt = require('bcrypt');

const registerUser = async (email, username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users_tb (email, username, password) VALUES ($1, $2, $3) RETURNING *',
    [email, username, hashedPassword]
  );
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users_tb WHERE username = $1', [username]);
  return result.rows[0];
};

module.exports = {
  registerUser,
  findUserByUsername,
};
