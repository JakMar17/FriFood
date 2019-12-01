var express = require('express');
var router = express.Router();
var ctrlUporabniki = require('../controllers/uporabnikAPI');

router.get('/uporabniki/:email', ctrlUporabniki.vrniUporabnika);

router.post('/uporabniki', ctrlUporabniki.narediUporabnika);

module.exports = router;