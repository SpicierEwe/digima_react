import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

function CustomThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <button
      className=" p-2 rounded-full bg-white shadow-lg"
      onClick={() => {
        setIsDarkTheme(!isDarkTheme);
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
