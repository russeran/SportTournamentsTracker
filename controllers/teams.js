var Team = require('../models/team');


module.exports = {
    index,
    show,
    new: newTeam,
}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'All Teams', teams });
    });
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'New Team' });
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/show', { title: team.name, team });
    });
}