

var React = require("react");
var DefaultLayout = require('./layouts/default');

class HomePage extends React.Component {

    render() {

        return (

            <DefaultLayout title='Carly' cookies={this.props}>

            <div class="homepage vertical-center">

                <div>

                    <h2 class="display-2 text-center">Own the trip, not the car</h2>

                    <h3 class="text-center">[SEARCH BAR GOES HERE]</h3>

                </div>

            </div>

            </DefaultLayout>
        );
    };
};

module.exports = HomePage;




