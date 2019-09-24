const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.getAll = async () => {
    return await User.find({
        active: true
    });
}

exports.create = async (request_data) => {
    let user = new User(request_data);
    await user.save();
}

exports.update = async (request_id, request_data) => {
    await User.findByIdAndUpdate(request_id, {
        $set: {
            first_name: request_data.first_name,
            last_name: request_data.last_name,
            password: request_data.password,
            email: request_data.email
        }
    });
}

exports.delete = async (request_id) => {
    await User.findByIdAndDelete({ _id: request_id })
    //console.log(User.findByIdAndDelete({_id: request_id}))
}

exports.authenticate = async (request_data) => {
    return await User.findOne({
        email: request_data.email,
        password: request_data.password
    });
}