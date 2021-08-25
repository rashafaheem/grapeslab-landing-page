import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  imagePaper: {
    backgroundColor: "rgb(254 242 242)",
    width: "600px",
  },
}));

function topContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className="frame1" elevation={0}>
            <h1 className="title">We Serve The Taste You Love</h1>
            <p className="subtitle">
              Food is a great way to meet people and make friends. When people
              share a meal, you can be sure the discussions about food,
              restaurants and recipes are going to be endless.
            </p>
            <button className="findButton">Find A Food</button>
            <button className="searchButton">
              Search {<SearchIcon className="searchIcon" />}
            </button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.imagePaper} elevation={0}>
            <img className="contentImage" src="/contentImage.jpg" alt="image" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default topContent;
