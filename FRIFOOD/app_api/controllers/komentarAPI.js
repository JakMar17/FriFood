const mongoose = require('mongoose');
var url  = require('url');

const Uporabnik = mongoose.model('uporabniki');
const Komentar = mongoose.model('komentarji');


const posodobiKomentar = (req, res) => {


    console.log("UREJANJE KOMENTARJA->"+req.body.komentarID);
    console.log("TEST->"+req.body.test);
    console.log(req.body.newCommentText);

    var id = req.body.komentarID.toString();

    var ObjectId = (require('mongoose').Types.ObjectId);

    Komentar.updateOne({ "_id": ObjectId(id)}, { $set: { "opis": req.body.newCommentText.toString() } }, function (err, result) {

        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);

            res.redirect(req.body.returnADR.toString());
        }

    });
};

const brisiKomentar = (req, res) =>
{

    /*
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    console.log(url_parts.pathname);
    */

    console.log(req.body.komentarID);
    var id = req.body.komentarID.toString();

    var ObjectId = (require('mongoose').Types.ObjectId);

    Komentar.deleteOne({ "_id": ObjectId(id)}, function (err, result)
    {

        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
            res.redirect(req.body.returnADR.toString());
        }

    });
};

const vrniKomentarje = (req, res) => {

    Komentar
        //.find( { email: req.params.email.toString() }  )
        .find()
        .exec((napaka, komentarji) => {
            if (!komentarji) {
                return res.status(404).json({
                    "error": "Ne najdem komentarjev"
                });
            } else if (napaka) {
                return res.status(500).json(napaka);
            }
            res.status(200).json(komentarji);
        });
};

const narediKomentar = (req, res) => {

    //var value = req.body.newCommentText.toString();


    console.log("TAKLE MAMO");
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
    vrniKomentarje,
    narediKomentar,
    brisiKomentar,
    posodobiKomentar
};