import { useContext } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from "../../providers/themeProvider";

function CustomThemeToggle() {
  const { isDarkTheme, handleSetIsDarkTheme } = useContext(ThemeContext);
  return (
    <button
      className=" p-2 rounded-full bg-white shadow-md border"
      onClick={() => {
        handleSetIsDarkTheme();
      }}
    >
      {isDarkTheme ? <LuSun size={20} /> : <FaCloudMoon size={20} />}
    </button>
  );
}

export default CustomThemeToggle;
