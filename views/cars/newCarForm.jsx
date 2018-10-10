

var React = require("react");
var DefaultLayout = require('../layouts/default');

class UserLoginForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='List car' cookies={this.props}>

                <form id="wizardForm" method="POST" action="/cars">

                    <div class="form-tab">

                        <h3>Hi {this.props.firstName}, let's get you started as a Carly owner!</h3>

                        <h4>First, we'll need some details about your car</h4>

                        <div class="form-group">
                            <label for="newCarMake">Make: </label>
                            <input class="form-control" id="newCarMake" placeholder="eg. Toyota, Audi, BMW" name="make" type="text" minLength="2" required />
                        </div>

                        <div class="form-group">
                            <label for="newCarModel">Model: </label>
                            <input class="form-control" id="newCarModel" placeholder="eg. Camry, A3, 735Li" name="model" type="text" required />
                        </div>

                        <div class="form-group">
                            <label for="newCarYear">Year of manufacture: </label>
                            <input class="form-control" id="newCarYear" placeholder="eg. 2015" name="year" type="number" min="1980" max="2050" step="1" required />
                        </div>

                        <div class="form-group">
                            <label for="newCarPhoto">Upload a photo of your car: </label>
                            <input class="form-control-file" id="newCarPhoto" name="photo" type="file" accept=".jpg, .jpeg, .png" required />
                            <small id="photoHelp" class="form-text text-muted">Tip: Nice photos increase rental likelihood!</small>
                        </div>

                    </div>


                    <div class="form-tab">

                        <h4>Next, tell us where the car is located</h4>
                        <h6>(This is where Carly renters will pick up and return your car, unless arranged otherwise)</h6>

                        <div class="form-group">
                            <label for="newCarAddress">Location address: </label>
                            <input class="form-control" id="newCarAddress" placeholder="eg. 2 Ridley Park" name="address" type="text" required />
                        </div>

                        <div class="form-group">
                            <label for="newCarPostcode">Postal Code: </label>
                            <input class="form-control" id="newCarPostcode" placeholder="eg. 248470" name="postcode" type="number" length="6" required />
                        </div>

                    </div>


                    <div class="form-tab">

                        <h4>You're almost done! Let us know the rental rate, and when the car is available </h4>

                        <div class="form-group">
                            <label for="startDate">Availability start date: </label>
                            <input class="form-control" id="startDate" name="avail_start" type="date" required />
                        </div>

                        <div class="form-group">
                            <label for="endDate">Availability end date: </label>
                            <input class="form-control" id="endDate" name="avail_end" type="date" required />
                        </div>

                        <div class="form-group">
                            <label for="price">Price (per day): </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">S$</div>
                                </div>
                                <input class="form-control" id="price" placeholder="eg. 50.00" name="price" type="number" min="1" max="9999999" required />
                            </div>
                            <small id="priceHelp" class="form-text text-muted">Tip: {`<SOME PRICING TIP HERE>`}</small>
                        </div>

                        <input name="owner_id" value={this.props.userId} type="hidden" />

                    </div>

                    <div>
                        <button class="btn btn-secondary" type="button" id="prevBtn">Previous</button> <button class="btn btn-primary" type="button" id="nextBtn">Next</button>
                    </div>

                    <div style={{textAlign:'center', marginTop:'40px'}}>
                        <span class="form-step"></span>
                        <span class="form-step"></span>
                        <span class="form-step"></span>
                        <span class="form-step"></span>
                    </div>

                </form>

                <script src="/support/formWizard.js" />

            </DefaultLayout>
        );
    };
};

module.exports = UserLoginForm;



