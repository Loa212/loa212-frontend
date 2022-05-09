import { RiSunFill, RiMoonClearFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const LightDarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className="swap swap-rotate text-3xl lg:text-4xl">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleChange}
      />
      <RiSunFill className="swap-on" />
      <RiMoonClearFill className="swap-off" />
    </label>
  );
};

export default LightDarkModeSwitch;
