var express = require('express');
var api = require('./api.route');
const bodyParser = require('body-parser');
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const bcrypt = require('bcrypt')
const { registerNewUser, submitFeedback } = require('./../lib/database');
const router = express.Router();

router.use('/api', api);
router.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Route to access home or login page
 * Access http://localhost:<<PORT>>
 */
router.get('/',
    function (req, res) {
        res.render('index.ejs');
    });

/**
 * Route to access home or register page
 * Access http://localhost:<<PORT>>/register
 */
router.get('/register',
function (req, res) {
    res.render('register.ejs');
});

router.get('/feedback',
function (req, res) {
    res.render('feedback.ejs');
});

/**
 * Route to redirect user to error page
 * Access http://localhost:<<PORT>>/error
 */
router.get('/error',
    function (req, res) {
        res.render('error.ejs');
    });

/**
 * Route to post user request to login page
 * http://localhost:<<PORT>>/login
 */
router.post('/login', async (req, res, next) => {
    passport.authenticate('local',
       async (info, user, err) => {
            if (err) {
                console.error("Error while Logging in", err);
                return  res.redirect('/error');
        }
            if (!user) {
                return res.redirect('/error');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                return res.redirect(307, '/chat');
            });

        })(req, res, next);
});

router.post('/register',registerNewUser);

router.post('/submitFeedback', submitFeedback);

/**
 * Route to post user request to chat page
 * http://localhost:<<PORT>>/chat
 */
router.post('/chat', function (req, res) {
    res.render('chat.ejs', {
        username: req.body.name,
        emailId: req.body.email
    });
});

module.exports = router;