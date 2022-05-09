import { createContext, useState, useEffect, useContext } from "react";

export const BrowserLanguage = createContext();

export const useBrowserLanguage = () => useContext(BrowserLanguage);

export const BrowserLanguageProvider = ({ children }) => {
  const [Language, setLanguage] = useState(null);
  const getBrowserLanguage = () => {
    return (
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage
    );
  };

  useEffect(() => {
    setLanguage(getBrowserLanguage());
  }, []);

  return (
    <BrowserLanguage.Provider value={{ Language, setLanguage }}>
      {children}
    </BrowserLanguage.Provider>
  );
};
