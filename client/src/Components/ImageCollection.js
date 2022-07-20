import React, { useEffect } from "react";

//design
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
  Container,
  Input,
  Button,
} from "@mui/material";

//css
import "../css/globalpost.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getArtworkById } from "../helpers/redux-action/AccountAction";

export default function ImageCollection() {
  const get_id = useSelector((state) => state.accounts.loginAcc);
  const get_artworkbyid = useSelector((state) => state.accounts.user_getartworkbyid)
  var dispatch = useDispatch();
  useEffect(() => {
     dispatch(getArtworkById(get_id["_id"]))
  }, []);

  return (
    <div>
      <ImageList sx={{}}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">My Collection</ListSubheader>
        </ImageListItem>
        {Object.values(get_artworkbyid).map((item) => (
          <ImageListItem className="imgpost" cakey={item.u_id}>
            <InnerImageZoom zoomScale={6} src={item.imgurl} />
            <ImageListItemBar
              title={item.username}
              subtitle={item.imgdesc}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
