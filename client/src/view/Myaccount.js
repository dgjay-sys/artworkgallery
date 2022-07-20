import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../helpers/redux-action/AccountAction";
import { updateN } from "../helpers/redux-action/AccountAction";
import { updateP } from "../helpers/redux-action/AccountAction";
import { updateE } from "../helpers/redux-action/AccountAction";
//design
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Navbar from "../Components/Navbar";

export default function Myaccount() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const get_id = useSelector((state) => state.accounts.loginAcc);
  const get_name = useSelector((state) => state.accounts.user_info);

  const [currentName, setCurrentName] = useState(get_name["uname"]);
  const [newName, setNewname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassord, setNewPassword] = useState("");
  const [currentEmail, setCurrentEmail] = useState(get_name["uemail"]);
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    dispatch(getInfo(get_id["_id"]));
  }, [get_name]);

  const updateName = () => {
    dispatch(updateN(get_id["_id"], currentName, newName));
    nav("/profile");
  };

  const updatePassword = () => {
    dispatch(updateP(get_id["_id"], currentPassword, newPassord));
    nav("/profile");
  };

  const updateEmail = () => {
    dispatch(updateE(get_id["_id"], currentEmail, newEmail));
    nav("/profile");
  };

  return (
    <div>
      <Navbar />
      <Box
        className="bshadow"
        sx={{ flexGrow: 1, mt: 10, ml: 50, mr: 50, bgcolor: "#C69B7B", p: 1 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="#3A3845"
              component="h6"
              sx={{
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 50,
                fontFamily: "monospace",
              }}
            >
              ACCOUNT SETTINGS
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 275,
                bgcolor: "#F7CCAC",
              }}
            >
              <CardContent>
                <item>
                  <Typography
                    sx={{ fontSize: 20, ml: 30 }}
                    color="#3A3845"
                    gutterBottom
                  >
                    Update Name
                  </Typography>
                  <Box
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      ml: 30,
                    }}
                  >
                    <TextField
                      id="filled-basic"
                      label="Name"
                      variant="filled"
                      value={currentName}
                      sx={{ m: 2 , bgcolor: "white" }}
                    />
                    <TextField
                      id="filled-basic"
                      label="New Name"
                      variant="filled"
                      sx={{ m: 2 ,bgcolor: "white" }}
                      onChange={(e) => {
                        setNewname(e.target.value);
                      }}
                    />
                    <Button
                      variant="outlined"
                      onClick={updateName}
                      sx={{ m: 2 }}
                    >
                      Update
                    </Button>
                  </Box>
                </item>

                <item>
                  <Typography
                    sx={{ fontSize: 20, ml: 30}}
                    color="#3A3845"
                    gutterBottom
                  >
                    Update Password
                  </Typography>
                  <Box
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      ml: 30
                    }}
                  >
                    <TextField
                      id="filled-password-input"
                      label="Current Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                      sx={{ m: 2, bgcolor: "white" }}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />
                    <TextField
                      id="filled-password-input"
                      label="New Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                      sx={{ m: 2, bgcolor: "white"}}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                    <Button
                      variant="outlined"
                      onClick={updatePassword}
                      sx={{ m: 2 }}
                    >
                      Update
                    </Button>
                  </Box>
                </item>

                <item>
                  <Typography
                    sx={{ fontSize: 20 , ml: 30}}
                    color="#3A3845"
                    gutterBottom
                  >
                    Update Email
                  </Typography>
                  <Box
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      ml: 30
                    }}
                  >
                    <TextField
                      id="filled-basic"
                      label="Current Email"
                      type="email"
                      autoComplete="current-password"
                      variant="filled"
                      sx={{ m: 2, bgcolor: "white" }}
                      value={currentEmail}
                    />
                    <TextField
                      id="filled-basic"
                      label="New Email"
                      type="email"
                      autoComplete="current-password"
                      variant="filled"
                      sx={{ m: 2 , bgcolor: "white"}}
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                    />
                    <Button
                      variant="outlined"
                      onClick={updateEmail}
                      sx={{ m: 2 }}
                    >
                      Update
                    </Button>
                  </Box>
                </item>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* 
      <Card
        className="bshadow"
        sx={{ minWidth: 275, mt: 10, ml: 50, mr: 50, bgcolor: "#F7CCAC" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
            Account Settings
          </Typography>
          <Container fixed sx={{ border: 1, p: 5 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#35858B"
            >
              Update Name
            </Typography>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                p: 1,
                m: 1,
                justifyContent: "center",
              }}
            >
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                disabled
                value={currentName}
                sx={{ m: 2 }}
              />
              <TextField
                id="filled-basic"
                label="New Name"
                variant="filled"
                sx={{ m: 2 }}
                onChange={(e) => {
                  setNewname(e.target.value);
                }}
              />
              <Button variant="outlined" onClick={updateName}>
                Update
              </Button>
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#35858B"
            >
              Change Password
            </Typography>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                p: 1,
                m: 1,
                justifyContent: "center",
              }}
            >
              <TextField
                id="filled-password-input"
                label="Current Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                sx={{ m: 2 }}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
              <TextField
                id="filled-password-input"
                label="New Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                sx={{ m: 2 }}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <Button variant="outlined" onClick={updatePassword}>
                Update
              </Button>
            </Box>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#35858B"
            >
              Change Email
            </Typography>

            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="filled-basic"
                label="Current Email"
                type="email"
                autoComplete="current-password"
                variant="filled"
                sx={{ m: 2 }}
                value={currentEmail}
                disabled
              />
              <TextField
                id="filled-basic"
                label="New Email"
                type="email"
                autoComplete="current-password"
                variant="filled"
                sx={{ m: 2 }}
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
              />
              <Button variant="outlined" onClick={updateEmail}>
                Update
              </Button>
            </Box>
          </Container>
        </CardContent>
      </Card> */}
    </div>
  );
}
