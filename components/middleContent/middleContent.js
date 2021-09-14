import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";

function MiddleContent() {
  return (
    <div className="middleContentDiv">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            className="contentImage2"
            src="/contentImage2.jpg"
            alt="imagee"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="frame2" elevation={0}>
            <h3 className="title1">Our popular resturants</h3>
            <h1 className="title2">1000+</h1>
            <h2 className="title3">Our Delicious Food</h2>
            <p className="subtitle2">
              Food is a great way to meet people and make friends. When people
              share a meal, you can be sure the discussions about food,
              restaurants and recipes are going to be endless.
            </p>
            <button className="exploreButton">Explore Menu</button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MiddleContent;
