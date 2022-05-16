var MongoPool = require("../models/connection");

async function login(req, res) {
    MongoPool.getInstance(async function (client) {
        // Query your MongoDB database.
        // const data = await client.db('Account').collection('accounts').find().toArray().then();

        const Diary = {
            date: new Date(),
            content: 'this is an important date',
            icon: '🥺🥺'
        }
        await client.db('Diary').collection('Diary').insertOne(Diary, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        }
        )
        // res.send(data)
    });
}
module.exports = {
    login
}