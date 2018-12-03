

var React = require("react");
var DefaultLayout = require('../layouts/default');
var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class ShowMyCars extends React.Component {

    render() {

        return (

            <DefaultLayout title="Your cars" cookies={this.props.cookies}>

                <div className="container-fluid">
                    <h3 className="generic-page-heading2">Your cars</h3>

                    {this.props.cars.map (cars => (

                        <div className="row">

                            <div className="col-md-4">
                                <a href={cars.photo} data-toggle="lightbox" data-title={`${cars.year} ${cars.make} ${cars.model}`} data-footer={`"${cars.comments}"`} className="img-fluid">
                                    <img src={cars.photo} className="showCarsImg" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                {cars.year} {cars.make} {cars.model}<br /><br />
                                {cars.address}, S{cars.postcode}<br />
                                S${cars.price} / day<br /><br />
                                "{cars.comments}"
                            </div>

                            <div className="col-md-4">
                                <ul className="list-group">
                                    {cars.rentals.map (rental => (
                                        <li className="list-group-item" key={rental.id} id={`rental${rental.id}`}>
                                            <ul className="list-group">
                                                <li className="list-group-item">Renter: {rental.firstname} {rental.lastname}</li>
                                                <li className="list-group-item">Renter phone number (+65): {rental.telephone}</li>
                                                <li className="list-group-item">Rental Start: {rental.rental_start.toLocaleDateString("en-US", dateOptions)}</li>
                                                <li className="list-group-item">Rental End: {rental.rental_end.toLocaleDateString("en-US", dateOptions)}</li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                    ))}
                </div>

            </DefaultLayout>
        );
    };
};

module.exports = ShowMyCars;





