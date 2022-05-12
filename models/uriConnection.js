const nameDTB = 'mongodb-test'
const pwd = '123456Aa'
const uriConnect = 'mongodb-test.hthqk.mongodb.net'
const nameColecttion = 'Account' //like table in mysql
const mongoose = require('mongoose');

const uriAccount = `mongodb+srv://${nameDTB}:${pwd}@${uriConnect}/${nameColecttion}?retryWrites=true&w=majority`;
