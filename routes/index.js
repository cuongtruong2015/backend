const accountRouter = require('./router.account.js');
const diaryRouter = require('./router.diary.js');

function route(app) {
    app.use('/', accountRouter);
    app.use('/diary', diaryRouter);
}

module.exports = route;