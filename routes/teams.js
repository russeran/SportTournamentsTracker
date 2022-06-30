var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');


router.get('/', teamsCtrl.index);
router.get('/new', isLoggedIn, teamsCtrl.new);
router.post('/', isLoggedIn, teamsCtrl.create);
router.get('/:id', isLoggedIn, teamsCtrl.show);
router.delete('/:id', isLoggedIn, teamsCtrl.delete);
router.get('/:id/edit', isLoggedIn, teamsCtrl.edit);
router.put('/:id', isLoggedIn, teamsCtrl.update);


module.exports = router;