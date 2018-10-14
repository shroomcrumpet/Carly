


console.log(document.currentScript.getAttribute('test'));


flatpickr("#flatpickr-cal", {
    // inline: true,
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    disable: [
        function(date) {
            // disable every multiple of 8
            return !(date.getDate() % 8);
        }
    ]
});




// window.onload = function() {

//     console.log('Window.onload Script Running');

//     doStuff();

// };


// function doStuff() {

//     event.preventDefault();

//     var responseHandler = function() {

//         console.log("response text", this.responseText);
//         console.log("status text", this.statusText);
//         console.log("status code", this.status);

//         var responseObj = JSON.parse(this.responseText);

//         console.log('responseObj: ', responseObj);

//     };

//     const request = new XMLHttpRequest();
//     request.addEventListener("load", responseHandler);
//     request.open("GET", '/rental/ajax');
//     request.send();

// };







// function submitQuery() {

//     event.preventDefault();
//     console.log('Form working');

//     var request = new XMLHttpRequest();

//     // request.open("POST", `/users/ajax/?userid=${form.value}&content=${form2.value}`; // if attaching event listener to button
//     request.open("POST", '/users/ajax');
//     request.send();

// };