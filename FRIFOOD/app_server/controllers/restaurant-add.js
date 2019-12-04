
var Restaurant = require('../models/restaurant-add.js');

exports.restaurant_create = function (req, res) {
    var restaurant = new Restaurant(
        {
            name: req.body.inputRestaurantName,
        }
    );

    restaurant.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Restaurant added successfully');
        console.log("REDIRECTED");
        res.redirect('/');
    })
};