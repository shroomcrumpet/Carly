

var React = require("react");
var DefaultLayout = require('../layouts/default');
var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class ShowMyBookings extends React.Component {

    render() {

        return (

            <DefaultLayout title="Your bookings" cookies={this.props.cookies}>

                <div className="container-fluid">
                    <h3 className="generic-page-heading2">Your bookings</h3>

                    {this.props.bookings.map (bookings => (

                        <div className="row">

                            <div className="col-md-4">
                                <a href={bookings.photo} data-toggle="lightbox" data-title={`${bookings.year} ${bookings.make} ${bookings.model}`} data-footer={`"${bookings.comments}"`} className="img-fluid">
                                    <img src={bookings.photo} className="showCarsImg" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                {bookings.year} {bookings.make} {bookings.model}<br /><br />
                                {bookings.address}, S{bookings.postcode}<br />
                                S${bookings.price} / day<br /><br />
                                "{bookings.comments}"
                            </div>

                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item" key={bookings.id} id={`booking${bookings.id}`}>
                                        <ul className="list-group">
                                            <li className="list-group-item">Owner: {bookings.firstname} {bookings.lastname}</li>
                                            <li className="list-group-item">Owner phone number (+65): {bookings.telephone}</li>
                                            <li className="list-group-item">Rental Start: {bookings.rental_start.toLocaleDateString("en-US", dateOptions)}</li>
                                            <li className="list-group-item">Rental End: {bookings.rental_end.toLocaleDateString("en-US", dateOptions)}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>

            </DefaultLayout>
        );
    };
};

module.exports = ShowMyBookings;





