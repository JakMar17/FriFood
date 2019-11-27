/* GET home page. */
var index = (req, res) => {
    //res.render('index', { title: 'Express' });
    res.render('RestaurantView.hbs');
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

var commentPage = (req, res) => {
    res.render('CommentPage');
};

var restaurantView = (req, res) => {
    res.render('RestaurantView.hbs');
};

module.exports = {
    index,
    users,
    login,
    register,
    commentPage,
    restaurantView
};