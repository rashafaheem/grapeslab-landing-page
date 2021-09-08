import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  imagePaper: {
    backgroundColor: "rgb(254 242 242)",
    height: "800px",
    width: "600px",
  },
}));

function topContent() {
  const classes = useStyles();
  return (
    <div className="topContentDiv">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} className="topGrid">
          <Paper className="frame1" elevation={0}>
            <h1 className="title">We Serve The Taste You Love</h1>
            <p className="subtitle">
              Food is a great way to meet people and make friends. When people
              share a meal, you can be sure the discussions about food,
              restaurants and recipes are going to be endless.
            </p>
            <Grid item xs={12} lg={6} spacing={4} className="topGrid">
              <button className="findButton">Find A Food</button>
              <button className="searchButton">
                Search {<SearchIcon className="searchIcon" fontSize="small" />}
              </button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} className="topGrid">
          <img className="contentImage" src="/contentImage.jpg" alt="image" />
        </Grid>
      </Grid>
    </div>
  );
}

export default topContent;
