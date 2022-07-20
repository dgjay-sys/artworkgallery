import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
//design
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

// import {
//   AppBar,
//   Box,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
// } from "@mui/material";
import ColorLensSharpIcon from "@mui/icons-material/ColorLensSharp";
import { SwipeableTemporaryDrawer } from "./Drawer";

//redux actions
import { getInfo } from "../helpers/redux-action/AccountAction";

//utility
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const isLogin = useSelector((state) => state.accounts.isLogin);
  const get_name = useSelector((state) => state.accounts.user_info);
  const get_id = useSelector((state) => state.accounts.loginAcc);
  useEffect(() => {
    if(isLogin === true){
      dispatch(getInfo(get_id["_id"]));
    }
  }, []);

  const DisplayName = () => {
    if (!_.isEmpty(get_name)) {
      return (
        <>
          <Typography variant="p" color="white" component="p">
            {get_name["uname"]}
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <Typography variant="p" color="white" component="p">
            {get_name["uname"]}
          </Typography>
        </>
      );
    }
  };

  const gotoHome = () => {
    nav("/homepage");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#826F66" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ColorLensSharpIcon
              sx={{ fontSize: 40, display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={gotoHome}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Artwork Gallery
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                ))
              </Menu>
            </Box>
            <ColorLensSharpIcon
              sx={{ fontSize: 40, display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Artwork Gallery
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                sx={{ color: "inherit" }}
                onClick={gotoHome}
              >
                Home
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <DisplayName />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <SwipeableTemporaryDrawer />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#826F66" }}>
          <Toolbar variant="dense">
            <ColorLensSharpIcon sx={{ fontSize: 40 }} />
            <Typography variant="h5" color="#F7CCAC" component="h5">
              ArtGallery
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                p: 2,
                ml: 169,
                borderRadius: 1,
              }}
            >
              <item>
                <Button variant="text" sx={{ color: "#F7CCAC" }}>
                  About us
                </Button>
              </item>

              <item>
                <Button
                  variant="text"
                  sx={{ color: "#F7CCAC" }}
                  onClick={gotoHome}
                >
                  Home
                </Button>
              </item>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <item>
                <SwipeableTemporaryDrawer />
              </item>
              <item>
                <DisplayName />
              </item>
            </Box>
          </Toolbar>
        </AppBar>
      </Box> */}
    </div>
  );
}
