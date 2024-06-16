function CustomTheme() {
  return (
    <button
      className="bg-red-300 p-5"
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

export default CustomTheme;
