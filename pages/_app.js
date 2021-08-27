import "../styles/globals.css";
import "./index.css";
import "../components/appBar/appBar.css";
import "../components/topContent/topContent.css";
import "../components/marketingCards/marketingCards.css";
import "../components/middleContent/middleContent.css";
import "../components/foodCard/foodCard.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
