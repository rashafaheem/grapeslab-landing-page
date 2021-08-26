import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import MarketingCards from "../components/marketingCards/marketingCards.js";
import MiddleContent from "../components/middleContent/middleContent.js";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  return (
    <div className="">
      <AppBar />
      <div className="home">
        <TopContent />
        <div className="miniCard">
          <Grid item xs={12} sm={4}>
            <MarketingCards
              miniImage="./deliveryImage.jpg"
              miniTitle="Fastest Delivery"
              miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MarketingCards
              miniImage="./foodImage.jpg"
              miniTitle="Best Taste"
              miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MarketingCards
              miniImage="./offerImage.jpg"
              miniTitle="Best Offers In Town!"
              miniContent="We deliver your food to where you are you can be sure that it was in a fast, affordable, and reliable way."
            />
          </Grid>
        </div>
        <MiddleContent />
      </div>
    </div>
  );
}
