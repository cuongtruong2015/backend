
const { uriAccount } = require('../models/uriConnection');
const mongoose = require('mongoose');

async function login(req, res) {
    await mongoose.connect(uriAccount, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((rs) => {
            console.log('Connected successfully to server');
        })
        .catch((error) => {
            console.log('Error connecting to database');
        });
    const accountSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: true,
        }
    });
    const accountModel = mongoose.model('Account', accountSchema)

    const account = new accountModel({
        _id: mongoose.Types.ObjectId(),
        title: 'data1',
    });
    account
        .save()
        .then((newAccount) => {
            console.log('New course created: ', newAccount);
            return res.status(201).json({
                success: true,
                message: 'New newAccount created successfully',
                Course: newAccount,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}
module.exports = {
    login
}