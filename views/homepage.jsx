

var React = require("react");
var DefaultLayout = require('./layouts/default');

class HomePage extends React.Component {

    render() {

        return (

            <DefaultLayout title='Carly' cookies={this.props} extraCSS={
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Caveat:400,700" rel="stylesheet" />
                </div>}>

            <div className="homepage">

                <div className="splash-container d-flex align-items-center">
                    <h2 className="display-2">"Own the trip, not the car"</h2>
                </div>

            </div>

            </DefaultLayout>
        );
    };
};

module.exports = HomePage;




