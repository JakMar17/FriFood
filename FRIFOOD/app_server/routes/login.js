var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET users listing. */

router.get('/', ctrlMain.login);

router.post('/', function (req, res) {
    if (req.body.email === 'v@v' && req.body.passwd === 'v') {
        res.redirect('/');
    } else {
        res.status(401).send("Wrong Email or Password");
    }
})

module.exports = router;
