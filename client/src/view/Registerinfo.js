import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//redux actio
import { createInfo } from "../helpers/redux-action/AccountAction";

//design
import {
  Button,
  TextField,
  Box,
  Grid,
  Container,
  Link,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Avatar from "@mui/material/Avatar";
import "../css/register.css";

export default function Registerinfo() {
  //Dispatch & Selector
  const dispatch = useDispatch();
  const get_ID = useSelector((state) => state.accounts.account);
  //variable data
  const [uname, setUname] = useState("");
  const [uage, setUage] = useState("");
  const [uemail, setUemail] = useState("");

  const nav = useNavigate();

  //button functions
  const signUp = () => {
    dispatch(createInfo(get_ID["_id"],uname, uage, uemail));
    nav("/")
  };

  //copywrite
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Group 5 © "}
        <Link color="inherit" href="">
          Artwork Gallery
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <div className="bimage">
      <Box className="bgimage">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="bgcontent"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: 1,
              padding: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#826F66" }}>
              <AccountCircleSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name:"
                autoFocus
                onChange={(evt) => {
                  setUname(evt.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Age"
                label="Age:"
                type="Age"
                onChange={(evt) => {
                  setUage(evt.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Email"
                label="Email"
                type="Email"
                onChange={(evt) => {
                  setUemail(evt.target.value);
                }}
              />
              <Button
                className="bttnNext"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, bgcolor: "#3A3845", color: "white" }}
                onClick={signUp}
              >
                Sign Up
              </Button>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid item xs></Grid>
                <Grid item xs>
                  <Copyright />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
