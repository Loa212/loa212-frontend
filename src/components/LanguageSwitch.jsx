import Italian from "../../public/Italian.svg";
import UK from "../../public/UK.svg";
import Image from "next/image";
import { useBrowserLanguage } from "../logic/BrowserLanguageProvider";
import { useState } from "react";

const LanguageSwitch = () => {
  const { Language, setLanguage } = useBrowserLanguage();

  const [IsEng, setIsEng] = useState(false);

  const handleChange = () => {
    setIsEng(!IsEng);
  };

  return (
    <label className="relative swap  w-10 h-10 swap-rotate flex items-center">
      <input type="checkbox" checked={IsEng} onChange={handleChange} />
      <Image
        src={Italian}
        alt="Italian"
        className="swap-on"
        layout="fill"
        objectFit="contain"
      />
      <Image
        src={UK}
        alt="English"
        className="swap-off"
        layout="fill"
        objectFit="contain"
      />
    </label>
  );
};

export default LanguageSwitch;
