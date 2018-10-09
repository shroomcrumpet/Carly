

var React = require("react");
var DefaultLayout = require('../layouts/default');

class NewUserForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='New User'>

                <h4>Create a Carly Account</h4>

                <form method="POST" action="/users">

                    <input placeholder="Email Address" name="email" type="text" minLength="6" required />
                    <input placeholder="First Name" name="firstname" type="text" minLength="1" required />
                    <input placeholder="Last Name" name="lastname" type="text" minLength="1" required />
                    <input placeholder="Password" name="password" id="password" type="password" minLength="6" required />
                    <input placeholder="Confirm Password" name="password-cfm" id="confirm_password" type="password" minLength="6" required />

                    <input name="submit" type="submit" />

                </form>

                <script src="/user/confirmPassword.js" />

            </DefaultLayout>
        );
    };
};

module.exports = NewUserForm;





