const mongoose = require('mongoose');
const AccountModel = require('../model/Useracc');

const InfoSchema = mongoose.Schema({
    uID: {
        type: mongoose.SchemaTypes.ObjectId, ref:AccountModel
    },
    uname: {
        type: String,
        require: true,
    },
    uage: {
        type: String,
        require: true,
    },
    uemail: {
        type: String,
        require: true,
    }
});

const InfoModel = mongoose.model("Informations" ,  InfoSchema);
module.exports = InfoModel;