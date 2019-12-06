const mongoose = require('mongoose');
var url  = require('url');
const fs = require('fs');
const Restaurant = mongoose.model('restaurant');


const dodajRestavracijo = (req, res) => {
    // save image

    var boni = true;
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

const readRestaurants = (req, res) => {
    Restaurant
        .find()
        .exec(
            (error, restaurant) => {
                if(!restaurant)
                    return res.status(404).json({
                        "error": "Restaurants not found"
                    });
                else if (error)
                    return res.status(500).json(error);
                else
                    res.status(200).json(restaurant);
            }
        )
};

const deleteRestaurant = (req, res) => {
    var id = req.body.restaurantID.toString();
    var ObjectID = mongoose.Types.ObjectId;

    Restaurant.deleteOne(
        {"_id": ObjectID(id)}, function (error, result) {
            if(error) return console.log(error);
            else res.redirect(req.body.returnADR.toString());
        }
    );
};

const updateResturant = (req, res) => {
    console.log("Smo sploh tukaj?");
    var id = req.body.restaurantID.toString();
    var ObjectID = (mongoose.Types.ObjectId);

    Restaurant.updateOne({"_id": ObjectID(id)}, {$set:
            {

            }
    }, function (error, result) {
        if(err)
            return res.status(500).json(error);
        else
            res.redirect(res.body.returnADR.toString());
    })
};

module.exports = {
    dodajRestavracijo,
    readRestaurants,
    deleteRestaurant,
    updateResturant
};