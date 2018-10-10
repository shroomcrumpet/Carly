

var React = require("react");
var DefaultLayout = require('../layouts/default');

class UserLoginForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='Sign in' cookies={this.props}>

                <h4>Sign in to your Carly Account</h4>

                <form method="POST" action="/users/login">

                    <input placeholder="Email Address" name="email" type="text" required />
                    <input placeholder="Password" name="password" type="password" required />

                    <input name="submit" type="submit" />

                </form>

            </DefaultLayout>
        );
    };
};

module.exports = UserLoginForm;





