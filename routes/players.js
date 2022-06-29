const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/players');

router.post('/teams/:id/players', playerCtrl.create);



module.exports = router;