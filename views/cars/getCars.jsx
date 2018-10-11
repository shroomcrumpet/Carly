

var React = require("react");
var DefaultLayout = require('../layouts/default');

class ShowCars extends React.Component {

    render() {

        return (

            <DefaultLayout title='Cars' cookies={this.props.cookies}>

                <h3>Cars</h3>

                <div>

                    <ul>

                        {this.props.cars.map(cars => (
                            <li key={cars.id}>
                                <img src={`/uploads/${cars.photo}`} style={{width: "500px"}} />
                                {cars.year} {cars.make} {cars.model}
                            </li>
                        ))}

                    </ul>

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = ShowCars;





