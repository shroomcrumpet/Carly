

var React = require("react");
var DefaultLayout = require('../layouts/default');

class UserLoginForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='List car' cookies={this.props}>

                <div className="general-container">

                    <form id="wizardForm" method="POST" action="/cars" encType="multipart/form-data">

                        <div className="form-tab">

                            <h3>Hi {this.props.firstName}, let's get you started as a Carly owner!</h3>

                            <h4>First, we'll need some details about your car</h4>

                            <div className="form-group">
                                <label htmlFor="newCarMake">Make: </label>
                                <input className="form-control" id="newCarMake" placeholder="eg. Toyota, Audi, BMW" name="make" type="text" minLength="2" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarModel">Model: </label>
                                <input className="form-control" id="newCarModel" placeholder="eg. Camry, A3, 735Li" name="model" type="text" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarYear">Year of manufacture: </label>
                                <input className="form-control" id="newCarYear" placeholder="eg. 2015" name="year" type="number" min="1980" max="2050" step="1" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarPassengers">Maximum adult passengers: </label>
                                <input className="form-control" id="newCarPassengers" placeholder="eg. 5" name="passengers" type="number" min="1" step="1" required />
                            </div>

                            <div className="form-group">
                                <label>Transmission: </label><br />
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="transmission1" name="transmission" value="Automatic" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="transmission1">Automatic</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="transmission2" name="transmission" value="Manual" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="transmission2">Manual</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="transmission3" name="transmission" value="Semi-automatic" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="transmission3">Semi-automatic</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Fuel type: </label><br />
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="fuel1" name="fuel" value="Gasoline" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="fuel1">Gasoline</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="fuel2" name="fuel" value="Diesel" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="fuel2">Diesel</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="fuel3" name="fuel" value="Hybrid" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="fuel3">Hybrid</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="fuel4" name="fuel" value="Electric" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="fuel4">Electric</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarComments">Any additional comments about your car (Optional): </label>
                                <input className="form-control" id="newCarComments" placeholder="eg. Car trunk can fit 3 golf bags comfortably" name="comments" type="text" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarPhoto">Upload a photo of your car: </label>
                                <input className="form-control-file" id="newCarPhoto" name="photo" type="file" accept=".jpg, .jpeg, .png" required />
                                <small id="photoHelp" className="form-text text-muted">Tip: Nice photos increase rental likelihood!</small>
                            </div>

                        </div>


                        <div className="form-tab">

                            <h4>Next, tell us where the car is located</h4>
                            <h6>(This is where Carly renters will pick up and return your car, unless arranged otherwise)</h6>

                            <div className="form-group">
                                <label htmlFor="newCarAddress">Location address: </label>
                                <input className="form-control" id="newCarAddress" placeholder="eg. 2 Ridley Park" name="address" type="text" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="newCarPostcode">Postal Code: </label>
                                <input className="form-control" id="newCarPostcode" placeholder="eg. 248470" name="postcode" type="number" minLength="6" maxLength="6" required />
                            </div>

                        </div>


                        <div className="form-tab">

                            <h4>You're almost done! Let us know the rental rate, and when the car is available </h4>

                            <div className="form-group">
                                <label htmlFor="startDate">Availability start date: </label>
                                <input className="form-control" id="startDate" name="avail_start" type="date" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="endDate">Availability end date: </label>
                                <input className="form-control" id="endDate" name="avail_end" type="date" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price (per day): </label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">S$</div>
                                    </div>
                                    <input className="form-control" id="price" placeholder="eg. 50.00" name="price" type="number" min="1" max="9999999" required />
                                </div>
                                <small id="priceHelp" className="form-text text-muted">Tip: Have a look at some similar listings to gauge a fair amount!</small>
                            </div>

                            <input name="owner_id" value={this.props.userId} type="hidden" />

                        </div>

                        <div>
                            <button className="btn btn-secondary" type="button" id="prevBtn">Previous</button> <button className="btn btn-primary" type="button" id="nextBtn">Next</button>
                        </div>

                        <div style={{textAlign:'center', marginTop:'40px'}}>
                            <span className="form-step"></span>
                            <span className="form-step"></span>
                            <span className="form-step"></span>
                            <span className="form-step"></span>
                        </div>

                    </form>

                    <script src="/support/formWizard.js" />

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = UserLoginForm;



