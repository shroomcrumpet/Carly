

module.exports = (dbPoolInstance) => {


    const getMyCarsRentals = (userId, callback) => {

        const queryStringCars =`SELECT * FROM cars WHERE owner_id = ${userId}`;
        let queryStringRentals;
        let finalResult = [];

        dbPoolInstance.query(queryStringCars, (error, queryResult) => {

            if (queryResult.rows.length === 0) {    // no cars owned

                return callback (error, null);

            } else {

                let counter = 0;

                for (let i = 0; i < queryResult.rows.length; i++) {

                    queryStringRentals = `
                        SELECT rental.id, rental.renter_id, rental.rental_start, rental.rental_end, users.firstname, users.lastname, users.telephone
                        FROM rental
                        INNER JOIN users
                        ON (rental.renter_id = users.id)
                        WHERE rental.car_id = ${queryResult.rows[i].id}
                        `;

                    dbPoolInstance.query(queryStringRentals, (error, queryResult2) => {

                        rentals = queryResult.rows[i];
                        rentals["rentals"] = queryResult2.rows;
                        finalResult.push(rentals);

                        if (counter === queryResult.rows.length - 1) {    // finished iterating through rentals

                            callback(error, finalResult);
                        };

                        counter++;
                    });
                };
            };
        });
    };


    const getMyReservations = (userId, callback) => {

        const queryString =`
            SELECT rental.id, rental.rental_start, rental.rental_end, cars.make, cars.model, cars.year, cars.passengers, cars.transmission, cars.fuel, cars.photo, cars.address, cars.postcode, cars.price, cars.comments, users.firstname, users.lastname, users.telephone
            FROM rental
            INNER JOIN cars
            ON (rental.car_id = cars.id)
            INNER JOIN users
            ON (cars.owner_id = users.id)
            WHERE rental.renter_id = ${userId}
            `;

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);

        });
    };


    // const getCarsRentals = (userId, callback) => {

    //     const queryString =`SELECT * FROM cars WHERE owner_id = ${userId}`;

    //     dbPoolInstance.query(queryString, (error, queryResult) => {

    //         callback(error, queryResult);
    //     });
    // };

    // const getCarsRentals2 = (carId, callback) => {

    //     const queryString = `
    //         SELECT rental.id, rental.renter_id, rental.rental_start, rental.rental_end, users.firstname, users.lastname, users.telephone
    //         FROM rental
    //         INNER JOIN users
    //         ON (rental.renter_id = users.id)
    //         WHERE rental.car_id = ${carId}
    //         `;

    //     dbPoolInstance.query(queryString, (error, queryResult) => {

    //         callback(error, queryResult);
    //     });
    // };


    return {

        getMyCarsRentals,
        getMyReservations
        // getCarsRentals2

    };
};




