import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import MarketingCards from "../components/marketingCards/marketingCards.js";
import MiddleContent from "../components/middleContent/middleContent.js";
import FoodCard from "../components/foodCard/foodCard.js";
import Carousel from "../components/carousel/carousel.js";
import EndContent from "../components/endContent/endContent.js";
import Testimonial from "../components/testimonial/testimonial.js";
import Footer from "../components/footer/footer.js";

export default function Home() {
  return (
    <div className="">
      <AppBar />
      {/* <Grid container> */}
      <div>
        <TopContent />
        <div className="miniCard">
          <MarketingCards
            miniImage="./deliveryImage.jpg"
            miniTitle="Fastest Delivery"
            miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
          />
          <MarketingCards
            miniImage="./foodImage.jpg"
            miniTitle="Best Taste"
            miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
          />
          <MarketingCards
            miniImage="./offerImage.jpg"
            miniTitle="Best Offers In Town!"
            miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
          />
        </div>
        <MiddleContent />
        <br />
        <div className="foodCardss">
          <FoodCard
            className="foodCard1"
            tag="./tag.svg"
            discount="20% Off"
            foodImage="./burgerImage.jpg"
            foodTitle="Food Point Resturant"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.8/5"
          />
          <FoodCard
            className="foodCard1"
            foodImage="./food2.jpg"
            foodTitle="Red Chilli Mini Chinese"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.7/5"
          />
          <FoodCard
            className="foodCard1"
            tag="./tag.svg"
            discount="10% Off"
            foodImage="./food3.jpg"
            foodTitle="Nilabali Hotel & Resturant"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.6/5"
          />
        </div>
        <div className="foodCardss">
          <FoodCard
            className="foodCard1"
            tag=""
            foodImage="./food4.jpg"
            foodTitle="Ma Restora & Kebab House"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.8/5"
          />
          <FoodCard
            className="foodCard1"
            tag="./tag.svg"
            discount="25% Off"
            foodImage="./food5.jpg"
            foodTitle="Wedges Mama Food Corner"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.9/5"
          />
          <FoodCard
            className="foodCard1"
            tag="./tag.svg"
            discount="15% Off"
            foodImage="./food6.jpg"
            foodTitle="Black Birch Kitchen & Lounge"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.5/5"
          />
        </div>
        <button className="explore2Button">Explore All Resturants</button>
        <Carousel />
        <EndContent />
        <Testimonial />
        <Footer />
      </div>
      {/* </Grid> */}
    </div>
  );
}
