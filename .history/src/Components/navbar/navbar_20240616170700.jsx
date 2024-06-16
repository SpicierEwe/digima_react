import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      url: "home",
    },
    {
      name: "SEO",
      url: "/",
    },
    {
      name: "Content Marketing",
      url: "/",
    },
    {
      name: "Analytics",
      url: "/",
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
              <div
                key={index}
                onClick={() => {
                  const element = document.getElementById(item.url);

                  element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg font-medium"
              >
                {item.name}
              </div>
            ))}
          </nav>

          {/* contact button button */}
          <button className="hidden md:block border-2 border-black font-bold rounded-full px-4 py-2  hover:bg-accent hover:text-black">
            Contact Us
          </button>

          {/* =============== IF MOBILE */}

          {/* hamburger menu */}
          <div className="md:hidden p-3 shadow-md rounded-full border">
            <GiHamburgerMenu size={19} />
          </div>
        </div>
      </div>
    </header>
  );
}
