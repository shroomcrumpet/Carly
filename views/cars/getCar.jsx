

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
                    <script src="/car/carbooking.js" test="test" />
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
                                            <th scope="col" colSpan="2">[(icon)Max passengers, (icon)Transmission, (icon)Fuel]</th>
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


                        </div>

                        <div className="col-md-5">

                            <ul className="list-group">
                                <li className="list-group-item">S${this.props.car[0].price} per day</li>
                            </ul>

                            <form method="POST" action={`/cars/${this.props.car[0].id}`}>
                                <input type="text" id="flatpickr-cal" name="rentalDates" required />
                                <button type="submit" className="btn btn-primary">Rent it!</button>
                            </form>

                        </div>

                    </div>
                </div>

            </DefaultLayout>
        );
    };
};

module.exports = getCar;





