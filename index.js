require('dotenv').config();
const express = require('express');
var https = require('https');
const route = require('./routes/index');
// const socket = require('./controllers/socket.index');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const session = require('express-session');
const cookieParse = require('cookie-parser')

app.use(express.json());
app.use(cookieParse())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(session({
    secret: 'strange key',
    resave: true,
    saveUninitialized: true
}));

app.use(cors(corsOptions));
const serverHttp = app.listen(8080);

const server = app.listen(8000);

route(app);

console.log(`Server is running on port ${PORT}`);

// socket(server);
// socket(serverHttp);