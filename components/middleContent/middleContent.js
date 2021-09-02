import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  imagePaper2: {
    height: "800px",
    width: "600px",
    marginTop: "130px",
  },
}));

function MiddleContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.imagePaper2} elevation={0}>
            <img
              className="contentImage2"
              src="/contentImage2.jpg"
              alt="imagee"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className="frame2" elevation={0}>
            <h3 className="title1">Our popular resturants</h3>
            <h1 className="title2">1000+</h1>
            <h2 className="title3">Our Delicious Food</h2>
            <p className="subtitle2">
              Food is a great way to meet people and make friends. When people
              share a<br /> meal, you can be sure the discussions about food,
              restaurants and recipes are
              <br /> going to be endless.
            </p>
            <button className="exploreButton">Explore Menu</button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MiddleContent;
