

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


// const verif = (request) => {

//     return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
// };




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


    // const test = (request, response) => {

    //     response.render('user/test');

    // };


    // const foobar = (request, response) => {

    //     db.user.foobar('user4', (error, result)=> {

    //             console.log("Callback", result);

    //             if (error){
    //                 console.log('error!', error);
    //                 response.status(500).send('Didnt work~!');

    //             } else if ( result.rows[0] === null) {

    //                 response.status(403).send('Couldnt find user~!');

    //             } else {

    //                 response.json(result.rows[0]);

    //             };
    //     });
    // };


    return {

        newUserForm,
        newUserPost,
        userLoginForm,
        userLoginPost,
        userLogout

        // test,
        // foobar

    };
};






