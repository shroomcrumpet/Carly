

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


const verif = (request) => {

    return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
};



module.exports = (upload, db) => {


    const showCars = (request, response) => {

        db.cars.showCars((error, queryResult) => {

            response.render('cars/showCars', {
                cars: queryResult.rows,
                cookies: request.cookies
            });
        });
    };


    const getCar = (request, response) => {

        db.cars.getCar(request.params.id, (errorCar, errorRental, queryResultCar, queryResultRental) => {

            response.render('cars/getCar', {
                car: queryResultCar.rows,
                rental: queryResultRental.rows,
                cookies: request.cookies
            });
        });
    };


    const carRentalPost = (request, response) => {

        const rentalStart = request.body.rentalDates.split(" to ")[0];
        const rentalEnd = request.body.rentalDates.split(" to ")[1];

        db.cars.carRentalPost(request.cookies.userId, request.params.id, rentalStart, rentalEnd, (error, queryResult) => {

            response.redirect('/');

        });
    };


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

        console.log("request.file: ", request.file);
        console.log("request.body: ", request.body);

        db.cars.newCar(request.body, request.file, (error, queryResult) => {

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

        showCars,
        getCar,
        carRentalPost,
        newCarForm,
        newCarPost

    };
};






