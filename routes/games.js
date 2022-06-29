const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');


router.get('/teams/:id/games/new', gamesCtrl.new);
router.post('/teams/:id/games', gamesCtrl.create);

module.exports = router;