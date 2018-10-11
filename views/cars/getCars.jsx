

var React = require("react");
var DefaultLayout = require('../layouts/default');

class ShowCars extends React.Component {

    render() {

        return (

            <DefaultLayout title='Cars' cookies={this.props.cookies}>

                <div className="container-fluid">
                    <h3>Cars</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group">
                                {this.props.cars.map(cars => (
                                    <li className="list-group-item" key={cars.id}>
                                        <div className="row">
                                            <div className="col">
                                                <img src={`/uploads/${cars.photo}`} style={{width: "100%"}} />
                                            </div>
                                            <div className="col">
                                                {cars.year} {cars.make} {cars.model}<br />
                                                {cars.address}, S{cars.postcode}<br />
                                                S${cars.price}<br /><br />
                                                "{cars.comments}"
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-6">
                            [MAP GOES HERE]
                        </div>

                    </div>
                </div>

            </DefaultLayout>
        );
    };
};

module.exports = ShowCars;





