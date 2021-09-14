import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  reviewPaper: {
    height: "auto",
    width: "100%",
    marginLeft: "20px",
    marginRight: "20px",
    borderRadius: "6%",
    margin: "auto",
  },
}));

function ReviewCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Card className={classes.reviewPaper} elevation={3}>
          <div className="reviewContents">
            <Grid item xs={12}>
              <p className="review">{props.review}</p>
            </Grid>
            <Grid item xs={4} className="clientDPGrid">
              <img className="clientDP" src={props.clientDP}></img>
            </Grid>
            <Grid item xs={8} className="clientDetailsGrid">
              <Grid item xs={12}>
                <StarIcon className="starIcon" />
                <StarIcon className="starIcon" />
                <StarIcon className="starIcon" />
                <StarIcon className="starIcon" />
                <StarBorderIcon className="starIcon" />
              </Grid>
              <Grid item xs={12}>
                <h3 className="clientName">{props.clientName}</h3>
              </Grid>
              <Grid item xs={12}>
                <p className="clientPlace">{props.clientPlace}</p>
              </Grid>
            </Grid>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

export default ReviewCard;
