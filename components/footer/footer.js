import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

function Footer() {
  return (
    <div className="footer">
      <Grid container className="footerGrid">
        <Grid item xs={12} lg={4} className="firstColumn">
          <div className="firstColumnDiv">
            <img className="Flogo" src="/logo.png" alt="logo" />
            <h1 className="Fgrapeslab">grapeslab</h1>
            <p className="Fsubtext">
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing elit.
            </p>
            <div className="socialLogos">
              <a>
                <img className="fb" src="./fb.png"></img>
              </a>
              <a>
                <img className="twitter" src="./twitter.png"></img>
              </a>
              <a>
                <img className="instagram" src="./instagram.png"></img>
              </a>
              <a>
                <img className="linkedIn" src="./linkedIn.png"></img>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={2} className="secondColumnGrid">
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
        </Grid>
        <Grid item xs={12} lg={2} className="secondColumnGrid">
          <div className="thirdColumn">
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
        </Grid>
        <Grid item xs={12} lg={2} className="secondColumnGrid">
          <div className="fourthColumn">
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
        </Grid>
        <Grid item xs={12} lg={2} className="secondColumnGrid">
          <div className="fifthColumn">
            <h3 className="h3">Get in touch</h3>
            <a>
              <p className="Fsubtext">hellograpeslab@gmail.com</p>
            </a>
            <a>
              <p className="Fsubtext">Sylhet, Bangladesh</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} lg={12}>
          <div className="divider">
            <Divider className="divider" />
          </div>
        </Grid>
        <Grid item xs={4} lg={6}>
          <p className="copyright">© 2021 Grapeslab. All rights reserved.</p>
        </Grid>
        <Grid item xs={8} lg={6}>
          <a>
            <img className="creditcard" src="./cc1.png"></img>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
