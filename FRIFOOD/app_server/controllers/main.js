/* GET home page. */
var index = (req, res) => {
    //res.render('index', { title: 'Express' });
    res.redirect("/restaurantView");
};

var users = (req, res) => {
    res.render('layout', { title: 'uporabniki' , body: "<p>kai ti </p>"});
};

var login = (req, res) => {
    res.render('Login', {registerPage: 'register'});
};

var register = (req, res) => {
    res.render('Register');
};

var commentsJSON = require('../models/coments');
var commentPage = (req, res) => {
    res.render('commentPage', commentsJSON);
};

var restaurantJSON = require('../models/restaurant');
var restaurantView = (req, res) => {
    res.render('RestaurantView.hbs', restaurantJSON);
};

var restaurantsJSON = require('../models/restaurants');
const restaurantList = (req, res) => {
    res.render('restaurant-list.hbs', restaurantsJSON);
};

const restaurantViewSpecific = (req, res) => {
    res.render('RestaurantView.hbs', restaurantsJSON[1], { title : "Restaurant View" })
};

module.exports = {
    index,
    users,
    login,
    register,
    commentPage,
    restaurantView,
    restaurantList,
    restaurantViewSpecific
};