import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <Grid item xs={12} sm={12}>
          <Paper>
            <AppBar elevation={0}>
              <Toolbar className="toolbar">
                <img className="logo" src="/logo.png" alt="logo" />
                <h1 className="grapeslab">grapeslab</h1>
                <div className="headerItems">
                  <a className="headerMenu">Menu</a>
                  <a className="headerMenu">Offers</a>
                  <a className="headerMenu">Foods</a>
                  <a className="headerMenu">Services</a>
                  <a className="headerMenu">Restaurants</a>
                </div>
                <FavoriteIcon className="favIcon" />
                <ShoppingCartIcon className="cartIcon" />
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
