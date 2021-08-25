import "../styles/globals.css";
import "../components/appBar/appBar.css";
import "../components/topContent/topContent.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
