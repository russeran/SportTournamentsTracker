const Team = require('../models/team');
const Game = require('../models/game');

module.exports = {
    new: newTeam,
    create,
    index,
    show,
}

function newTeam(req, res) {
    res.render('teams/new');
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const team = new Team(req.body);
    team.save(function(err) {
        if (err) {
            return res.redirect('/teams/new');
        }
        res.redirect('/teams');
    })

}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { teams });
    });
}




function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        Game.find({ team: team._id }, function(err, games) {
            res.render('teams/show', { team, games });
        });
    })
}