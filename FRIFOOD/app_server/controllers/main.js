/* GET home page. */
var index = (req, res) => {
    //res.render('index', { title: 'Express' });
    res.render('Login-register/Login', {registerPage: 'register'});
};

var users = (req, res) => {
    res.render('layout', { title: 'uporabniki' , body: "<p>kai ti </p>"});
};

var login = (req, res) => {
    res.render('Login-register/Login', {registerPage: 'register'});
};

var register = (req, res) => {
    res.render('Login-register/Register');
};

var commentPage = (req, res) => {
    res.render('Comment-Page/CommentPage');
};

var restaurantView = (req, res) => {
    res.render('Restaurant-View-Page/RestaurantView.hbs');
};

module.exports = {
    index,
    users,
    login,
    register,
    commentPage,
    restaurantView
};