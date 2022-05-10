import { RiSunFill, RiMoonClearFill } from "react-icons/ri";
import { useEffect } from "react";
import { useBrowserLanguage } from "../logic/BrowserLanguageProvider";

const LightDarkModeSwitch = () => {
  const { Lang, setLang } = useBrowserLanguage();

  //  useEffect(() => {
  //    first

  //    return () => {
  //      second
  //    }
  //  }, [third])

  const isItalian = () => {
    return true;
  };

  return (
    <select className="select select-ghost w-full h-full max-w-xs min-w-[140px] text-white bg-transparent hover:bg-transparent focus-within:text-white focus:text-white">
      <option
        className="dark:bg-slate-700 hover:bg-slate-900 flex items-center space-x-2"
        selected={isItalian}
      >
        Italiano
      </option>
      <option
        className="dark:bg-slate-700 hover:bg-slate-900 flex items-center space-x-2"
        selected={!isItalian}
      >
        Inglese
      </option>
    </select>
  );
};

export default LightDarkModeSwitch;
