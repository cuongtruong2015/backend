const express = require('express');
const accountController = require('../controllers/accountController');
// const authMiddleware = require('../middlewares/auth.middleware');
const api = express.Router();

api.get("/create-account", accountController.createAccount);
api.get("/get-account", accountController.getAccount);
module.exports = api;