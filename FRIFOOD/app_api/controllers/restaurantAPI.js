const mongoose = require('mongoose');
var url  = require('url');

const Restaurant = mongoose.model('restaurant');


const dodajRestavracijo = (req, res) => {
    var boni = false;
    boni = req.body.boniYes == "YES";

    // preverjanje odpiralnih časov
    var monday = "ZAPRTO";
    var tuesday = "ZAPRTO";
    var wednesday = "ZAPRTO";
    var thursday = "ZAPRTO";
    var friday = "ZAPRTO";
    var saturday = "ZAPRTO";
    var sunday = "ZAPRTO";

    if(!req.body.openMonday){
        monday = req.body.inputMondayFrom.toString() + ' - ' + req.body.inputMondayTo.toString();
    }
    if(!req.body.openTuesday){
        tuesday = req.body.inputTuesdayFrom.toString() + ' - ' + req.body.inputTuesdayTo.toString();
    }
    if(!req.body.openWednesday){
        wednesday = req.body.inputWednesdayFrom.toString() + ' - ' + req.body.inputWednesdayTo.toString();
    }
    if(!req.body.openThursday){
        thursday = req.body.inputThursdayFrom.toString() + ' - ' + req.body.inputThursdayTo.toString();
    }
    if(!req.body.openFriday){
        friday = req.body.inputFridayFrom.toString() + ' - ' + req.body.inputFridayTo.toString();
    }
    if(!req.body.openSaturday){
        saturday = req.body.inputSaturdayFrom.toString() + ' - ' + req.body.inputSaturdayTo.toString();
    }
    if(!req.body.openSunday){
        sunday = req.body.inputSundayFrom.toString() + ' - ' + req.body.inputSundayTo.toString();
    }


    var restavracija = new Restaurant({
        name: req.body.inputRestaurantName.toString(),
        address: req.body.inputRestaurantAddress.toString(),
        rating: 0,
        mealPrice: req.body.inputMealCost,
        student: boni,
        studentPrice: req.body.inputBoniCost,
        timeTable: {
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday
        },
        description: req.body.inputRestaurantDescription,
        icon: {
            data: req.body.ikonaRestavracije,
            contentType: 'image/png'
        },
        front: {
            data: req.body.naslovnaSlika,
            contentType: 'image/png'
        }
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