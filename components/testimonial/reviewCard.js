import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  reviewPaper: {
    height: "280px",
    width: "420px",
    marginLeft: "30px",
    borderRadius: "6%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "340px",
      height: "300px",
    },
  },
}));

function ReviewCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Card className={classes.reviewPaper} elevation={3}>
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
      </Card>
    </div>
  );
}

export default ReviewCard;
