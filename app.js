var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var DialogFlow = require('./lib/NLP');
const uuid = require('uuid');
var socketio = require('./lib/socket')(io, uuid, DialogFlow);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const passport = require('passport');
var config = require("./Utilities/config");
const UserDetails = require("./Models/UserDetail");
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes/index.route"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//Setting up the static files location
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname));


//Setting connection with Mongo DB for authentication purpose
mongoose.connect(config.mongoDB_connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Authentication using passport
// passport.use(UserDetails.createStrategy());
const authenticateUser = async (user, password, done) => {
    if (user == null) {
      return done(null, false, { message: 'No user with that username' })
    }
    const userData = await UserDetails.findOne({ username: user });
    try {
      if (await bcrypt.compare(password, userData.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
        console.error("Error in authenticateUser", e) 
      return done(e)
    }
  }
passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

//Setting Ejs View Engine
app.set('view engine', 'ejs');


//Turning on the server to receive the request on specified Port
http.listen(config.port, () => {
    console.log(config.serverListenMessage);
});