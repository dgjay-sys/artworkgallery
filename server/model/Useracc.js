const mongoose = require("mongoose");


const AccountSchema = mongoose.Schema({
    user: {
        type: String,
        require: true,
      },
    password: {
        type: String,
        require: true,
    },
    usertype:{
        type: String,
        require: true,
    }

});

const AccountModel = mongoose.model("Accounts", AccountSchema);

module.exports = AccountModel;