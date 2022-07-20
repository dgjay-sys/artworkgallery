import React, { useState , useEffect} from "react";

import { useNavigate } from "react-router-dom";
import _ from "lodash";
//Redux
import { useDispatch, useSelector } from "react-redux";
//action
import { accountLogin } from "../helpers/redux-action/AccountAction";

//design
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Typography from "@mui/material/Typography";

//css design
import "../css/loginpage.css";

export default function Loginpage() {
  //Dispatch
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.accounts.isLogin);
  //Data Variable
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  

  //button fuction
  const  logIn = () => {
    dispatch(accountLogin(username, password));
   
    if (isLogin === true) {
       nav("/homepage"); 
    }
  };

  const register = () => {
    nav("/register");
  };

  //design
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="">
          Artwork Gallery
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid className="bimage" item xs={false} sm={4} md={7} />
        <Grid
          sx={{ bgcolor: "#F7CCAC" }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={10}
          square
        >
          <Box
            className="bshadow"
            sx={{
              my: 25,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              backgroundColor: "white"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#826F66" }}>
              <AccountCircleSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />
              <Button
                fullWidth
                variant="outline"
                className="buttonsignin"
                sx={{
                  mt: 3,
                  mb: 2,
                  border: 1,
                  bgcolor: "#3A3845",
                  color: "white",
                }}
                onClick={logIn}
              >
                Sign In
              </Button>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <Link href="#" variant="body2" onClick={register}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
