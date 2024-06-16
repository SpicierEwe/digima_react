import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      url: "home",
    },
    {
      name: "SEO",
      url: "seo",
    },
    {
      name: "Content Marketing",
      url: "content-marketing",
    },
    {
      name: "Analytics",
      url: "analytics",
    },
  ];

  return (
    <header className="max-w-screen-xl mx-auto">
      <div className="mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo/company_logo.svg" alt="Logo" className="h-8" />
            <h1 className="ml-4 text-2xl font-bold">Digima</h1>
          </div>

          {/* =============== IF DEKSTOP */}

          {/* nav items desktop */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.url);

                  element.scrollIntoView({ behavior: "smooth" });
                }}
                className="list-none text-lg font-medium cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </nav>

          {/* contact button button */}
          <div>
            {/* =============== IF MOBILE */}
            <button
              className="bg-red-300 p-5"
              onClick={() => {
                if (
                  document.documentElement.getAttribute("data-theme") === null
                ) {
                  document.documentElement.setAttribute("data-theme", "dark");
                } else {
                  document.documentElement.removeAttribute("data-theme");
                }
              }}
            >
              Dark
            </button>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden p-3 shadow-md rounded-full border">
            <GiHamburgerMenu size={19} />
          </div>
        </div>
      </div>
    </header>
  );
}
