import LandingLayout from "../layouts/_LandingLayout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { BrowserLanguageProvider } from "../logic/BrowserLanguageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <BrowserLanguageProvider>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </BrowserLanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
