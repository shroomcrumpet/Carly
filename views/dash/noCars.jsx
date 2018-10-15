

var React = require("react");
var DefaultLayout = require('../layouts/default');


class NoCars extends React.Component {

    render() {

        return (

            <DefaultLayout title="Your cars" cookies={this.props.cookies}>

                <div className="container-fluid">

                    <h3>{this.props.cookies.firstName}, it looks like you have not listed anything on Carly yet. Would you like to <a href="/cars/new">add your car</a>?</h3>

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = NoCars;





