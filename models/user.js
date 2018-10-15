

const sha256 = require('js-sha256');



module.exports = (dbPoolInstance) => {

    const newUser = (reqbody, callback) => {

        var hashedValue = sha256(reqbody.password);

        const queryString = 'INSERT INTO users (email, firstname, lastname, telephone, password, gender, occupation, nationality) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';

        const values = [
            reqbody.email.toLowerCase(),
            reqbody.firstname,
            reqbody.lastname,
            reqbody.telephone,
            sha256(reqbody.password),
            reqbody.gender,
            reqbody.occupation,
            reqbody.nationality
        ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    const editUser = (userId, callback) => {

        const queryString = `SELECT * FROM users WHERE id = ${userId}`;

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    const editUserPut = (reqbody, callback) => {

        let queryString;
        let values = [
            reqbody.email,
            reqbody.firstname,
            reqbody.lastname,
            reqbody.telephone,
            reqbody.gender,
            reqbody.occupation,
            reqbody.nationality
        ];

        if (reqbody.password === '') {

            queryString = `UPDATE users SET "email"=($1), "firstname"=($2), "lastname"=($3), "telephone"=($4), "gender"=($5), "occupation"=($6), "nationality"=($7) WHERE "id"=${reqbody.id}`;

        } else {

            queryString = `UPDATE users SET "email"=($1), "firstname"=($2), "lastname"=($3), "telephone"=($4), "gender"=($5), "occupation"=($6), "nationality"=($7), "password"=($8) WHERE "id"=${reqbody.id}`;
            values.push(sha256(reqbody.password));
        };

        dbPoolInstance.query(queryString, values, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    const login = (reqbody, callback) => {

        const queryString = `SELECT * FROM users WHERE email = '${reqbody.email.toLowerCase()}'`;

        dbPoolInstance.query(queryString, (error, queryResult) => {

            callback(error, queryResult);
        });
    };


    return {

        newUser,
        editUser,
        editUserPut,
        login

    };
};
