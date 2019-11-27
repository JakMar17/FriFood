var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET users listing. */

router.get('/', ctrlMain.register);

router.post('/', function (req, res) {

    var name = req.body.name.toString();
    var surname = req.body.surname.toString();
    var email = req.body.email.toString();
    var passwd1 = req.body.passwd1.toString();
    var passwd2 = req.body.passwd2.toString();

    //console.log(name);
    //console.log(surname);
    //console.log(email);
    //console.log(passwd1);
    //console.log(passwd2);

    if (name.length != 0 && surname.length != 0)
    {
        console.log("name & surname OK");
        if(email.search("@") != -1 && passwd1 === passwd2)
        {
            console.log("registration OK")
            res.redirect("/login");
        }
    }
    res.status(401).send("Napaka pri prijavi");
})

module.exports = router;
