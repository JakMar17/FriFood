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
var userProfile = (req, res) => {
    res.render('userInfoPage', Object.assign({}, userJSON, commentJSON));
};
var userSetting = (req, res) => {
    res.render('userSetting', Object.assign({}, userJSON, commentJSON));
};

var commentsJSON = require('../models/coments');
var commentPage = (req, res) => {
    res.render('CommentPage', commentsJSON);
};

var restaurantJSON = require('../models/restaurant');
var restaurantView = (req, res) => {
    res.render('RestaurantView.hbs', restaurantJSON);
};

var restaurantsJSON = require('../models/restaurants');
const restaurantList = (req, res) => {
    res.render('restaurant-list.hbs', restaurantsJSON);
};

var adminOverview = (req, res) => {
    res.render('admin_overview.hbs');
};

var adminLocations = (req, res) => {
    res.render('admin_locations.hbs');
};

var adminRates = (req, res) => {
    res.render('admin_rates.hbs')
};

var adminComments = (req, res) => {
    res.render('admin_comments.hbs');
};

var adminUsers = (req, res) => {
    res.render('admin_users.hbs');
};

var adminWaitingList = (req, res) => {
    res.render('admin_waitingList');
};

module.exports = {
    index,
    users,
    login,
    register,
    commentPage,
    restaurantView,
    restaurantList,
    userProfile,
    userSetting,
    adminOverview,
    adminLocations,
    adminRates,
    adminComments,
    adminUsers,
    adminWaitingList
};