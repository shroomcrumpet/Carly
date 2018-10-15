

module.exports = (app, upload, db) => {

    const homeController = require('./controllers/home')(db);
    const userController = require('./controllers/user')(db);
    const carController = require('./controllers/car')(upload, db);
    const dashController = require('./controllers/dash')(db);


    // =========================================
    // Homepage
    // =========================================

    app.get('/', homeController.homepage);


    // =========================================
    // Users
    // =========================================

    app.get('/users/new', userController.newUserForm);
    app.post('/users', userController.newUserPost);

    app.get('/user/edit', userController.editUser);
    app.put('/user', userController.editUserPut);

    app.get('/users/login', userController.userLoginForm);
    app.post('/users/login', userController.userLoginPost);
    app.delete('/users/logout', userController.userLogout);


    // =========================================
    // Cars
    // =========================================

    app.get('/cars/new', carController.newCarForm);
    app.post('/cars', upload.single('photo'), carController.newCarPost);

    app.get('/cars/:id', carController.getCar);
    app.post('/cars/:id', carController.carRentalPost);

    app.get('/cars', carController.showCars);


    // =========================================
    // Rental / Dashboards
    // =========================================

    app.get('/user/cars', dashController.getCarsRentals);

};











