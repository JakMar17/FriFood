const mongoose = require('mongoose');
const Uporabnik = mongoose.model('uporabniki');

const vrniUporabnika = (req, res) => {

    Uporabnik
        .find( { email: req.params.email.toString() }  )
        .exec((napaka, uporabnik) => {
            if (!uporabnik) {
                return res.status(404).json({
                    "error": "Ne najdem uporabnika"
                });
            } else if (napaka) {
                return res.status(500).json(napaka);
            }
            res.status(200).json(uporabnik);
        });
};

const narediUporabnika = (req, res) => {

    var name = req.body.name.toString();
    var surname = req.body.surname.toString();
    var email = req.body.email.toString();
    var passwd1 = req.body.passwd1.toString();
    var passwd2 = req.body.passwd2.toString();

    /*
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(passwd1);
    console.log(passwd2);

     */

    if (name.length != 0 && surname.length != 0)
    {
        console.log("name & surname OK");
        if(email.search("@") != -1 && passwd1 === passwd2)
        {
            var user = new Uporabnik({
                name: name,
                surname: surname,
                email: email,
                passwd: passwd1
            })

            // save model to database
            user.save(function (err) {
                if (err) return console.error(err);
                console.log(user.name + " saved to DB");
            });

            console.log("registration OK")
            res.redirect("/login");
        }
    }
};

module.exports = {
    vrniUporabnika,
    narediUporabnika
};