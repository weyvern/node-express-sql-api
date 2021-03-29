import pool from '../db/pg.js';

export const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users;');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getSingleUser = async (req, res) => {
  res.send(req.user);
};

export const createNewUser = async (req, res) => {
  res.send('POST /');
};

export const updateUser = async (req, res) => {
  res.send('PUT /:id');
};

export const deleteUser = async (req, res) => {
  res.send('DEL /:id');
};
