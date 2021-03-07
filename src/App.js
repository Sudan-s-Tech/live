import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import Live from "./components/live";
import Workshops from "./components/workshop";
import { useTracks } from "./data/airtable";
export default function App() {
  const data = useTracks();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Header />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Live />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Workshops data={data}/>
        </Grid>
      </Grid>
    </>
  );
}
