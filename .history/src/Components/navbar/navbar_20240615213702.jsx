export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      url: "/",
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
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/company_logo.svg" alt="Logo" className="h-8" />
            <h1 className="ml-4 text-2xl font-bold">Digima</h1>
          </div>
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <a href={item.url} className="text-gray-900 hover:text-gray-600">
                {item.name}
              </a>
            ))}
          </nav>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
