

module.exports = (app, db) => {

    const homeController = require('./controllers/home')(db);
    const userController = require('./controllers/user')(db);


    // =========================================
    // Homepage
    // =========================================

    app.get('/', homeController.homepage);


    // =========================================
    // Users
    // =========================================

    app.get('/users/new', userController.newUserForm);
    app.post('/users', userController.newUserPost);


    // =========================================
    // xxx
    // =========================================

    // app.post('/login', usersController.login);
    // app.delete('/logout', usersController.logout);

    // app.get('/test', usersController.test);
    // app.get('/foobar', usersController.foobar);

};