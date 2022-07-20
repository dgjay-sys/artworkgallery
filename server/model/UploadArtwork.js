const mongoose = require("mongoose");

const UploadArtwokSchema = mongoose.Schema({

  imgurl: {
    type: String,
    require: true,
  },
  u_id:{
    type: String,
    require:true,
  },
  username: {
    type: String,
    require: true,
  },
  imgdesc: {
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
  }
});

const ArtworkModel = mongoose.model("ArtworkUploads", UploadArtwokSchema);

module.exports = ArtworkModel;
