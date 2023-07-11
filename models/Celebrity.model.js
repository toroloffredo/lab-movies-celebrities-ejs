//  Add your code here

const { Schema, model } = require("mongoose");



const celebSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true,
        unique: true
    },
    catchPhrase: {
        type: String,
    }
});

const celebModel = model('celeb', celebSchema);

module.exports = celebModel;
