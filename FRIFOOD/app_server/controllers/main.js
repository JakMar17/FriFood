/* GET home page. */
var index = (req, res) => {
    res.render('index', { title: 'Express' });
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


module.exports = {
    index,
    users,
    login,
    register
};