const express = require("express");
const api = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

api.use(express.json());
api.use(cors());
const bodyParser = require("body-parser");



//upload image
const multer = require("multer");
const path = require("path");


app.use




const storage = multer.diskStorage({
  destination: "./ArtworkUpload",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});



//Controller
const Account = require("./Controller/AccountController");
const UpdateAccount = require("./Controller/UpdateAccController");
const UploadP = require("./Controller/UploadController");
const { appendFile } = require("fs");
//API's
api.post("/newaccount", Account.createAccount);
api.post("/newinformation", Account.createInformation);
api.post("/getdata", Account.fetchAccount);
api.post("/getinfo", Account.fetchInfo);
api.post("/updatename", UpdateAccount.updateName);
api.post("/updatepassword", UpdateAccount.updatePassword);
api.post("/updateemail", UpdateAccount.updateEmail);
api.use("/ArtworkUpload", express.static(path.resolve(__dirname,  "ArtworkUpload")));
api.post("/uploadartwork", upload.single("image"), UploadP.uploadArtwork)
api.get("/getartwork", UploadP.getArtwork)
api.post("/getartworkbyid" , UploadP.getArtworkById);



//Database Connection
mongoose.connect(process.env.HOST).then(() => {
  api.listen(process.env.PORT