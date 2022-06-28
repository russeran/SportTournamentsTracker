const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        }

        age: { type: Number },

        position: {
            type: String
            enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']
        },
        currentTeam: String,


    }, {
        timestamps: true
    }

)