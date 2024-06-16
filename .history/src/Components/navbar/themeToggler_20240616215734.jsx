import { useState } from "react";
import { LuSun } from "react-icons/lu";

function CustomThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <button
      className=" p-2 rounded-full bg-white"
      onClick={() => {
        setIsDarkTheme(!isDarkTheme);
        if (document.documentElement.getAttribute("data-theme") === null) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
      }}
    >
      <LuSun size={20} />
    </button>
  );
}

export default CustomThemeToggle;
