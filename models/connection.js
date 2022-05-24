const { MongoClient } = require('mongodb');
// var assert = require('assert');

// const nameDTB = 'mongodb-test'
// const pwd = '123456Aa'
// // const uriConnect = 'mongodb-assert.hthqk.mongodb.net'
// const uriConnect = 'mongodb-test.hthqk.mongodb.net'
// const nameDB = 'Account'
// const url = `mongodb+srv://${process.env.DTB_Account}:${process.env.PASS}@${process.env.URI_CONNECTION}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// const url = `mongodb://${process.env.DTB_Account}:${process.env.PASS}@${process.env.DB_Domain}:${process.env.DB_PORT}`;
const url = `${process.env.DB_CONNECT_URI}`
console.log(url)
var option = {
};
function MongoPool() { }
var p_db;

function initPool(cb) {
    MongoClient.connect(url, option, function (err, db) {
        if (err) throw err;
        p_db = db;
        if (cb && typeof (cb) == 'function')
            cb(p_db);
    });
    return MongoPool;
}

MongoPool.initPool = initPool;
function getInstance(cb) {
    if (!p_db) {
        initPool(cb)
    }
    else {
        if (cb && typeof (cb) == 'function')
            cb(p_db);
    }
}
MongoPool.getInstance = getInstance;

module.exports = MongoPool;