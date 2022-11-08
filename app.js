var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var italianDish = require('./models/italianDish');

// Mongo DB Connection
require('dotenv').config(); 
const connectionString =  process.env.MONGO_CON;  
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }); 

//Get the default connection 
var db = mongoose.connection; 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var italianDishRouter = require('./routes/italianDish');
var gridBuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/italianDish', italianDishRouter);
app.use('/gridbuild', gridBuildRouter);
app.use('/selector', selectorRouter);

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

async function recreateDB() {
  // Delete everything 
  await italianDish.deleteMany();

  let instance1 = new italianDish({
          dishName: "pizza", mainIngredient: 'dough',
          dishPrice: 4.99
      });
  let instance2 = new italianDish({
        dishName: "aranchini", mainIngredient: 'rice',
        dishPrice: 5.76
    });
  let instance3 = new italianDish({
      dishName: "lasagna", mainIngredient: 'noodles',
      dishPrice: 3.45
  });
  instance1.save(function (err, doc) {
      if (err) return console.error(err);
      console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
