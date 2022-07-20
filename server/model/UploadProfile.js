const mongoose = require("mongoose");


const UploadProfileSchema = mongoose.Schema({
    uID: {
        type: String,
        require: true,
      },
    img: {
        data: Buffer,
        contentType: String
    },
});

const ProfileModel = mongoose.model("ProfileUploads", UploadProfileSchema);

module.exports = ProfileModel;