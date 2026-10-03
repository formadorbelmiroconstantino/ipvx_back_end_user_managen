const express = require('express');
const userController = require('../controllers/user.controller');
const route = express.Router();

route.get('/', userController.getUsers);// Caminho para chegar ao controller por meio da /
route.post('/', userController.createUser);// Caminho para chegar ao controller por meio da /
module.exports = route;