var express = require('express');
var router = express.Router();

var title = "Countdown App";

// show the index page
router.get(['/', '/index'], function (req, res) {
    res.render('index', {title});
});

// show the index page
router.get('/register', function (req, res) {
    res.render('register', {title});
});

// show the index page
router.get('/running', function (req, res) {
    res.render('running', {title, remainingTime:req.query.countdownTime});
});

module.exports = router;