var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET users listing. */

router.get('/', ctrlMain.restaurantView);

router.post('/', ctrlMain.restaurantViewSpecific)

module.exports = router;
