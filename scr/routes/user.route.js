const express = require('express');
const userController = require('../controllers/user.controller');
const route = express.Router();

route.get('/', userController.getUsers);

module.exports = route;