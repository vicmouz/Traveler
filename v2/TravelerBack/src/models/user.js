const mongoose = require('mongoose');
//const Stop = mongoose.model("Stop");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // o _id é criado automaticamente
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);