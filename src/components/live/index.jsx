import React from "react";
import { Grid, Container } from "@material-ui/core";
import LIVEIcon from "./icon.svg";
const styling = {
  background: "#D8D8D8",
  color: "#040404",
  fontFamily: "Montserrat",
  padding: "25px"
};

const Header = () => {
  return (
    <Grid xs={12} sm={12} md={12} lg={12} container style={styling}>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <h1>
          <center>
            <h1>
              <img alt="." src={LIVEIcon} height="50px" width="50px" /> Live NOW
            </h1>
            <iframe
              title="YoutubeLIVE"
              style={{ boxShadow: "-20px 20px #2D3C72" }}
              width="80%"
              height="350px"
              src="https://www.youtube.com/embed/live_stream?channel=UCws_V5zg2Kk7DZt7MAeEoxA "
              frameborder="0"
              allowfullscreen
            ></iframe>
          </center>
        </h1>
      </Grid>
    </Grid>
  );
};
export default Header;
