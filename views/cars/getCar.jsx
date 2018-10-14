

const React = require("react");
const DefaultLayout = require('../layouts/default');


class getCar extends React.Component {

    render() {

        return (

            <DefaultLayout
            title={`${this.props.car[0].make} ${this.props.car[0].model}`}
            cookies={this.props.cookies}
            extraCSS={
                <div>
                    <link rel="stylesheet" type="text/css" href="/css/flatpickr.min.css" />
                </div>}
            extraScripts={
                <div>
                    <script src="/calendar/moment.min.js" />
                    <script src="/calendar/flatpickr.js" />
                    <script src="/car/carbooking.js" rental={this.props.rental} car={this.props.carJSON} />
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl9rI2XLO4_np_nKxRdosBX6KaOApH4mU&callback=initMap" async defer />
                </div>
            }>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col text-center">
                            <img src={`/uploads/${this.props.car[0].photo}`} className="getCarImg" />
                        </div>
                    </div>
                    <div className="row" style={{width: "80vw", margin: "0 auto"}}>

                        <div className="col-md-7">

                            <ul className="list-group-flush">
                                <li className="list-group-item">
                                    <table className="table table-hover">
                                        <thead>
                                            <th scope="col" colSpan="2">
                                                <div className="row">
                                                    <div className="col">
                                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fillRule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"/></svg>
                                                        {"\u00a0"} Max: {this.props.car[0].passengers}
                                                    </div>
                                                    <div className="col">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fillRule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                                                        {"\u00a0"} {this.props.car[0].transmission}
                                                    </div>
                                                    <div className="col">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fillRule="evenodd" d="M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z"/></svg>
                                                        {"\u00a0"} {this.props.car[0].fuel}
                                                    </div>
                                                </div>
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Make</th>
                                                <td>{this.props.car[0].make}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Model</th>
                                                <td>{this.props.car[0].model}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Manufacture year</th>
                                                <td>{this.props.car[0].year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Owner comments</th>
                                                <td>{this.props.car[0].comments}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Address</th>
                                                <td>{this.props.car[0].address}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td>Singapore {this.props.car[0].postcode}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>

                            <div id="map"></div>

                        </div>

                        <div className="col-md-5">

                            <ul className="list-group-flush">

                                <li className="list-group-item"><span className="lead"><strong>S${this.props.car[0].price}</strong></span> per day</li>

                                <CarRentalForm car={this.props.car} cookies={this.props.cookies} />

                            </ul>

                        </div>

                    </div>
                </div>

            </DefaultLayout>
        );
    };
};


class CarRentalForm extends React.Component {

    render () {

        if (this.props.cookies.loggedIn != undefined) { // Logged in //

            return (

                <form method="POST" action={`/cars/${this.props.car[0].id}`}>

                    <li className="list-group-item">
                        Rental period: <input type="text" id="flatpickr-cal" name="rentalDates" required />
                    </li>

                    <div className="rental-form" style={{display: "none"}}>
                        <li className="list-group-item">
                            <span className="rentalDuration"></span><span className="rentalSubTotal float-right">test</span>
                        </li>

                        <li className="list-group-item">
                            Service fee ?⃝<span className="rentalFee float-right"></span>
                        </li>

                        <li className="list-group-item rental-form-total">
                            <strong>Total<span className="rentalGrandTotal float-right"></span></strong>
                        </li>

                        <li className="list-group-item">
                            <button type="submit" className="btn btn-primary">Rent it!</button>
                        </li>
                    </div>

                </form>

            );

        } else {    // Not logged in //

            return (

                null
            );
        };
    };
};


module.exports = getCar;





