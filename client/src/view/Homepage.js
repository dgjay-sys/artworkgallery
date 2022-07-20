import React, { useState } from "react";
//design
import { Box, Typography, Button, Container } from "@mui/material";

//Redux

//page
import Globalpost from "../Components/Globalpost";
import Navbar from "../Components/Navbar";
import ImageCollection from "../Components/ImageCollection";
import "../css/homepage.css";

export default function Homepage() {
  //useDispatch
  const [isArtist, setIsArtist] = useState(false);
  const [toggleView, setToggleView] = useState("col");

  const DisplayCollection = () => {
    if (toggleView === "col") {
      return (
        <>
          <ImageCollection />
        </>
      );
    } else {
      return (
        <>
          <Globalpost />
        </>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "transparent",
          borderRadius: 1,
        }}
      >
        <item>
          <Button
            variant="contained"
            className="btnn"
            onClick={() => setToggleView("col")}
            sx={{ visibility: isArtist, backgroundColor: "#3A3845" }}
          >
            <Typography
              variant="h6"
              color="#E6BA95"
              component="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              My Collection
            </Typography>
          </Button>
        </item>
        <item>
          <Button
            className="btnn"
            variant="contained"
            sx={{ backgroundColor: "#3A3845" }}
            onClick={() => setToggleView("global")}
          >
            <Typography
              variant="h6"
              color="#E6BA95"
              component="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              Global Post
            </Typography>
          </Button>
        </item>
      </Box>

      <Container fixed>
        <Box>
          <DisplayCollection />
        </Box>
      </Container>
    </div>
  );
}
