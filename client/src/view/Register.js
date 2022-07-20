import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux actions
import { createAcc } from "../helpers/redux-action/AccountAction";

//design
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Link,
  Grid,
  Container,
} from "@mui/material";
import "../css/register.css";

export default function Register() {
  //data vaariable
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [userType, setUserType] = useState(0);

  //Navigate
  const nav = useNavigate();

  //Dispatch variable
  const dispatch = useDispatch();

  //button function
  const registerAccount = () => {
    if (repassword === password) {
      dispatch(createAcc(username, password, userType));
      nav("/register/info");
    } else {
      alert("your password that you enter is not same");
    }
  };

  const logIn = () => {
    nav("/");
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
    <div>
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
                label="Username"
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
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Re-Type-Password"
                type="password"
                onChange={(evt) => {
                  setRepassword(evt.target.value);
                }}
              />
              <Box sw={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup
                      defaultValue="client"
                      name="controlled-radio-buttons-group"
                      row
                    >
                      <FormControlLabel
                        value="client"
                        control={<Radio />}
                        label="Client / User"
                        onClick={(e) => {
                          setUserType(0);
                        }}
                      />
                      <FormControlLabel
                        value="artist"
                        control={<Radio />}
                        label="Artist"
                        onClick={(e) => {
                          setUserType(1);
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Box>
              <Button
                className="bttnNext"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, bgcolor: "#3A3845", color: "white" }}
                onClick={registerAccount}
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
                <Grid item xs>
                  <Link href="#" variant="body2" onClick={logIn}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
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
