const accountRouter = require('./router.account.js');
const diaryRouter = require('./router.diary.js');

function route(app) {
    app.use('/account', accountRouter);
    app.use('/test', (req, res) => res.send('Hello World'));
    // app.use('/diary', diaryRouter);
}

module.exports = route;