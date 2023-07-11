

const { Schema, model } = require("mongoose");

const movieSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    cast: [
        {
        type: Schema.Types.ObjectId,
        ref:"Celebrity"
        }
    ]

})

const movieModel = model('movie', movieSchema);

module.exports = movieModel;
