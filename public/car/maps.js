

var carlist = document.querySelectorAll("ul.carlist li");
var geocoder;
var map;


function initMap() {

    geocoder = new google.maps.Geocoder();
    bounds = new google.maps.LatLngBounds();
    map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: 1.3521, lng: 103.8198 },
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        clickableIcons: false
    });


    for (let i = 0; i < carlist.length; i++) {

        function showCars() {
            for (j=0; j < carlist.length; j++) {
                carlist[j].style.display = "block";
            };
        };

        function hideOtherCars() {
            for (j = 0; j < carlist.length; j++) {
                if (j != i) {
                    carlist[j].style.display = "none";
                };
            };
        };

        const address = `Singapore ${carlist[i].querySelector(".postcode").textContent}`;
        const contentString = carlist[i].querySelector(".car-info").innerHTML;
        const carImg = carlist[i].querySelector(".car-pic img");

        geocoder.geocode({ 'address': address, componentRestrictions: {country: 'SG'} }, function(results, status) {

            if (status === 'OK') {

                const position = results[0].geometry.location;
                bounds.extend(position);

                var infowindow = new google.maps.InfoWindow({
                    content: `<div class="info-window-content">${contentString}</div>`
                });

                var marker = new google.maps.Marker({
                    map: map,
                    position: position
                });

                marker.addListener('mouseover', function() {
                    showCars();
                    infowindow.open(map, this);
                    hideOtherCars();
                });

                marker.addListener('mouseout', function() {
                    infowindow.close();
                    showCars();
                });

                map.fitBounds(bounds);

                carImg.addEventListener('mouseover', function() {
                    map.panTo(position);
                    infowindow.open(map, marker);
                })

                carImg.addEventListener('mouseout', function() {
                    infowindow.close();
                });

                // marker.addListener('click', function() {
                //     google.maps.event.clearListeners(marker, 'mouseout');
                //     hideOtherCars();
                // });

                // infowindow.addListener('closeclick', function() {
                //     marker.addListener('mouseout', function() {
                //         infowindow.close();
                //     });
                //     showCars();
                // });

            } else {

                console.log('Geocode was not successful for the following reason: ' + status);
            };
        });
    };
};


