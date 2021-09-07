import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  reviewPaper: {
    height: "280px",
    width: "420px",
    marginLeft: "30px",
    borderRadius: "6%",
  },
}));

function ReviewCard(props) {
  const classes = useStyles();
  return (
    <div className="setofCardsDiv">
      <Paper className={classes.reviewPaper} elevation={3}>
        <div className="reviewContents">
          <p className="review">{props.review}</p>
          <img className="clientDP" src={props.clientDP}></img>
          <div className="clientDetailsDiv">
            <div className="starts">
              <StarIcon className="starIcon" />
              <StarIcon className="starIcon" />
              <StarIcon className="starIcon" />
              <StarIcon className="starIcon" />
              <StarBorderIcon className="starIcon" />
            </div>
            <h3 className="clientName">{props.clientName}</h3>
            <p className="clientPlace">{props.clientPlace}</p>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ReviewCard;
