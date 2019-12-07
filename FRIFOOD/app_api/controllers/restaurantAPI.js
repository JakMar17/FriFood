const mongoose = require('mongoose');
var url  = require('url');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const Restaurant = mongoose.model('restaurant');
const Comments = mongoose.model('comments');

const dodajRestavracijo = (req, res) => {
    var boni = true;
    if(req.body.boni == "option1"){
        boni = true;
    }else{
        boni = false;
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        console.log("FUCK");
        return res.status(400).send('No files were uploaded.');
    }

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

    var commentSection = new Comments([]);

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
        comments: commentSection,
        icon: '',
        front: '',
    });

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let naslovna_slika = req.files.naslovnaSlika;
    let ns_t = req.files.naslovnaSlika.name;
    let naslovnaPath = "./public/restaurant-images/" + restavracija._id + '-ns.' + ns_t[ns_t.length - 1];
    // Use the mv() method to place the file somewhere on your server
    naslovna_slika.mv(naslovnaPath, function(err) {
        if (err){
            return res.status(500);
        }
        console.log("FILE UPLOADED");
    });

    let ikonaSlika = req.files.ikonaRestavracije;
    let ns_i = req.files.ikonaRestavracije.name.split('.');

    let ikonaPath = "./public/restaurant-images/" + restavracija._id + '-ik.' + ns_i[ns_i.length - 1];

    // Use the mv() method to place the file somewhere on your server
    ikonaSlika.mv(ikonaPath, function(err) {
        if (err){
            console.log("FUCK");
            return res.status(500);
        }
        console.log("FILE UPLOADED");
    });

    ikonaPath = "./restaurant-images/" + restavracija._id + '-ik.' + ns_i[ns_i.length - 1];
    naslovnaPath = "./restaurant-images/" + restavracija._id + '-ns.' + ns_t[ns_t.length - 1];

    restavracija.icon = ikonaPath;
    restavracija.front = naslovnaPath;

    // save model to database
    restavracija.save(function (err) {
        if (err) return console.error(err);
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

    console.log(req.body);

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

const getRestaurantById = (req, res) => {
    Restaurant.findById(req.params.id).exec((error, restaurant) => {
        if(!restaurant)
            return res.status(404).json({
                "error": "Restaurants not found"
            });
        else if (error)
            return res.status(500).json(error);
        else
            res.status(200).json(restaurant);
    })
};

const getRestaurantBySearch = (req, res) => {
    var name = req.query.name;
    Restaurant.find({name: { $regex: '.*' + name + '.*' }}).exec((error, restaurant) => {
        if(!restaurant)
            return res.status(404).json({
                "error": "Restaurants not found"
            });
        else if (error)
            return res.status(500).json(error);
        else{
            res.status(200).json(restaurant);
        }
    })
};

module.exports = {
    dodajRestavracijo,
    readRestaurants,
    deleteRestaurant,
    updateResturant,
    getRestaurantById,
    getRestaurantBySearch
};