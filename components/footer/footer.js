import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  footerPaper: {
    backgroundColor: "#f6f6f6",
    height: "430px",
    width: "100%",
    marginBottom: "0px",
    marginTop: "400px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Paper className={classes.footerPaper} elevation={0}>
          <div className="footerDiv">
            <Grid item xs={12} lg={4} className="firstColumn">
              <div className="firstColumnDiv">
                <img className="Flogo" src="/logo.png" alt="logo" />
                <h1 className="Fgrapeslab">grapeslab</h1>
                <p className="Fsubtext">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipiscing elit.
                </p>
                <p className="Fsubtext">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipiscing elit.
                </p>

                <div className="socialButtons">{/* <button ></button> */}</div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} className="secondColumnGrid">
              <div className="">
                <div className="secondColumn">
                  <h3 className="h3">Support</h3>
                  <a>
                    <p className="Fsubtext">Account</p>
                  </a>
                  <a>
                    <p className="Fsubtext">Support Center</p>
                  </a>
                  <a>
                    <p className="Fsubtext">Feedback</p>
                  </a>
                  <a>
                    <p className="Fsubtext">Accebility</p>
                  </a>
                </div>
                <div className="secondColumn">
                  <h3 className="h3">Our Menu</h3>
                  <a>
                    <p className="Fsubtext">Special</p>
                  </a>
                  <a>
                    <p className="Fsubtext">Popular</p>
                  </a>
                  <a>
                    <p className="Fsubtext">Categories</p>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} className="secondColumnGrid">
              <div className="secondColumn">
                <h3 className="h3">Useful Links</h3>
                <a>
                  <p className="Fsubtext">Payment & Tax</p>
                </a>
                <a>
                  <p className="Fsubtext">Terms of Service</p>
                </a>
                <a>
                  <p className="Fsubtext">Privacy Policy</p>
                </a>
                <a>
                  <p className="Fsubtext">About Us</p>
                </a>
              </div>
              <div className="secondColumn">
                <h3 className="h3">Get in touch</h3>
                <a>
                  <p className="Fsubtext">hellograpeslab@gmail.com</p>
                </a>
                <a>
                  <p className="Fsubtext">Sylhet, Bangladesh</p>
                </a>
              </div>
            </Grid>
          </div>
          <Grid item xs={12} lg={12}>
            <div className="divider">
              <Divider className="divider" />
            </div>
            <p className="copyright">© 2021 Grapeslab. All rights reserved.</p>
            <a>
              <img className="creditcard" src="./cc1.png"></img>
            </a>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Footer;
