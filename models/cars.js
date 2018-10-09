

module.exports = (dbPoolInstance) => {


    // const newUser = (reqbody, callback) => {

    //     var hashedValue = sha256(reqbody.password);

    //     const queryString = 'INSERT INTO users (email, firstname, lastname, password) VALUES ($1, $2, $3, $4) RETURNING id';

    //     const values = [
    //         reqbody.email.toLowerCase(),
    //         reqbody.firstname,
    //         reqbody.lastname,
    //         sha256(reqbody.password)
    //     ];

    //     dbPoolInstance.query(queryString, values, (error, queryResult) => {

    //         callback(error, queryResult);
    //     });
    // };


    // const login = (reqbody, callback) => {

    //     const queryString = `SELECT * FROM users WHERE email = '${reqbody.email.toLowerCase()}'`;

    //     dbPoolInstance.query(queryString, (error, queryResult) => {

    //         callback(error, queryResult);
    //     });
    // };


    return {

        // newUser: newUser,
        // login: login

    };
};
