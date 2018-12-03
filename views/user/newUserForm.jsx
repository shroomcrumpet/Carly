

var React = require("react");
var DefaultLayout = require('../layouts/default');

class NewUserForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='New User' cookies={this.props}>

                <div className="general-container">

                    <h3>Create a Carly Account</h3>

                    <form method="POST" action="/users">

                        <h5>Required</h5>

                        <div className="form-group">
                            <input className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" type="text" minLength="6" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <input className="form-control" placeholder="First Name" name="firstname" type="text" minLength="1" required />
                        </div>

                        <div className="form-group">
                            <input className="form-control" placeholder="Last Name" name="lastname" type="text" minLength="1" required />
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="telephonePrepend">+65</span>
                                </div>
                                <input className="form-control" placeholder="Telephone number" name="telephone" type="number" minLength="7" maxLength="12" required />
                            </div>
                            <small id="telephoneHelp" className="form-text text-muted">The number for rental contacts, reminders, and other notifications.</small>
                        </div>

                        <div className="form-group">
                            <input className="form-control" aria-describedby="passwordHelp" placeholder="Password" name="password" id="password" type="password" minLength="6" required />
                            <small id="passwordHelp" className="form-text text-muted">Minimum: 6 characters.</small>
                        </div>

                        <div className="form-group">
                            <input className="form-control" placeholder="Confirm Password" name="password-cfm" id="confirm_password" type="password" minLength="6" required />
                        </div>

                        <h5>Optional</h5>

                        <div className="form-group">
                            <select name="gender" className="custom-select" aria-describedby="genderHelp">
                                <option selected name="gender" value="">Gender</option>
                                <option name="gender" value="Male">Male</option>
                                <option name="gender" value="Female">Female</option>
                                <option name="gender" value="Other">Other</option>
                            </select>
                            <small id="genderHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                        </div>

                        <div className="form-group">
                            <input className="form-control" aria-describedby="occupationHelp" placeholder="Occupation" name="occupation" type="text" minLength="2" />
                            <small id="occupationHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                        </div>

                        <div className="form-group">
                            <input className="form-control" aria-describedby="nationalityHelp" placeholder="Nationality" name="nationality" type="text" minLength="2" />
                            <small id="nationalityHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>

                    <script src="/user/confirmPassword.js" />

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = NewUserForm;





