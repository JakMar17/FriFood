const mongoose = require('mongoose');
const Uporabnik = mongoose.model('uporabniki');
const Komentar = mongoose.model('komentarji');

const narediKomentar = (req, res) => {

    //var value = req.body.newCommentText.toString();


    console.log("TAKLE MAMO");

    console.log("TREBA DODAT SE USERJA PRI KOMENTARJU");
    /*
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(passwd1);
    console.log(passwd2);

     */


    var komentar = new Komentar({
        opis: req.body.newCommentText.toString(),
        uporabnik: "5ddf2795be59539a039167f2"
    });

    // save model to database
    komentar.save(function (err) {
        if (err) return console.error(err);
        console.log(komentar.opis + " saved to DB");
    });

    res.redirect("/commentPage");
};

module.exports = {
    narediKomentar
};