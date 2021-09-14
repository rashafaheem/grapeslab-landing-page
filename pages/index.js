import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import MarketingCards from "../components/marketingCards/marketingCards.js";
import MiddleContent from "../components/middleContent/middleContent.js";
import FoodCard from "../components/foodCard/foodCard.js";
import Carousel from "../components/carousel/carousel.js";
import EndContent from "../components/endContent/endContent.js";
import Testimonial from "../components/testimonial/testimonial.js";
import Footer from "../components/footer/footer.js";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  return (
    <div className="">
      <AppBar />
      <div>
        <TopContent />
        <div className="miniCard">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <MarketingCards
                miniImage="./deliveryImage.jpg"
                miniTitle="Fastest Delivery"
                miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MarketingCards
                miniImage="./foodImage.jpg"
                miniTitle="Best Taste"
                miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MarketingCards
                miniImage="./offerImage.jpg"
                miniTitle="Best Offers In Town!"
                miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
              />
            </Grid>
          </Grid>
        </div>
        <MiddleContent />
        <br />
        <div className="foodCardss">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                tag="./tag.svg"
                discount="20% Off"
                foodImage="./burgerImage.jpg"
                foodTitle="Food Point Resturant (Chinese) "
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.8/5"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                foodImage="./food2.jpg"
                foodTitle="Red Chilli Mini Chinese & Restora"
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.7/5"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                tag="./tag.svg"
                discount="10% Off"
                foodImage="./food3.jpg"
                foodTitle="Nilabali Hotel & Resturant"
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.6/5"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                foodImage="./food4.jpg"
                foodTitle="Ma Restora & Kebab House"
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.8/5"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                tag="./tag.svg"
                discount="25% Off"
                foodImage="./food5.jpg"
                foodTitle="Wedges Mama Food Corner"
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.9/5"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FoodCard
                className="foodCard1"
                tag="./tag.svg"
                discount="15% Off"
                foodImage="./food6.jpg"
                foodTitle="Black Birch Kitchen & Lounge"
                foodPlace="Dhaka, Bangladesh"
                foodRating="4.5/5"
              />
            </Grid>
          </Grid>
        </div>
        <button className="explore2Button">Explore All Resturants</button>
        <Carousel />
        <EndContent />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
