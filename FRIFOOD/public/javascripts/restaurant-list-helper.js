
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

var returnRestaurants = [];

var source = "<div class=\"row-fill\"></div>\n" +
    "{{#each foundRestaurant as |restaurant| }}\n" +
    "    <div class=\"restaurant\" tabindex=\"1\">\n" +
    "      <div class=\"row\">\n" +
    "         <div class=\"col-md-6 col-sm-12\">\n" +
    "            <h1>{{restaurant.name}}</h1>\n" +
    "            <p>{{restaurant.formatted_address}}</p>\n" +
    "          </div>\n" +
    "       </div>\n" +
    "     </div>\n" +
    "    <div class=\"row-fill\"></div>\n" +
    "{{/each}}";

function initMap() {

    document.getElementById("showHideFoundRestaurants").style.display = "none";

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
            map.zoom = 12;
            map.setCenter(ljubljana);
        });
    } else {
        // if user can not be located, set ljubljana as the map center
        map.zoom = 12;
        map.setCenter(ljubljana);
    }

    google.maps.event.addListener(map, "click", function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log( latitude + ', ' + longitude );

        radius = new google.maps.Circle({map: map,
            radius: 300,
            center: event.latLng,
            fillColor: '#777',
            fillOpacity: 0.1,
            strokeColor: '#AA0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            draggable: false,    // Dragable
            editable: false      // Resizable
        });

        // Center of map
        var location = new google.maps.LatLng(latitude, longitude);
        map.panTo(location);
        map.setCenter(location);

        var request = {
            location: location,
            radius: 300,
            query: 'restaurants',
            fields: ['name', 'geometry', 'place_id', 'formatted_address', 'photos'],
        };

        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request, function(results, status) {
            //console.log(status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS);
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var resultCount = 0;
                for (var i = 0; i < results.length; i++) {
                    if (google.maps.geometry.spherical.computeDistanceBetween(results[i].geometry.location, location) < request.radius) {
                        returnRestaurants.push(results[i]);
                        createMarker(results[i]);
                        resultCount++;
                    }

                }
                document.getElementById("showHideRestaurants").style.display = "none";
                // let template = hbs.compile(source);
                // document.getElementById("showHideFoundRestaurants").innerHTML = template({foundRestaurants: returnRestaurants});
                sendRestaurantDataToNode(returnRestaurants, source);

                document.getElementById("showHideFoundRestaurants").style.display = "";
                map.setCenter(results[0].geometry.location);
                console.log(returnRestaurants);
            }
            else {
                window.alert("Sorry, this location was not found.\nYou will be redirected to your current location.");
                initMap();
            }
        });

    });
}

function sendRestaurantDataToNode(restaurant, source) {

    var data = {
        param1: restaurant,
        param2: source
    };
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/restaurantData');
    xhr.onload = function(data) {
        //console.log('loaded', this.responseText);
        document.getElementById("showHideFoundRestaurants").innerHTML = this.responseText;
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}





