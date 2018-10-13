

var React = require("react");
var DefaultLayout = require('../layouts/default');

class ShowCars extends React.Component {

    render() {

        return (

            <DefaultLayout title='Cars' cookies={this.props.cookies}>

                <div className="container-fluid">
                    <h3>Cars</h3>
                    <div className="row">
                        <div className="col-md-6" style={{height: "80vh", overflow: "scroll"}}>
                            <ul className="list-group carlist">
                                {this.props.cars.map(cars => (
                                    <li className="list-group-item" key={cars.id} id={`car${cars.id}`}>
                                        <div className="row">
                                            <div className="col car-pic">
                                                <a href={`/cars/${cars.id}`}><img src={`/uploads/${cars.photo}`} style={{width: "100%"}} /></a>
                                            </div>
                                            <div className="col car-info">
                                                <a href={`/cars/${cars.id}`}>{cars.year} {cars.make} {cars.model}</a><br /><br />
                                                {cars.address}, S{cars.postcode}<br />
                                                S${cars.price} / day<br /><br />
                                                "{cars.comments}"
                                            </div>
                                            <div className="postcode" style={{display: "none"}}>{cars.postcode}</div>
                                            <div className="address" style={{display: "none"}}>{cars.address}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-6" style={{height: "80vh"}}>
                            <div id="map"></div>
                        </div>

                    </div>
                </div>

                <script src="car/maps.js" test={this.props.cars} />
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl9rI2XLO4_np_nKxRdosBX6KaOApH4mU&callback=initMap" async defer />

            </DefaultLayout>
        );
    };
};

module.exports = ShowCars;





