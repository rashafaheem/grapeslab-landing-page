import React from "react";
import CarouselFrame from "./carouselFrame.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function carousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        className="carousel"
        responsive={responsive}
        showDots={true}
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
    </div>
  );
}

export default carousel;
