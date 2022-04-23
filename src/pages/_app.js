import LandingLayout from "../layouts/_LandingLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  );
}

export default MyApp;
