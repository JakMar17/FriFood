const mongoose = require('mongoose');
const uporabniki = mongoose.model('uporabniki');

const vrniUporabnika = (req, res) => {
    console.log(uporabniki);
    console.log(req.params.id.toString());

    /*
    uporabniki.count({}, function( err, count){
        console.log( "Number of users:", count );
    })
     */

    uporabniki
        .findById(req.params.id.toString())
        .exec((napaka, uporabnik) => {
            if (!uporabnik) {
                return res.status(404).json({
                    "sporočilo":
                        "Ne najdem uporabnika"
                });
            } else if (napaka) {
                return res.status(500).json(napaka);
            }
            res.status(200).json(uporabnik);
        });
};

const narediUporabnika = (req, res) => {
    res.status(200).json({"status": "uspešno"});
};

module.exports = {
    vrniUporabnika,
    narediUporabnika
};