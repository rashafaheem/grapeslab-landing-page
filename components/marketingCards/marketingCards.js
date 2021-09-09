import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  cardPaper: {
    borderRadius: "10px",
    width: "372px",
    [theme.breakpoints.down("md")]: {
      maxWidth: 200,
    },
  },
}));

function MarketingCards(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="cardPaper">
      <Grid item xs={12} lg={4}>
        <Card className={classes.cardPaper} elevation={3}>
          <div className="miniCards">
            <img className="miniImage" src={props.miniImage}></img>
            <h2 className="miniTitle">{props.miniTitle}</h2>
            <p className="miniContent">{props.miniContent}</p>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

export default MarketingCards;
