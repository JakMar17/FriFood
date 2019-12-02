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

var userJSON = require('../models/user');
var commentJSON = require('../models/comment');
let usrJSON = Object.assign({}, userJSON, commentJSON);
var userProfile = (req, res) => {
    res.render('userInfoPage', Object.assign({}, userJSON, commentJSON));
};
var userSetting = (req, res) => {
    res.render('userSetting', userJSON);
};

var commentsJSON = require('../models/coments');
var commentPage = (req, res) => {
    res.render('commentPage', commentsJSON);
};

var restaurantJSON = require('../models/restaurant');
var restaurantView = (req, res) => {
    res.render('RestaurantView.hbs', restaurantJSON);
};

module.exports = {
    index,
    users,
    login,
    register,
    commentPage,
    restaurantView,
    userProfile,
    userSetting
};