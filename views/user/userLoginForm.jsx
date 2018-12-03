

var React = require("react");
var DefaultLayout = require('../layouts/default');

class UserLoginForm extends React.Component {

    render() {

        return (

            <DefaultLayout title='Sign in' cookies={this.props}>

                <div className="general-container">

                    <h4>Sign in to your Carly Account</h4>

                    <form method="POST" action="/users/login">

                        <div className="form-group">
                            <input className="form-control" placeholder="Email Address" name="email" type="text" required />
                        </div>

                        <div className="form-group">
                            <input className="form-control" placeholder="Password" name="password" type="password" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>

                </div>

            </DefaultLayout>
        );
    };
};

module.exports = UserLoginForm;





