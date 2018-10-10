

module.exports = (db) => {


    const homepage = (request, response) => {

        response.render('homepage', request.cookies);

    };


    return {

        homepage

    };
};






