var MongoPool = require("../models/connection");

async function getDiary(req, res) {
    MongoPool.getInstance(async function (client) {

        const data = await client.db('Diary').collection('Diary').find().toArray().then();
        const url = `mongodb+srv://${process.env.DTB_Account}:${process.env.PWD}@${process.env.URI_CONNECTION}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        res.send(data)
    });
}
module.exports = {
    getDiary
}