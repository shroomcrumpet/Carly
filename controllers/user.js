

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


const verif = (request) => {

    return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
};



module.exports = (db) => {


    const newUserForm = (request, response) => {

        response.render('user/newUserForm', request.cookies);

    };


    const newUserPost = (request, response) => {

        db.user.newUser(request.body, (error, queryResult) => {

            if (error) {

                console.error('DB/server error:', error);
                response.sendStatus(500);

            } else {

                if (queryResult.rowCount >= 1) {

                    console.log('User created successfully');

                    response.cookie('loggedIn', sha256(queryResult.rows[0].id + SALT));
                    response.cookie('userId', queryResult.rows[0].id);
                    response.cookie('firstName', request.body.firstname);

                } else {

                    console.log('User could not be created');
                };

                response.redirect('/');

            };
        });
    };


    const editUser = (request, response) => {

        if (verif(request)) {

            console.log ('verif, logged in.');

            db.user.editUser(request.cookies['userId'], (error, queryResult) => {

                response.render('user/editUser', {
                    user: queryResult.rows[0],
                    cookies: request.cookies
                });
            });

        } else {

            console.log ('verif, NOT logged in.');
            response.send('You must be logged in to view this page.');

        };
    };


    const editUserPut = (request, response) => {

        db.user.editUserPut(request.body, (error, queryResult) => {

            if (error) {
                console.error('Error editing user:', error);
                response.sendStatus(500);

            } else if (queryResult.rowCount >= 1) {

                console.log('User edited successfully');

            } else {

                console.log('Unable to edit user');

            };

            response.redirect('/');

        });
    };


    const userLoginForm = (request, response) => {

        response.render('user/userLoginForm', request.cookies);

    };


    const userLoginPost = (request, response) => {

        db.user.login(request.body, (error, queryResult) => {

            if (error) {
                console.error('Error getting user:', error);
                response.sendStatus(500);

            } else if (queryResult.rowCount >= 1) {

                console.log('User found, logging in...');

                if (sha256(request.body.password) === queryResult.rows[0].password) {

                    console.log('Login Successful');

                    response.cookie('loggedIn', sha256(queryResult.rows[0].id + SALT));
                    response.cookie('userId', queryResult.rows[0].id);
                    response.cookie('firstName', queryResult.rows[0].firstname);

                } else {

                    console.log('Password incorrect, please try again');

                };

            } else {

                console.log('User not found, please try again');

            };

            response.redirect('/');
        });
    };


    const userLogout = (request, response) => {

        response.clearCookie('loggedIn');
        response.clearCookie('userId');
        response.clearCookie('firstName');

        console.log('You have been logged out~!');

        response.redirect('/');

    };


    return {

        newUserForm,
        newUserPost,
        editUser,
        editUserPut,
        userLoginForm,
        userLoginPost,
        userLogout

    };
};






