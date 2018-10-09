

var React = require('react');


class DefaultLayout extends React.Component {

    render() {

        return (

            <html>

                <head>
                    <meta charSet="UTF-8" />
                    <link rel="stylesheet" href="/bootstrap.css" />
                    <title>{this.props.title}</title>
                </head>

                <body>
                    {this.props.children}
                </body>

            </html>
        );
    };
};

module.exports = DefaultLayout;