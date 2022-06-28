var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');


router.get('/', teamsCtrl.index);
router.get('/new', isLoggedIn, teamsCtrl.new);



module.exports = router;