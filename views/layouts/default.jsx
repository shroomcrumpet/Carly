

var React = require('react');

class DefaultLayout extends React.Component {

    render() {

        return (

            <html>

                <head>
                    <meta charSet="UTF-8" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
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