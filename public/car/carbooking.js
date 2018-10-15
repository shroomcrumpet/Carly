

const rental = JSON.parse(document.currentScript.getAttribute('rental'));
const carAttr = JSON.parse(document.currentScript.getAttribute('car'));

const rentalRate = carAttr.price;
const postcode = carAttr.postcode;
const availStart = carAttr.avail_start;
const availEnd = carAttr.avail_end;
const todayDate = moment().format("YYYY-MM-DD");

const rentalForm = document.querySelector("div.rental-form");
const fieldRentalDuration = document.querySelector("span.rentalDuration");
const fieldRentalSubTotal = document.querySelector("span.rentalSubTotal");
const fieldRentalFee = document.querySelector("span.rentalFee");
const fieldRentalGrandTotal = document.querySelector("span.rentalGrandTotal");

var geocoder;
var map;


let disabledDates = [];

for (i = 0; i < rental.length; i++) {

    disabledDates.push({

        from: `${rental[i].rental_start}`,
        to: `${rental[i].rental_end}`

    });
};


function minDate() {
    if (moment(availStart).isBefore(todayDate)) {
        return todayDate;
    } else {
        return availStart;
    };
};


window.onload = function() {

    flatpickr("#flatpickr-cal", {
        // inline: true,    // permanently shows calendar on page
        mode: "range",
        minDate: minDate(),
        maxDate: availEnd,
        dateFormat: "Y-m-d",
        disable: disabledDates,
        onValueUpdate: function(selectedDates) {

            rentalForm.style.display = "none";

            rentalDuration = parseInt( (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24 ) ) + 1;

            if (rentalDuration > 0) {
                rentalForm.style.display = "block";

                fieldRentalDuration.textContent = `$${rentalRate} x ${rentalDuration} day(s)`;
                fieldRentalSubTotal.textContent = `$${(rentalRate * rentalDuration).toFixed(2)}`;
                fieldRentalFee.textContent = `$${(0.1 * rentalRate * rentalDuration).toFixed(2)}`;
                fieldRentalGrandTotal.textContent = `S$${(1.1 * rentalRate * rentalDuration).toFixed(2)}`;
            };
        }
    });
};


function initMap() {

    geocoder = new google.maps.Geocoder();
    bounds = new google.maps.LatLngBounds();
    map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: 1.3521, lng: 103.8198 },
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.roadmap,
        mapTypeControl: false,
        clickableIcons: false

    });

    const address = `Singapore ${postcode}`;

    geocoder.geocode({ 'address': address, componentRestrictions: {country: 'SG'} }, function(results, status) {

        if (status === 'OK') {

            const position = results[0].geometry.location;
            map.setCenter(position);

            var marker = new google.maps.Marker({
                map: map,
                position: position,
                icon: "/img/car-icon.png",
                animation: google.maps.Animation.DROP
            });

        } else {

            console.log('Geocode was not successful for the following reason: ' + status);
        };
    });
};


