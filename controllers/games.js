const Team = require('../models/team');
const Game = require('../models/game');

module.exports = {
    create,
    new: newGame,
}

function create(req, res) {
    const teamId = req.params.id
    req.body.team = teamId
    Game.create(req.body, function(err, game) {
        res.redirect(`/teams/${teamId}`)
    })
}

function newGame(req, res) {
    res.render('games/new', { teamId: req.params.id })
}