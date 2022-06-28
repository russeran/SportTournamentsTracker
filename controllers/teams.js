var Team = require('../models/team');


module.exports = {
    index,
}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'All Teams', teams });
    });
}