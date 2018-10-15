

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


const verif = (request) => {

    return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
};



module.exports = (db) => {

    // const getCarsRentals = (request, response) => {

    //     if (verif(request)) {

    //         console.log ('verif, logged in.');

    //         db.dash.getCarsRentals(request.cookies['userId'], (error, finalResult) => {

    //             if (error) {console.log("error: ", error);}

    //             else {

    //                 if (finalResult === null) {

    //                     response.render('dash/noCars', {cookies: request.cookies});

    //                 } else {

    //                     console.log("xfinalresultx: ", finalResult);

    //                     response.render('dash/getCarsRentals', {
    //                         cars: finalResult,
    //                         cookies: request.cookies
    //                     });
    //                 };
    //             };
    //         });

    //     } else {

    //         console.log ('verif, NOT logged in.');
    //         response.send('You must be logged in to view this page.');

    //     };
    // };


    const getCarsRentals = (request, response) => {

        if (verif(request)) {

            console.log ('verif, logged in.');

            db.dash.getCarsRentals(request.cookies['userId'], (error, queryResult) => {

                if (error) {console.log("error: ", error);}

                else {

                    if (queryResult.rowCount < 1) {

                        response.render('dash/noCars', {cookies: request.cookies});

                    } else if (queryResult.rowCount >= 1) {

                        finalResult = [];
                        let counter = 0;

                        for (let i = 0; i < queryResult.rows.length; i++) {

                            db.dash.getCarsRentals2(queryResult.rows[i].id, (error, queryResult2) => {

                                if (error) {console.log("error: ", error);}

                                else {

                                    let rentals = queryResult.rows[i];
                                    rentals["rentals"] = queryResult2.rows;
                                    finalResult.push(rentals);

                                    if (counter === queryResult.rows.length - 1) {

                                        return response.render('dash/getCarsRentals', {
                                            cookies: request.cookies,
                                            cars: finalResult
                                        });
                                    };

                                    counter++;
                                };
                            });
                        };
                    };
                };
            });

        } else {

            console.log ('verif, NOT logged in.');
            response.send('You must be logged in to view this page.');
        };
    };


    return {

        getCarsRentals

    };
};






