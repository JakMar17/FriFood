const mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/FRIFOOD';
var url  = require('url');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const Restaurant = mongoose.model('restaurant');
const Comments = mongoose.model('comments');
const Uporabnik = mongoose.model('uporabniki');

const dropDatabase = (req, res) => {
    console.log("Trying to delete database");
    if (req.body.validation === 'THIS_IS_VALIDATION_KEY') {
        console.log("Got valid key: " + req.body.validation);
        if (process.env.NODE_ENV === 'production') {
            dbURI = process.env.MONGODB_CLOUD_URI;
        }
        mongoose.connection.db.dropDatabase()
        console.log("DONE");
        res.status(203);
    } else {
        return res.status(400).json({
            "error": "Not a valid request"
        });
    }

};

const fillDatabase = (req, res) => {

    // NAPOLNE BAZO Z DVEMA RESTAVRACIJAMA, PRI VSAKI EN KOMENTAR!
    console.log("Trying to fill database");
    if (req.body.validation === 'THIS_IS_VALIDATION_KEY') {
        console.log("Got valid key 2: " + req.body.validation);


        var commentSection = new Comments([]);

        var uporabnik = new Uporabnik(
            {
                name: 'Janez',
                surname: 'Novak',
                email: 'janez.novak@gmail.com',
                passwd: 'supergeslo'
            }
        );

        uporabnik.save(function (err) {
            if (err) return console.error(err);
            console.log("ADDING USER SUCCESSFUL");
        });

        var restavracija = new Restaurant({
            name: "Restavracija 123",
            address: "Večna pot 113",
            rating: 3,
            mealPrice: 6.30,
            student: true,
            studentPrice: 2.20,
            timeTable: {
                monday: "8-15",
                tuesday: "8-15",
                wednesday: "8-15",
                thursday: "8-15",
                friday: "8-15",
                saturday: "ZAPRTO",
                sunday: "ZAPRTO"
            },
            description: "Restavracija v drugem nadstropju objekta X. Poceni, dobro in včasih iz vrečke.",
            comments: commentSection,
            icon: '../images/ikona123.png',
            front: '../images/naslovna123.png',
        });
        // save model to database
        restavracija.save(function (err) {
            if (err) return console.error(err);
            console.log("ADDING RESTAURANT ONE SUCCESSFUL");
        });

        var commentSection2 = new Comments([]);
        var restavracija2 = new Restaurant({
            name: "FRIFood",
            address: "Večna pot 113",
            rating: 5,
            mealPrice: 3.99,
            student: true,
            studentPrice: 0.99,
            timeTable: {
                monday: "8-20",
                tuesday: "8-20",
                wednesday: "8-20",
                thursday: "8-20",
                friday: "8-20",
                saturday: "8-15",
                sunday: "ZAPRTO"
            },
            description: "Restavracija v najboljšem delu kompleksa, avla FRI. Poceni, dobro in vedno iz vrečke.",
            comments: commentSection2,
            icon: '../images/ikonafri.png',
            front: '../images/naslovnafri.png',
        });
        // save model to database
        restavracija2.save(function (err) {
            if (err) return console.error(err);
            console.log("ADDING RESTAURANT TWO SUCCESSFUL");
        });

        var comments = new Comments({
            restaurant: restavracija._id.toString(),
            comment: "Včasih meh, vedno pa super zaposleni!",
            date: Date.now(),
            rating: 3,
            author: uporabnik
        });

        comments.save(function (err) {
            if (err) return console.error(err);
            console.log("ADDING COMMENT ONE SUCCESSFUL");
        });

        var comments2 = new Comments({
            restaurant: restavracija2._id.toString(),
            comment: "VEDNO NAJBOLJŠI WOHOOO!",
            date: Date.now(),
            rating: 5,
            author: uporabnik
        });

        comments2.save(function (err) {
            if (err) return console.error(err);
            console.log("ADDING COMMENT TWO SUCCESSFUL");
        });

    } else {
        return res.status(400).json({
            "error": "Not a valid request"
        });
    }

};

module.exports = {
    dropDatabase,
    fillDatabase
};