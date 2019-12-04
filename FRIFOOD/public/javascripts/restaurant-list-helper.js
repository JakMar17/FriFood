var map, infoWindow;

function handleAddress(address) {
    console.log(address);

    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: -46.056946 , lng: 14.505751},
        zoom: 14
    });

    var request = {
        query: address,
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        //console.log(status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
        else {
            window.alert("Sorry, this location was not found.\nYou will be redirected to your current location.");
            initMap();
        }
    });
}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

var ljubljana = {
    lat: 46.056946,
    lng: 14.505751
};

function initMap() {

    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: -46.056946 , lng: 14.505751},
        zoom: 14
    });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            // if user can not be located, set ljubljana as the map center
            handleLocationError(true, infoWindow, map.setCenter(ljubljana));
        });
    } else {
        // if user can not be located, set ljubljana as the map center
        handleLocationError(false, infoWindow, map.setCenter(ljubljana));
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}









