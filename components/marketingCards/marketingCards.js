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
      <Paper className={classes.cardPaper} elevation={3}>
        <div className="miniCards">
          <img className="miniImage" src={props.miniImage}></img>
          <h2 className="miniTitle">{props.miniTitle}</h2>
          <p className="miniContent">{props.miniContent}</p>
        </div>
      </Paper>
    </div>
  );
}

export default MarketingCards;
