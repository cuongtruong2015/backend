const express = require('express');
const diaryController = require('../controllers/diaryController');
// const authMiddleware = require('../middlewares/auth.middleware');
const api = express.Router();

api.get("/get-diary", diaryController.getDiary);
module.exports = api;