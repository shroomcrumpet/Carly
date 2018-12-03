

var React = require("react");
var DefaultLayout = require('../layouts/default');

class EditUserForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='Edit User' cookies={this.props.cookies}>

                <div className="general-container">

                    <h3>Edit profile</h3>

                    <form method="POST" action="/user?_method=PUT">

                        <div id="accordion">

                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h4 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Required</strong>
                                </button>
                              </h4>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">

                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input className="form-control" id="inputEmail" aria-describedby="emailHelp" defaultValue={this.props.user.email} name="email" type="text" minLength="6" required />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputFirstName">First name</label>
                                        <input className="form-control" id="inputFirstName" defaultValue={this.props.user.firstname} name="firstname" type="text" minLength="1" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputLastName">Last name</label>
                                        <input className="form-control" id="inputLastName" aria-describedby="lastNameHelp" defaultValue={this.props.user.lastname} name="lastname" type="text" minLength="1" required />
                                        <small id="lastNameHelp" className="form-text text-muted">Your public profile only shows your first name. When you rent a car, the owner will see your first and last name.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputTelephone">Phone number</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="telephonePrepend">+65</span>
                                            </div>
                                            <input className="form-control" id="inputTelephone " defaultValue={this.props.user.telephone} name="telephone" type="number" minLength="7" maxLength="12" required />
                                        </div>
                                        <small id="telephoneHelp" className="form-text text-muted">The number for rental contacts, reminders, and other notifications.</small>
                                    </div>

                                </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-header" id="headingTwo">
                              <h4 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Optional</strong>
                                </button>
                              </h4>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">

                                    <div className="form-group">
                                        <label htmlFor="inputGender">Gender</label>
                                        <input className="form-control" id="inputGender" aria-describedby="GenderHelp" defaultValue={this.props.user.gender} name="gender" type="text" minLength="2" />
                                        <small id="genderHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputOccupation">Occupation</label>
                                        <input className="form-control" id="inputOccupation" aria-describedby="occupationHelp" defaultValue={this.props.user.occupation} name="occupation" type="text" minLength="2" />
                                        <small id="occupationHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputNationality">Nationality</label>
                                        <input className="form-control" id="inputNationality" aria-describedby="nationalityHelp" defaultValue={this.props.user.nationality} name="nationality" type="text" minLength="2" />
                                        <small id="nationalityHelp" className="form-text text-muted">We use this data for analysis and never share it with other users.</small>
                                    </div>

                                </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-header" id="headingThree">
                              <h4 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong>Change password</strong>
                                </button>
                              </h4>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">

                                    <div className="form-group">
                                        <label htmlFor="password">New password</label>
                                        <input className="form-control" id="password" defaultValue="" aria-describedby="passwordHelp" name="password" id="password" type="password" minLength="6" />
                                        <small id="passwordHelp" className="form-text text-muted">Leave blank to keep old password. Minimum: 6 characters.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Confirm new password</label>
                                        <input className="form-control" id="confirm_password" defaultValue="" name="password-cfm" id="confirm_password" type="password" minLength="6" />
                                    </div>

                                </div>
                            </div>
                          </div>

                        </div>

                        <input name="id" defaultValue={this.props.cookies.userId} type="hidden" />

                        <button type="submit" className="btn btn-primary" style={{margin: "5px 0"}}>Submit</button>

                    </form>

                    <script src="/user/confirmPassword.js" />

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = EditUserForm;





