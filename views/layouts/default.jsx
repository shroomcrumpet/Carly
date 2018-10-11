

var React = require('react');

class DefaultLayout extends React.Component {

    render() {

        return (

            <html>

                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="/css/bootstrap.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <title>{this.props.title}</title>
                </head>


                <header>

                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                        <a className="navbar-brand mb-0 h1" href="/">CARLY</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavAuthenticated cookies={this.props.cookies} />
                        </div>

                    </nav>

                </header>



                <body>

                    {this.props.children}

                <footer className="fixed-bottom">
                    <div className="container">
                        <div className="footer text-center">
                              © Carly <br />All Rights Reserved
                        </div>
                    </div>
                </footer>

                <script src="/jquery-3.0.0.slim.min.js" />
                <script src="/bootstrap.bundle.min.js" />

                </body>

            </html>
        );
    };
};


class NavAuthenticated extends React.Component {

    render () {

        if (this.props.cookies.loggedIn != undefined) { // Logged in //

            return (

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cars">Browse cars</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cars/new">List your car</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.props.cookies.firstName}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Edit profile</a>
                            <a className="dropdown-item" href="#">Edit cars</a>
                            <div className="dropdown-divider"></div>
                            <form className="dropdown-item" method="POST" action="/users/logout?_method=DELETE">
                                <input className="nav-link" type="submit" value="Log out" style={{color: "black"}} />
                            </form>
                        </div>
                    </li>

                </ul>

            );

        } else {    // Not logged in //

            return (

                <ul className="nav navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cars">Browse cars</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/users/new">Sign up</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/users/login">Log in</a>
                    </li>

                </ul>

            );
        };
    };
};


module.exports = DefaultLayout;






