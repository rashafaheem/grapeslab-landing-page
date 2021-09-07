import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "rgb(254 242 242)",
    height: "820px",
    width: "100%",
    marginTop: "80px",
  },
  frame3: {
    backgroundColor: "rgb(254 242 242)",
    height: "540px",
    marginTop: "110px",
    marginLeft: "80px",
    marginRight: "40px",
    textAlign: "left",
  },

  imagePaper3: {
    backgroundColor: "rgb(254 242 242)",
    height: "650px",
    width: "600px",
  },
}));

function carouselFrame() {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div>
      <div>
        <Grid className={classes.grid} container spacing={0}>
          <Grid item xs={6} lg={6}>
            <Paper className={classes.frame3} elevation={0}>
              <h3 className="title1">20% off in your First order</h3>
              <h2 className="title3">
                Gobi Manchurian Ribs Lamb And Mutton Rosemary Herb
              </h2>
              <h2 className="cutPrice">$48</h2>
              <h3 className="offPrice">$39</h3>
              <br />
              <div className="buttons">
                <button className="itemButton">
                  {
                    <RemoveIcon
                      className="removeIcon"
                      onClick={handleClick2}
                      fontSize="small"
                    />
                  }
                  {counter} {""}
                  {
                    <AddIcon
                      className="addIcon"
                      onClick={handleClick1}
                      fontSize="small"
                    />
                  }
                </button>
                <button className="addButton">Add To Cart</button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Paper className={classes.imagePaper3} elevation={0}>
              <img
                className="contentImage3"
                src="/contentImage3.jpg"
                alt="imagee"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default carouselFrame;
