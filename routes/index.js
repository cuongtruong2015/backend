const accountRouter = require('./router.account.js');

function route(app) {
    app.use('/', accountRouter);
}

module.exports = route;