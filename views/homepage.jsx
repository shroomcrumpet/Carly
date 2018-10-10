

var React = require("react");
var DefaultLayout = require('./layouts/default');

class HomePage extends React.Component {

    render() {

        return (

            <DefaultLayout title='Carly' cookies={this.props}>

                <h1>Own the trip, not the car</h1>

                <h3>[SEARCH BAR GOES HERE]</h3>

            </DefaultLayout>
        );
    };
};

module.exports = HomePage;





