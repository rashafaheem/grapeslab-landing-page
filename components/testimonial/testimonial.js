import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ReviewCard from "./reviewCard.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  testimonialCard: {
    backgroundColor: "rgb(254 242 242)",
    width: "100%",
    height: "100%",
    marginTop: "90px",
    marginLeft: "140px",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
    },
  },

  reviewDiv: {
    paddingLeft: "200px",
    marginTop: "-80px",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-220px",
    },
  },
}));

function Testimonial() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Card className={classes.testimonialCard} elevation={0}>
            <div className="testDiv">
              <h3 className="title51">Testimonial</h3>
              <h2 className="title52">
                What Our Happy Client <br />
                Says
              </h2>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.reviewDiv}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
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
        </Grid>
      </div>
    </div>
  );
}

export default Testimonial;
