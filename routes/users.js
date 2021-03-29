import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser
} from '../controllers/users.js';
import checkUser from '../middlewares/checkUser.js';

const users = express.Router();

/* 
    @route  GET /
    @desc   Get all users
    @access Public
*/
users.get('/', getAllUsers);
/* 
    @route  GET /:id
    @desc   Get single user
    @access Public
*/
users.get('/:id', checkUser, getSingleUser);
/* 
    @route  POST /
    @desc   Create new user
    @access Public
*/
users.post('/', createNewUser);
/* 
    @route  PUT /:id
    @desc   Update user
    @access Public
*/
users.put('/:id', checkUser, updateUser);
/* 
    @route  DEL /:id
    @desc   Delete user
    @access Public
*/
users.delete('/:id', checkUser, deleteUser);

export default users;
