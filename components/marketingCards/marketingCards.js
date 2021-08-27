import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  cardPaper: {
    width: "372px",
    borderRadius: "10px",
  },
}));

function MarketingCards(props) {
  const classes = useStyles();
  return (
    <div className="cardPaper">
      <Grid item xs={12} lg={4}>
        <Paper className={classes.cardPaper} elevation={3}>
          <div className="miniCards">
            <img className="miniImage" src={props.miniImage}></img>
            <h2 className="miniTitle">{props.miniTitle}</h2>
            <p className="miniContent">{props.miniContent}</p>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default MarketingCards;
