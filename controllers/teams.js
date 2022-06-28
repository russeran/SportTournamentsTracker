var Team = require('../models/team');


module.exports = {
    index,
    show,
    new: newTeam,
    create,
}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'World Cup Teams', teams });
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

function create(req, res) {
    for (let key in req.body) {
        req.body[key] = req.body[key].trim();
    }
    const team = new Team(req.body);
    team.save(function(err) {
        if (err) {
            return res.redirect('/teams/new');
        }
        res.redirect('/teams');
    })

}