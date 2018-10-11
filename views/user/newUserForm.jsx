

var React = require("react");
var DefaultLayout = require('../layouts/default');

class NewUserForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='New User' cookies={this.props}>

                <h3>Create a Carly Account</h3>

                <form method="POST" action="/users">

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
                        <input className="form-control" placeholder="Password" name="password" id="password" type="password" minLength="6" required />
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Confirm Password" name="password-cfm" id="confirm_password" type="password" minLength="6" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>

                <script src="/user/confirmPassword.js" />

            </DefaultLayout>
        );
    };
};

module.exports = NewUserForm;





