

module.exports = (dbPoolInstance) => {


    const getCars = (callback) => {

        const queryString = 'SELECT * FROM cars';

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };



    const newCar = (reqbody, reqfile, callback) => {

        const queryString = 'INSERT INTO cars (owner_id, make, model, year, photo, address, postcode, avail_start, avail_end, price, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';

        const values = [
            reqbody.owner_id,
            reqbody.make,
            reqbody.model,
            reqbody.year,
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

        getCars: getCars,
        newCar: newCar

    };
};




