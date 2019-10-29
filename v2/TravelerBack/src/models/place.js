const mongoose = require('mongoose');
//const Stop = mongoose.model("Stop");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    // o _id é criado automaticamente
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required:true
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Place', PlaceSchema);