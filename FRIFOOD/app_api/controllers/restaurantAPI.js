const mongoose = require('mongoose');
var url  = require('url');

const Restaurant = mongoose.model('restaurant');


const dodajRestavracijo = (req, res) => {

    var restavracija = new Restaurant({
        name: req.body.inputRestaurantName.toString()
    });

    // save model to database
    restavracija.save(function (err) {
        if (err) return console.error(err);
        console.log(restavracija.name + " saved to DB");
        res.redirect("/restaurant-list");
    });
};

module.exports = {
    dodajRestavracijo
};