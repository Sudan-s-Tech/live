import React from "react";
import { Grid, Container } from "@material-ui/core";
import Box from "./components/box";
const styling = {
  background: "white",
  color: "#040404",
  fontFamily: "Montserrat",
  padding: "25px"
};

const Workshop = (props) => {
  return (
    <Container>
      <Container>
        <Grid xs={12} sm={12} md={12} lg={12} container style={styling}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h1>
              <center>
                <h3>Workshops</h3>
              </center>
            </h1>
          </Grid>
          <Grid container spacing={4} item xs={12} md={12} sm={12} lg={12}>
            {props.data.map((el) => (
              <Grid item xs={12} sm={12} lg={12} md={12}>
                <Box
                  image={el.image}
                  title={el.title}
                  speaker={el.name}
                  designation={el.designation}
                  date={el.date}
                  time={el.time}
                  youtube={el.youtube}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>{" "}
      </Container>
    </Container>
  );
};
export default Workshop;
