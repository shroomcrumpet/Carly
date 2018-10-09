

const sha256 = require('js-sha256');
const SALT = 'CAR CAR carly';


// const verif = (request) => {

//     return (sha256(request.cookies['userId'] + SALT) === request.cookies['loggedIn']);
// };




module.exports = (db) => {


    const homepage = (request, response) => {

        response.send('Welcome to Carly');

    };


    return {

        homepage

    };
};






