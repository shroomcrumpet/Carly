

module.exports = (app, db) => {

    const homeController = require('./controllers/home')(db);
    const userController = require('./controllers/user')(db);
    const carController = require('./controllers/car')(db);


    // =========================================
    // Homepage
    // =========================================

    app.get('/', homeController.homepage);


    // =========================================
    // Users
    // =========================================

    app.get('/users/new', userController.newUserForm);
    app.post('/users', userController.newUserPost);

    app.get('/users/login', userController.userLoginForm);
    app.post('/users/login', userController.userLoginPost);
    app.delete('/users/logout', userController.userLogout);


    // =========================================
    // Cars
    // =========================================

    app.get('/cars/new', carController.newCarForm);
    app.post('/cars', carController.newCarPost);

};