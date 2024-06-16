import { LuSun } from "react-icons/lu";

function CustomThemeToggle() {
  return (
    <button
      className=" p-5 "
      onClick={() => {
        if (document.documentElement.getAttribute("data-theme") === null) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
      }}
    >
      <LuSun />
    </button>
  );
}

export default CustomThemeToggle;
