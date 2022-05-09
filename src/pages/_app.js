import LandingLayout from "../layouts/_LandingLayout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    </ThemeProvider>
  );
}

export default MyApp;
