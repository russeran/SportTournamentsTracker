var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/teams');
});


// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email'],
        // Optionally force pick account every time
        // prompt: "select_account"
    }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/teams',
        failureRedirect: '/teams'
    }
));

// OAuth logout route
router.get('/logout', function(req, res) {
    req.logout(function(err) {
        if (err) console.log(err)
        res.redirect('/teams')
    })
})


module.exports = router;