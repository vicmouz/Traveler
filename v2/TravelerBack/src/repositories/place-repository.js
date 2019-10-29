const mongoose = require("mongoose");
const Place = mongoose.model("Place");

exports.getAll = async () => {
    return await Place.find({
        active: true
    });
}

exports.create = async (request_data) => {
    let place = new Place(request_data);
    await place.save();
}
