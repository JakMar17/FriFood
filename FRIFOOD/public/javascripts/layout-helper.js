var input = document.getElementById("searchRestaurants");

input.addEventListener("keyup", function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        document.getElementById("searchRestaurantButton").click();
    }
});

function loadSearchParameters() {
}