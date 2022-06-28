const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const teamSchema = new Schema({
    name: {
        String,
        required: true
    },

    wCupTitles: {
        Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },

    group: {
        String,
        enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },

    continet: {
        String,
        enum: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
    },

    squad: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    {
        timestamps: true
    }

})

module.exports = mongoose.model('Team', teamSchema);