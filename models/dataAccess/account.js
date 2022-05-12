const mongoose = require('mongoose');

mongoose.connect(uriAccount, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((rs) => {
        console.log('Connected successfully to server');
    })
    .catch((error) => {
        console.log('Error connecting to database');
    });

module.exports = {
    mongoose
}