var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// rout to restaurant list
router.get('/', ctrlMain.restaurantAdd);

module.exports = router;