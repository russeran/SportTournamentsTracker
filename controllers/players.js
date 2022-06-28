const Team = require('../models/team')

module.exports = {
    create
};

function create(req, res) {
    Team.findById(req.params.id, function(err, team) {
        // We can push subdocs into mongoose arrays
        team.players.push(req.body)
            // save any changes to the parent doc
        team.save(function(err) {
            // Respond to the request in this case, we'll redirect
            res.redirect(`/teams/${team._id}`)
        })
    })
}