const ProfileModel = require("../model/UploadProfile");
const ArtworkModel = require("../model/UploadArtwork");

module.exports = {
  async uploadArtwork(req, res) {
    console.log(req.file)
    const uploadArtwork = new ArtworkModel({
      imgurl: `http://localhost:8080/ArtworkUpload/${req.file.filename}`,
      u_id: req.body.u_id,
      username: req.body.username,
      imgdesc: req.body.imgdesc,
      email: req.body.artistemail
    });
    await uploadArtwork
      .save()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    res.json(uploadArtwork);
  },

  async getArtwork(req, res) {
    ArtworkModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async getArtworkById(req, res){
    ArtworkModel.find({u_id: req.body.id }).then((result) => {
      res.json(result);
    }).catch((err) => { 
      console.log(err);
    })
  }
};
