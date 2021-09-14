import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  cardPaper: {
    borderRadius: "10px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: 220,
    },
  },
}));

function MarketingCards(props) {
  const classes = useStyles();
  return (
    <div className="cardPaper">
      <Card className={classes.cardPaper} elevation={3}>
        <div className="miniCards">
          <img className="miniImage" src={props.miniImage}></img>
          <h2 className="miniTitle">{props.miniTitle}</h2>
          <p className="miniContent">{props.miniContent}</p>
        </div>
      </Card>
    </div>
  );
}

export default MarketingCards;
