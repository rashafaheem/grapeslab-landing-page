import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ReviewCard from "./reviewCard.js";

const useStyles = makeStyles((theme) => ({
  subPaper: {
    backgroundColor: "rgb(254 242 242)",
    height: "400px",
    width: "90%",
    float: "right",
    position: "absolute",
    marginTop: "-230px",
    marginLeft: "160px",
    marginRigt: "50px",
  },
}));

function Testimonial() {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} lg={12}>
        <Paper className={classes.subPaper} elevation={0}>
          <div className="testDiv">
            <h3 className="title51">Testimonial</h3>
            <h2 className="title52">
              What Our Happy Client <br />
              Says
            </h2>
          </div>
        </Paper>
        <div className="testimonialCard">
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            clientDP="./dp1.jpg"
            clientName="Micheal Joy Das"
            clientPlace="San Jose, South Dakota 83475"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            clientDP="./dp2.jpg"
            clientName="Jerome Bell"
            clientPlace="Gray St. Utica, Pennsylvania 57867"
          />
        </div>
      </Grid>
    </div>
  );
}

export default Testimonial;
