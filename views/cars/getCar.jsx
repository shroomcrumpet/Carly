

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
                                            <th scope="col" colSpan="2"><span className="octicon-organization" />[(icon)Max passengers, (icon)Transmission, (icon)Fuel]</th>
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





