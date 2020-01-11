const passport = require('passport');
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('uporabniki');

const registracija = (req, res) => {
    if (!req.body.name || !req.body.surname || !req.body.email || !req.body.passwd1) {
        return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    const uporabnik = new Uporabnik();
    uporabnik.name = req.body.name;
    uporabnik.surname = req.body.surname;
    uporabnik.email = req.body.email;
    var vrednosti = uporabnik.nastaviGeslo(req.body.passwd1);
    uporabnik.nakljucnaVrednost = vrednosti[0];
    uporabnik.zgoscenaVrednost = vrednosti[1];
    uporabnik.save(napaka => {
        if (napaka) {
            res.status(500).json(napaka);
        } else {
            res.status(200).json({"žeton": uporabnik.generirajJwt()})
        }
    });
};

const prijava = (req, res) => {
    if (!req.body.email || !req.body.passwd) {
        return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    passport.authenticate('local', (napaka, uporabnik, informacije) => {
        if (napaka)
            return res.status(500).json(napaka);
        if (uporabnik) {
            res.status(200).json({"žeton": uporabnik.generirajJwt()});
        } else {
            res.status(401).json(informacije);
        }
    })(req, res);
}

module.exports = {
    registracija,
    prijava
};