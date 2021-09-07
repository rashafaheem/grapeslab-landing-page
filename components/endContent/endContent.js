import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  imagePaper4: {
    width: "600px",
    marginTop: "100px",
  },
  frame4: {
    width: "302px",
    marginTop: "130px",
    marginLeft: "80px",
  },
}));

function EndContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.imagePaper4} elevation={0}>
            <img className="contentImage4" src="/contentImage4.jpg" />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.frame4} elevation={0}>
            <h3 className="title41">Get to easyily find best food</h3>
            <h2 className="title42">Download The Grapeslab App</h2>
            <p className="subtitle">
              Download The Pathao App And Order Your Food Online To Get The
              Fastest Delivery.
            </p>
            <div>
              <img className="appStore" src="/appStore.png" />
              <img className="playStore" src="/playStore.png" />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default EndContent;
