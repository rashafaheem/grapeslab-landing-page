import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ReviewCard from "./reviewCard.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  subPaper: {
    backgroundColor: "rgb(254 242 242)",
    height: "400px",
    width: "90%",
    // float: "right",
    marginTop: "90px",
    marginLeft: "160px",
    // marginRigt: "70px",
    [theme.breakpoints.down("md")]: {
      // marginLeft: "-100px",
    },
  },
  testimonialCard: {
    backgroundColor: "rgb(254 242 242)",
  },

  reviewDiv: {
    display: "flex",
    // [theme.breakpoints.down("md")]: {
    //   marginLeft: "30px",
    // },
  },
}));

function Testimonial() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Grid container className={classes.subPaper}>
        <Grid item xs={12} lg={12}>
          <Card className={classes.testimonialCard} elevation={0}>
            <div className="testDiv">
              <h3 className="title51">Testimonial</h3>
              <Grid item xs={12}>
                <h2 className="title52">
                  What Our Happy Client <br />
                  Says
                </h2>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid container className={classes.reviewContainer}>
          <div className={classes.reviewDiv}>
            <Grid item xs={12} lg={6} className="reviewDiv">
              <ReviewCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                clientDP="./dp1.jpg"
                clientName="Micheal Joy Das"
                clientPlace="San Jose, South Dakota 83475"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ReviewCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                clientDP="./dp2.jpg"
                clientName="Jerome Bell"
                clientPlace="Gray St. Utica, Pennsylvania 57867"
              />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Testimonial;
