import React, { useState } from "react";

import Post from "./Post";
//design
import { Box, Button, Grid, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

//uti
import { useDispatch, useSelector } from "react-redux";
import { uploadArtwork } from "../helpers/redux-action/AccountAction";
//design 2

//css
import "../css/globalpost.css";

export default function Globalpost() {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const get_id = useSelector((state) => state.accounts.loginAcc);
  const get_info = useSelector((state) => state.accounts.user_info);

  const [uploadFile, setUploadFile] = useState("");
  const onfileChange = (evt) => {
    setUploadFile(evt.target.files[0]);
  };
  const UploadArtwork = () => {
    const formData = new FormData();
    formData.append("image", uploadFile);
    formData.append("u_id", get_id["_id"]);
    formData.append("username", get_info["uname"]);
    formData.append("imgdesc", description);
    formData.append("artistemail", get_info["uemail"]);
    dispatch(uploadArtwork(formData));
  };

  var DisplayUpload = () => {
    if (get_id["usertype"] === "1") {
      return (
        <>
          <Button variant="contained" component="span" onClick={UploadArtwork}>
            Upload button
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button variant="contained" component="span" onClick={UploadArtwork} disabled>
            Upload button
          </Button>
        </>
      );
    }
  };

  return (
    <div>
      <Box
        className="bshadow"
        sx={{ flexGrow: 1, mt: 10, mx: 20, mb: 5, bgcolor: "white", p: 1 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ bgcolor: "#C69B7B", border: 1 }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Upload Artwork
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ m: "auto" }}
        >
          <Grid item xs={12}>
            <input
              type="file"
              onChange={(evt) => {
                onfileChange(evt);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              style={{ width: 775, height: 150 }}
              onChange={(evt) => {
                setDescription(evt.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <DisplayUpload/>
          </Grid>
        </Grid>
      </Box>
      <Post />
    </div>
  );
}
