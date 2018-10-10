

module.exports = (dbPoolInstance) => {


    const newCar = (reqbody, callback) => {

        const queryString = 'INSERT INTO cars (owner_id, make, model, year, photo, address, postcode, avail_start, avail_end, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';

        const values = [
            reqbody.owner_id,
            reqbody.make,
            reqbody.model,
            reqbody.year,
            reqbody.photo,
            reqbody.address,
            reqbody.postcode,
            reqbody.avail_start,
            reqbody.avail_end,
            parseFloat(reqbody.price).toFixed(2)
        ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            callback(error, queryResult);
        });
    };

    return {

        newCar: newCar,

    };
};




