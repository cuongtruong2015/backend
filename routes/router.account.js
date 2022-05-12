const express = require('express');
const accountController = require('../controllers/accountController');
// const authMiddleware = require('../middlewares/auth.middleware');
const api = express.Router();

api.get("/", accountController.login);
module.exports = api;