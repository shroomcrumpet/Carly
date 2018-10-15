

module.exports = (dbPoolInstance) => {


    // const getCarsRentals = (userId, callback) => {

    //     // const queryString = `
    //     //     SELECT users.id AS ownerId, cars.id AS carId, cars.make, cars.model, cars.year, cars.passengers, cars.transmission, cars.fuel, cars.photo, cars.address, cars.postcode, cars.avail_start, cars.avail_end, cars.price, cars.comments, rental.rental_start, rental.rental_end, renters.id AS renterId, renters.firstname AS renterFirstName, renters.lastname AS renterLastName, renters.telephone AS renterTelephone

    //     //     FROM users
    //     //     INNER JOIN cars
    //     //     ON (users.id = cars.owner_id)
    //     //     INNER JOIN rental
    //     //     ON (cars.id = rental.car_id)
    //     //     INNER JOIN users AS renters
    //     //     ON (rental.renter_id = renters.id)

    //     //     WHERE users.id = ${userId}
    //     //     ORDER BY cars.id
    //     //     `;

    //     const queryStringCars =`SELECT * FROM cars WHERE owner_id = ${userId}`;
    //     let queryStringRentals;
    //     let finalResult = [];

    //     dbPoolInstance.query(queryStringCars, (error, queryResult) => {

    //         if (queryResult.rows.length === 0) {    // no cars owned

    //             return callback (error, null);

    //         } else {

    //             for (let i = 0; i < queryResult.rows.length; i++) {

    //                 queryStringRentals = `
    //                     SELECT rental.id, rental.renter_id, rental.rental_start, rental.rental_end, users.firstname, users.lastname, users.telephone
    //                     FROM rental
    //                     INNER JOIN users
    //                     ON (rental.renter_id = users.id)
    //                     WHERE rental.car_id = ${queryResult.rows[i].id}
    //                     `;

    //                 dbPoolInstance.query(queryStringRentals, (error, queryResult2) => {

    //                     rentals = queryResult.rows[i];

    //                     rentals["rentals"] = queryResult2.rows;
    //                     finalResult.push(rentals);

    //                     console.log("finalresult1: ", finalResult);

    //                     if (i === queryResult.rows.length - 1) {    // finished iterating through rentals

    //                         console.log("finalresult2: ", finalResult);

    //                         callback(error, finalResult);
    //                     };
    //                 });
    //             };
    //         };
    //     });
    // };

    const getCarsRentals = (userId, callback) => {

        const queryString =`SELECT * FROM cars WHERE owner_id = ${userId}`;

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };

    const getCarsRentals2 = (carId, callback) => {

        const queryString = `
            SELECT rental.id, rental.renter_id, rental.rental_start, rental.rental_end, users.firstname, users.lastname, users.telephone
            FROM rental
            INNER JOIN users
            ON (rental.renter_id = users.id)
            WHERE rental.car_id = ${carId}
            `;

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    return {

        getCarsRentals: getCarsRentals,
        getCarsRentals2: getCarsRentals2

    };
};




