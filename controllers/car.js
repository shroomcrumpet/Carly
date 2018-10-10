

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


const verif = (request) => {

    return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
};




module.exports = (db) => {


    const newCarForm = (request, response) => {

        if (verif(request)) {

            console.log ('verif, logged in.');
            response.render('cars/newCarForm', request.cookies);

        } else {

            console.log ('verif, NOT logged in.');
            response.redirect('/');
        };
    };



    const newCarPost = (request, response) => {

        console.log("request.body: ", request.body);

        db.cars.newCar(request.body, (error, queryResult) => {

            if (error) {

                console.error('DB/server error:', error);
                response.sendStatus(500);

            } else {

                if (queryResult.rowCount >= 1) {

                    console.log('Car added successfully');

                } else {

                    console.log('Car could not be added for user');
                };

                response.redirect('/');
            };
        });
    };


    return {

        newCarForm,
        newCarPost,

    };
};





