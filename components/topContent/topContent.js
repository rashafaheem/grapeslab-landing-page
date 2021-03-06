import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  frame1: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "90px",
    margin: "auto",
  },
  contentImage: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
}));

function topContent() {
  const classes = useStyles();
  return (
    <div className="topContentDiv">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className="topGrid">
          <Card className={classes.frame1} elevation={0}>
            <h1 className="title">We Serve The Taste You Love</h1>
            <p className="subtitle">
              Food is a great way to meet people and make friends. When people
              share a meal, you can be sure the discussions about food,
              restaurants and recipes are going to be endless.
            </p>
            <Grid item xs={12} lg={6} className="topGrid">
              <button className="findButton">Find A Food</button>
              <button className="searchButton">
                Search {<SearchIcon className="searchIcon" fontSize="small" />}
              </button>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className="topGrid">
          <div className="contentImageDiv">
            <img
              className={classes.contentImage}
              src="/contentImage.jpg"
              alt="image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default topContent;
