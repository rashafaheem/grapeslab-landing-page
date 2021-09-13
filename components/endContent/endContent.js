import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  imagePaper4: {
    marginTop: "100px",
  },
  frame4: {
    marginTop: "130px",
  },
}));

function EndContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} className={classes.imagePaper4}>
          <img className="contentImage4" src="/contentImage4.jpg" />
        </Grid>
        <Grid item xs={12} lg={6} className={classes.frame4}>
          <div className="frame4Div">
            <h3 className="title41">Get to easyily find best food</h3>
            <h2 className="title42">Download The Grapeslab App</h2>
            <p className="subtitle">
              Download The Pathao App And Order Your Food Online To Get The
              Fastest Delivery.
            </p>
          </div>
          <Grid item xs={12}>
            <img className="appStore" src="/appStore.png" />
            <img className="playStore" src="/playStore.png" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default EndContent;
