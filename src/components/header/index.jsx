import React from "react";
import { Grid } from "@material-ui/core";
const styling = {
  background: "#353030",
  color: "white",
  textAlign: "center",
  fontFamily: "sans-serif"
};
const Header = () => {
  return (
    <Grid container style={styling}>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>Live Workshops</h1>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid>
    </Grid>
  );
};
export default Header;
