const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    date: Date,

    team2: { type: String, required: true },
    stadium: {
        type: String,
        enum: ['Vodafone Park', 'Camp Nou', 'Barnabeu', 'Anfield', "St. James's", 'Old Trafford', 'Etihad', 'Emirates', 'Alianz Arena']
    },

    team: { type: Schema.Types.ObjectId, ref: 'Team' }
}, { timestamps: true })

module.exports = mongoose.model('Game', gameSchema);