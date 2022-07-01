const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },

        age: { type: Number },

        position: {
            type: String,
            enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        currentTeam: String,


    }, {
        timestamps: true
    }

)


const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    worldCupTitles: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },

    group: {
        type: String,
        enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },

    continent: {
        type: String,
        enum: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
    },

    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String,


    players: [playerSchema]

}, {
    timestamps: true
})

module.exports = mongoose.model('Team', teamSchema);