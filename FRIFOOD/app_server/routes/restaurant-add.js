var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// rout to restaurant list
router.get('/', ctrlMain.restaurantAdd);

// Require the controllers WHICH WE DID NOT CREATE YET!!
var restaurant_controller = require('../controllers/restaurant-add');
router.post('/restaurant-add', restaurant_controller.restaurant_create);

module.exports = router;
