

var React = require("react");
var DefaultLayout = require('../layouts/default');


class NoReservations extends React.Component {

    render() {

        return (

            <DefaultLayout title="Your reservations" cookies={this.props.cookies}>

                <div className="container-fluid">

                    <h3 className="generic-page-heading">{this.props.cookies.firstName}, it looks like you have not made any bookings on Carly yet. Would you like to <a href="/cars">make one</a>?</h3>

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = NoReservations;





