import React from "react";
import CarouselFrame from "./carouselFrame.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Grid from "@material-ui/core/Grid";

function carousel() {
  return (
    <div className="carouselDiv">
      <Grid container>
        <Carousel
          className="carousel"
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          <div>
            <CarouselFrame />
          </div>
          <div>
            <CarouselFrame />
          </div>
          <div>
            <CarouselFrame />
          </div>
          <div>
            <CarouselFrame />
          </div>
        </Carousel>
      </Grid>
    </div>
  );
}

export default carousel;
