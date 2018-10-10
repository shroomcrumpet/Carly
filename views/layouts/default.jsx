

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

                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

                        <a class="navbar-brand mb-0 h1" href="/">CARLY</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavAuthenticated cookies={this.props.cookies} />
                        </div>

                    </nav>

                </header>


                <body>

                    {this.props.children}

                </body>

                <footer class="fixed-bottom">
                    <div class="container">
                        <div class="footer text-center">
                              © CARLY <br />All Rights Reserved
                        </div>
                    </div>
                </footer>

            </html>
        );
    };
};
                    // <li class="nav-item">

                    //     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    //         {this.props.cookies.firstName}
                    //     </a>
                    //     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    //       <a class="dropdown-item" href="#">Edit profile</a>
                    //       <a class="dropdown-item" href="#">Edit cars</a>
                    //       <div class="dropdown-divider"></div>
                    //       <a class="dropdown-item" href="#">Log out</a>
                    //     </div>

                    // </li>
class NavAuthenticated extends React.Component {

    render () {

        if (this.props.cookies.loggedIn != undefined) { // Logged in //

            return (

                <ul class="nav navbar-nav ml-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#">How it works</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Browse cars</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/cars/new">List your car</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>

                    <li class="nav-item">
                        <form method="POST" action="/users/logout?_method=DELETE">
                            <input class="nav-link" type="submit" value="Log out" />
                        </form>
                    </li>

                </ul>

            );

        } else {    // Not logged in //

            return (

                <ul class="nav navbar-nav ml-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#">How it works</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Browse cars</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/users/new">Sign up</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/users/login">Log in</a>
                    </li>

                </ul>

            );
        };
    };
};


module.exports = DefaultLayout;






