import React, { useEffect } from "react";

//design
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

//css
import "../css/globalpost.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getArtwork  } from "../helpers/redux-action/AccountAction";


export default function Post() {
  const dispatch = useDispatch();
  const get_artwork = useSelector((state) => state.accounts.user_artwork);
  
  useEffect(() => {
    dispatch(getArtwork())
  }, [get_artwork]);
 


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <div>
      {Object.values(get_artwork).map((item) => (
        <Box sx={{ m: "auto", p: "auto" }}>
          <Card sx={{ maxWidth: 800, m: "auto" }} key={item.u_id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.username}
              subheader={item.email}
            />
            <CardMedia
            // component="img"s
             //height="194"
            // image={item.img}
            // alt="Paella dish"
            >
              <InnerImageZoom zoomScale={6} src={item.imgurl}/>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.imgdesc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
}
