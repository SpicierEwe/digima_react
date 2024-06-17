import { useContext, useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from "../../providers/themeProvider";

function CustomThemeToggle() {
  const { isDarkTheme, handleSetisDarkTheme } = useContext(ThemeContext);
  return (
    <button
      className=" p-2 rounded-full bg-white shadow-md border"
      onClick={() => {
        handleSetisDarkTheme();
        if (document.documentElement.getAttribute("data-theme") === null) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
      }}
    >
      {isDarkTheme ? <LuSun size={20} /> : <FaCloudMoon size={20} />}
    </button>
  );
}

export default CustomThemeToggle;
