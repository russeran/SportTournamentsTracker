const Team = require('../models/team');
const Game = require('../models/game');

module.exports = {
    new: newTeam,
    create,
    index,
    show,
    delete: deleteTeam,
    edit,
    update: updateTeam
}

function newTeam(req, res) {
    res.render('teams/new');
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const team = new Team(req.body);
    team.save(function(err) {
        if (err) {
            return res.redirect('/teams/new');
        }
        res.redirect(`/teams/${team._id}`);
    })

}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { teams });
    });
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        Game.find({ _id: { $nin: team.members }, user: req.user._id }, function(err, games) {
            res.render('teams/show', { team, games });
        });
    })
}

function deleteTeam(req, res) {
    Team.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/teams');
    })
}

function edit(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/edit', { team });
    })
}

function updateTeam(req, res) {
    Team.findByIdAndUpdate(req.params.id, req.body, function(err) {
        res.redirect(`/teams/${req.params.id}`);
    })
}