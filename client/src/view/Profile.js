import React, { useEffect, useState } from "react";
//design
import { Typography, Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Navbar from "../Components/Navbar";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Redux Actions
import { getInfo } from "../helpers/redux-action/AccountAction";

//Navigate
import { useNavigate } from "react-router-dom";

export default function Profile() {
  //useDispatch
  const dispatch = useDispatch();
  
  //useSelector
  const get_name = useSelector((state) => state.accounts.user_info);
  const get_id = useSelector((state) => state.accounts.loginAcc);
  const get_userType = useSelector((state) => state.accounts.loginAcc);
  //useNavigate
  const nav = useNavigate();

  const [type, setType] = useState("");


  useEffect(() => {
    dispatch(getInfo(get_id["_id"]));
    if (get_userType["usertype"] === "1") {
      setType("Artist");
    } else if (get_userType["usertype"] === "0") {
      setType("Client/User");
    }
  }, []);

  //functions

  return (
    <div>
      <Navbar />
      <Box
        className="bshadow"
        sx={{ flexGrow: 1, mt: 10, ml: 50, mr: 50, bgcolor: "#C69B7B" , p: 1}}
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
                fontFamily: "monospace"
              }}
            >
              Profile
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 200, height: 200, m: "auto" }}
            />
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="#3A3845"
              sx={{ p: 1, textAlign: "center",  fontFamily: "monospace" , color: "#3A3845"}}
            >
              {get_name["uname"]}
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Card sx={{ minWidth: 275 , bgcolor: "#F7CCAC" , textAlign: "center" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="#3A3845" gutterBottom>
                  Other information
                </Typography>
                <item>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      color="#3A3845"
                      sx={{ p: 2 ,  fontFamily: "monospace" }}
                    >
                      Age :{get_name["uage"]}
                    </Typography>
                  </Box>
                </item>

                <item>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      color="#3A3845"
                      sx={{ p: 2 ,  fontFamily: "monospace" }}
                    >
                      Email: {get_name["uemail"]}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      color="#3A3845"
                      sx={{ p: 2 ,  fontFamily: "monospace"}}
                    >
                      User Type : {type}
                    </Typography>
                  </Box>
                </item>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* <Card
        className="bshadow"
        sx={{ minWidth: 275, mt: 10, ml: 50, mr: 50, bgcolor: "#C69B7B" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="#3A3845" gutterBottom>
            PROFILE
          </Typography>
          <Box
            sx={{
              bgcolor: "#F7CCAC",
              border: 1,
              p: 10,
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 0, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <item>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                  />
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    color="#3A3845"
                    sx={{ p: 1, m: 1 }}
                  >
                    {get_name["uname"]}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{ ml: 2, mt: 1, backgroundColor: "#3A3845" }}
                    onClick={gotoSettings}
                  >
                    <Typography variant="h6" color="#E6BA95" component="h6">
                       EDIT PROFILE
                    </Typography>
                  </Button>
                </item>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#3A3845"
                      gutterBottom
                    >
                      Other information
                    </Typography>
                    <item>
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          color="#3A3845"
                          sx={{ p: 2 }}
                        >
                          Age :{get_name["uage"]}
                        </Typography>
                      </Box>
                    </item>

                    <item>
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          color="#3A3845"
                          sx={{ p: 2 }}
                        >
                          Email: {get_name["uemail"]}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          color="#3A3845"
                          sx={{ p: 2 }}
                        >
                          User Type : {type}
                        </Typography>
                      </Box>
                    </item>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card> */}
    </div>
  );
}
