

console.log('public/script.js running...');


// window.onload = function() {

//     console.log('Script Running 2');

//     document.querySelector('#testButton').addEventListener('click', doStuff);

//     document.querySelector('#queryForm').addEventListener('submit', submitQuery);

// };


// function submitQuery() {

//     event.preventDefault();
//     console.log('Form working');

//     var request = new XMLHttpRequest();

//     // request.open("POST", `/users/ajax/?userid=${form.value}&content=${form2.value}`; // if attaching event listener to button
//     request.open("POST", '/users/ajax');
//     request.send();

// };



// function doStuff() {

//     var ajaxUrl = "http://localhost:3001/foobar";

//     // what to do when we recieve the request
//     var responseHandler = function() {

//         console.log("response text", this.responseText);
//         console.log("status text", this.statusText);
//         console.log("status code", this.status);

//         var responseObj = JSON.parse(this.responseText);

//         var h1 = document.createElement('h1');
//         h1.innerText = responseObj.password;
//         document.querySelector('body').appendChild(h1);
//     };


//     var request = new XMLHttpRequest();

//     request.addEventListener("load", responseHandler);

//     // ready the system by calling open, and specifying the url
//     request.open("GET", ajaxUrl);

//     // send the request
//     request.send();

// };




