import pool from '../db/pg.js';

export const getAllUsers = async (req, res) => {
  res.send('GET /');
};

export const getSingleUser = async (req, res) => {
  res.send('GET /:id');
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
