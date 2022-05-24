var MongoPool = require("../models/connection");

async function createAccount(req, res) {
    MongoPool.getInstance(async function (client) {
        // Query your MongoDB database.
        // const data = await client.db('Account').collection('accounts').find().toArray().then();

        const Account = {
            Name: 'Nguyen Van A',
            CreatedDate: new Date(),
        }
        await client.db('myapp').collection('account').insertOne(Account, function (err, rs) {
            if (err) throw err;
            console.log("1 document inserted");
            res.send(rs);
        }
        )
        // res.send(data)
    });
}


async function getAccount(req, res) {
    MongoPool.getInstance(async function (client) {
        // Query your MongoDB database.
        // const data = await client.db('Account').collection('accounts').find().toArray().then();
        await client.db('myapp').collection('account').find().toArray().then(data =>
            res.send(data)
        )
    });
}
module.exports = {
    createAccount,
    getAccount
}