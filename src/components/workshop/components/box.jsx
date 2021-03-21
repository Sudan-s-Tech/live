import React from "react";
import { Grid } from "@material-ui/core";
const Box = (props) => {
  return (
    <>
      <Grid container spacing={2} style={{ marginBottom: "26px" }}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <img src={props.image} height="100%" width="100%" alt={props.title} />
        </Grid>
        <Grid container item xs={12} sm={12} lg={8} md={8}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h1> {props.title}</h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ fontWeight: "1800" }}
          >
            <b>{props.speaker}</b>, <b>{props.designation}</b> <br />
            <b>{props.date}</b> <br />
            <b>{props.time}(IST)</b> <br />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <br />

          <span
            style={{
              borderRadius: "5px",
              color: "white",
              background: "#E95B5B",
              padding: "5px"
            }}
          >
            <a href={props.youtube} style={{textDecoration:"none"}} >Youtube</a>
          </span>
        </Grid>
      </Grid>
    </>
  );
};
export default Box;
