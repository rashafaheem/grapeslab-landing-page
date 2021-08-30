import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  foodPaper: {
    height: "350px",
    width: "370px",
    borderRadius: "10px",
    marginRight: "30px",
  },
  ratingPaper: {
    height: "30px",
    width: "75px",
    padding: "6px",
    marginTop: "-45px",
    marginLeft: "270px",
    float: "left",
  },
}));

function FoodCard(props) {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <Grid item xs={12} lg={4} className="foodPaper">
        <Paper className={classes.foodPaper} elevation={3}>
          <div className="foodCards">
            <div className={props.show ? "show" : null}>
              <img className="tagImage" src={props.tag}></img>
            </div>
            <p className="discount">{props.discount}</p>
            <img className="foodImage" src={props.foodImage}></img>
            <h2 className="foodTitle">{props.foodTitle}</h2>
            <p className="foodPlace">{props.foodPlace}</p>
            <div>
              <Paper className={classes.ratingPaper} elevation={3}>
                <StarIcon className="starIcon" />
                <p className="foodRating">{props.foodRating}</p>
              </Paper>
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default FoodCard;
