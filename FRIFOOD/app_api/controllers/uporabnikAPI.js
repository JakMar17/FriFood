const mongoose = require('mongoose');
const Uporabnik = mongoose.model('uporabniki');

const vrniUporabnika = (req, res) => {
    Uporabnik
        .findOne( { email: req.params.email.toString() }  )
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

const getUserById = (req, res) => {
    var userID = req.params.userID;

    Uporabnik.findOne({"_id": userID}, function (error, user) {
        if (!user)
            return res.status(404).json({
                "error": "User not found"
            });
        else if (error)
            return res.status(500).json(error);
        else {
            return res.status(200).json(user);
        }
    })
};

const narediUporabnika = (req, res) => {

    var name = req.body.name.toString();
    var surname = req.body.surname.toString();
    var email = req.body.email.toString();
    var passwd1 = req.body.passwd1.toString();
    var passwd2 = req.body.passwd2.toString();


    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(passwd1);
    console.log(passwd2);


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
            user.save(function (err, rez) {
                if (err)
                    res.status(500).json(err);
                else
                    res.status(200).json(rez)
            });
        }
    }
};


const getUsers = (req, res) => {
    Uporabnik.find().exec(
        (error, users) => {
            if (!users) {
                return res.status(404).json({
                    "error": "users not found"
                });
            } else if (error) {
                return res.status(500).json(error);
            } else {
                res.status(200).json(users);
            }
        }
    );
};

const updateUser = (req, res) => {

    var id = req.body.userID.toString();
    var ObjectId = (mongoose.Types.ObjectId);

    Uporabnik.updateOne({"_id": id}, {$set:
            {
                "name": req.body.name.toString(),
                "surname": req.body.surname.toString(),
                "email": req.body.email.toString()
            }
    }, function (error, result) {
        if (error)
            return res.status(500).json(error);
        else {

            res.redirect(req.body.returnADR.toString());
        }
    });
};

module.exports = {
    vrniUporabnika,
    narediUporabnika,
    getUserById,
    getUsers,
    updateUser
};