const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UsersController');


routes.get('/', UserController.getAll);
routes.post('/adduser', UserController.post);

module.exports = routes;