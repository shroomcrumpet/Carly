

module.exports = (dbPoolInstance) => {


    const showCars = (callback) => {

        const queryString = 'SELECT * FROM cars';

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    const getCar = (id, callback) => {

        const queryStringCar = `SELECT * FROM cars WHERE id = ${id}`;
        const queryStringRental =`SELECT * FROM rental WHERE car_id = ${id}`;

        dbPoolInstance.query(queryStringCar, (errorCar, queryResultCar) => {

            dbPoolInstance.query(queryStringRental, (errorRental, queryResultRental) => {

                callback(errorCar, errorRental, queryResultCar, queryResultRental);

            });
        });
    };


    const carRentalPost = (userId, carId, rentalStart, rentalEnd, callback) => {

        const queryString = `INSERT INTO rental (renter_id, car_id, rental_start, rental_end) VALUES ($1, $2, $3, $4) RETURNING *`;

        const values = [
            userId,
            carId,
            rentalStart,
            rentalEnd
        ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    const newCar = (reqbody, reqfile, callback) => {

        const queryString = 'INSERT INTO cars (owner_id, make, model, year, passengers, transmission, fuel, photo, address, postcode, avail_start, avail_end, price, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *';

        const values = [
            reqbody.owner_id,
            reqbody.make,
            reqbody.model,
            reqbody.year,
            reqbody.passengers,
            reqbody.transmission,
            reqbody.fuel,
            reqfile.filename,
            reqbody.address,
            reqbody.postcode,
            reqbody.avail_start,
            reqbody.avail_end,
            parseFloat(reqbody.price).toFixed(2),
            reqbody.comments
        ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            callback(error, queryResult);
        });
    };

    return {

        showCars,
        getCar,
        carRentalPost,
        newCar

    };
};




