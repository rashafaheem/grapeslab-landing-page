import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  foodPaper: {
    borderRadius: "13px",
    height: "360px",
    width: "370px",
    margin: "auto",
  },
  ratingPaper: {
    height: "30px",
    width: "75px",
    padding: "6px",
  },
  foodImage: {
    height: "200px",
    width: "100%",
    marginTop: "10px",
    borderRadius: "10px",
  },
}));

function FoodCard(props) {
  const classes = useStyles();
  return (
    <div className="foodCardDiv">
      <Grid container>
        <Card className={classes.foodPaper} elevation={3}>
          <div className="foodCards">
            {props.tag ? (
              <div>
                <img className="tagImage" src={props.tag}></img>
              </div>
            ) : (
              <></>
            )}
            <p className="discount">{props.discount}</p>
            <Grid item xs={12} lg={12}>
              <img className={classes.foodImage} src={props.foodImage}></img>
            </Grid>
            <Grid item xs={12} lg={12}>
              <h2 className="foodTitle">{props.foodTitle}</h2>
            </Grid>
            <Grid item xs={12} lg={6}>
              <p className="foodPlace">{props.foodPlace}</p>
            </Grid>
            <div>
              <div className="ratingCardDiv">
                <Grid item xs={12} lg={6}>
                  <Card className={classes.ratingPaper} elevation={3}>
                    <StarIcon className="starIcon" />
                    <p className="foodRating">{props.foodRating}</p>
                  </Card>
                </Grid>
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

export default FoodCard;
