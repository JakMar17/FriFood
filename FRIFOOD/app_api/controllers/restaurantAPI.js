const mongoose = require('mongoose');
var url  = require('url');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const Restaurant = mongoose.model('restaurant');
const Comments = mongoose.model('comments');

const dodajRestavracijo = (req, res) => {
    let student = req.body.student;

    //console.log(req.body);

    /*if (!req.body.icon || Object.keys(req.body.icon).length === 0 || !req.body.front || Object.keys(req.body.front).length === 0) {
        console.log("Oh snap, no files were uploaded.");
        return res.status(400).send('No files were uploaded.');
    }*/

    let monday = req.body.monday;
    let tuesday = req.body.tuesday;
    let wednesday = req.body.wednesday;
    let thursday = req.body.thursday;
    let friday = req.body.friday;
    let saturday = req.body.saturday;
    let sunday = req.body.sunday;
    console.log("timeTable");
    let commentSection = new Comments([]);
    let restaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address,
        rating: 0,
        mealPrice: req.body.mealPrice,
        student: student,
        studentPrice: req.body.studentPrice,
        timeTable: {
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday
        },
        description: req.body.description,
        comments: commentSection,
        icon: '',
        front: '',
    });
    console.log("objekt");
    console.log(restaurant._id);
    console.log("C:/Users/Žiga/Desktop/asciiLetters.bmp");

    restaurant.save((err, rez) => {
        if (err) console.log(err);
        else {
            console.log(rez);
            return res.status(200).json(rez);
        }
    });

    //console.log(req.body.front);
    //restaurant.img.contentType = 'image/png';


    /*restaurant.img.data = fs.readFile(imgPath, (err, rez) => {



    });*/



    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    /*let naslovna_slika = req.body.front;
    let ns_t = req.body.front.name.split('.');
    let naslovnaPath = "./public/restaurant-images/" + restaurant._id + '-ns.' + ns_t[ns_t.length - 1];
    // Use the mv() method to place the file somewhere on your server
    // naslovna_slika.mv(naslovnaPath, function(err) {
    //     if (err){
    //         return res.status(500);
    //     }
    //     console.log("FILE UPLOADED");
    // });

    let ikonaSlika = req.body.icon;
    let ns_i = req.body.icon.name.split('.');

    let ikonaPath = "./public/restaurant-images/" + restaurant._id + '-ik.' + ns_i[ns_i.length - 1];

    // Use the mv() method to place the file somewhere on your server
    // ikonaSlika.mv(ikonaPath, function(err) {
    //     if (err){
    //         console.log("FUCK");
    //         return res.status(500);
    //     }
    //     console.log("FILE UPLOADED");
    // });

    ikonaPath = "./restaurant-images/" + restaurant._id + '-ik.' + ns_i[ns_i.length - 1];
    naslovnaPath = "./restaurant-images/" + restaurant._id + '-ns.' + ns_t[ns_t.length - 1];

    restaurant.icon = ikonaPath;
    restaurant.front = naslovnaPath;

    // save model to database
    restaurant.save().exec((error, restaurant) => {
        if (error) {
            console.log(error);
            return res.status(500).json(error);
        }else
            res.status(200).json(restaurant);
    })*/
};

const readRestaurants = (req, res) => {
    Restaurant
        .find()
        .exec((error, restaurant) => {
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

const deleteRestaurant = (req, res) => {

    //console.log(req.body);

    var id = req.body.restaurantID.toString();
    var ObjectID = mongoose.Types.ObjectId;

    Restaurant.deleteOne(
        {"_id": ObjectID(id)}, function (error, result) {
            if(error) return console.log(error);
            else res.redirect(req.body.returnADR.toString());
        }
    );
};

const deleteRestaurantByID = (req, res) => {
    let id = req.params.id;
    let ObjectID = mongoose.Types.ObjectId;

    Restaurant.deleteOne(
        {"_id": ObjectID(id)}, function (error, result) {
            if(error) return error;
            else return null;
        }
    )
}

const updateResturant = (req, res) => {

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
    Restaurant.findOne({_id: req.params.id}).exec((error, restaurant) => {
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
    getRestaurantBySearch,
    deleteRestaurantByID
};