var createError = require('http-errors');
var express = require('express');
const fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
const bodyParser = require('body-parser');


require('./app_api/models/db');
require('./app_api/models/restaurants');

//var indexRouter = require('./app_server/routes/index');
var indexApi = require('./app_api/routes/index');
var loginRouter = require('./app_server/routes/login');

var registerRouter = require('./app_server/routes/register');
var commentPageRouter = require('./app_server/routes/commentPage');
var restaurantViewRouter = require('./app_server/routes/restaurantView');
var restaurantListRouter = require('./app_server/routes/restaurant-list');
var userProfileRouter = require('./app_server/routes/userProfile');
var userSettingRouter = require('./app_server/routes/userSetting');

var adminOverviewRouter = require('./app_server/routes/adminOverview');
var adminLocationsRouter = require('./app_server/routes/adminLocations');
var adminRatesRouter = require('./app_server/routes/adminRates');
var adminCommentsRouter = require('./app_server/routes/adminComments');
var adminUsersRouter = require('./app_server/routes/adminUsers');
var adminWaitinglistRouter = require ('./app_server/routes/adminWaitingList');

var restaurantAddRouter = require('./app_server/routes/restaurant-add');

var databaseRouter = require('./app_server/routes/database');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(__dirname + '/app_server/views/partials');
app.set('view engine', 'hbs');

require('./app_server/views/helpers/handlebar-helpers.js');
require('./public/javascripts/restaurant-list-helper');

app.use(bodyParser.json());
app.use(fileUpload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public', 'build')));

app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  //res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', indexApi);

//app.use('/', indexRouter);

app.use('/login', loginRouter);
app.use('/loginCheck', loginRouter);

app.use('/register', registerRouter);

app.use('/commentPage', commentPageRouter);
app.use('/addComment', commentPageRouter);

app.use('/restaurantView', restaurantViewRouter);

app.use('/restaurant-list', restaurantListRouter);
app.use('/profile', userProfileRouter);
app.use('/userSetting', userSettingRouter);

app.use('/admin', adminOverviewRouter);
app.use('/admin-locations', adminLocationsRouter);
app.use('/admin-rates', adminRatesRouter);
app.use('/admin-comments', adminCommentsRouter);
app.use('/admin-users', adminUsersRouter);
app.use('/admin-waitinglist', adminWaitinglistRouter);

app.use('/restaurant-add', restaurantAddRouter);
//app.use('/restaurantData', restaurantAddRouter);

app.use('/db', databaseRouter);

app.post('/restaurantData', function(req, res){
  var data = req.body;
  let template = hbs.compile(data.param2);
  //console.log(data.param1);
  res.send(template({foundRestaurant: data.param1}));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
