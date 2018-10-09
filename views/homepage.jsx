



// var React = require("react");
// var DefaultLayout = require('./layouts/default');

// class HomePage extends React.Component {

//     render() {

//         return (

//             <DefaultLayout title='Tweedr'>

//                 <h1># Tweedr #</h1>

//                 <Stuff cookies={this.props} />

//             </DefaultLayout>
//         );
//     };
// };


// class Stuff extends React.Component {

//     render () {

//         if (this.props.cookies.loggedIn != undefined) {

//             return (

//                 <div>

//                     <form className="user-form" method="POST" action="/logout?_method=DELETE">

//                         <input type="submit" value="LOG OUT" />

//                     </form>

//                     <h3>What's on your mind?</h3>

//                     <form className="user-form" method="POST" action="/tweets">

//                         <div className="tweet-box">
//                             <input name="newtweet" type="text" minLength="3" required />
//                         </div>

//                         <input type="submit" value="submit" />

//                     </form>

//                 </div>
//             );

//         } else {    // Not logged in //

//             return (

//                 <div>

//                     <h4>Login</h4>

//                     <form className="user-form" method="POST" action="/login">

//                         <div className="user-attribute">
//                             username<input name="username" type="text" minLength="3" required />
//                         </div>

//                         <div className="user-attribute">
//                             password:<input name="password" type="text" minLength="3" required />
//                         </div>

//                         <input name="submit" type="submit" />

//                     </form>

//                 </div>

//             );
//         };
//     };
// };


// module.exports = HomePage;





