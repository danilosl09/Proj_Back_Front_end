const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UsersController');


routes.get('/', UserController.getAll);

module.exports = routes;