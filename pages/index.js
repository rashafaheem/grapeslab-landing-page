import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import MarketingCards from "../components/marketingCards/marketingCards.js";
import MiddleContent from "../components/middleContent/middleContent.js";
import FoodCard from "../components/foodCard/foodCard.js";

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
        <div>
          <FoodCard
            foodImage="./burgerImage.jpg"
            foodTitle="Food Point Resturant (Chinese & Thai)"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.8/5"
          />
          <FoodCard
            foodImage="./burgerImage.jpg"
            foodTitle="Red Chilli Mini Chinese & Restora"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.7/5"
          />
          <FoodCard
            foodImage="./burgerImage.jpg"
            foodTitle="Nilabali Hotel & Resturant"
            foodPlace="Dhaka, Bangladesh"
            foodRating="4.6/5"
          />
        </div>
      </div>
      {/* </Grid> */}
    </div>
  );
}
