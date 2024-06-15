export default function NavBar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <h1 className="ml-4 text-2xl font-bold">Digima</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline">
              SEO
            </a>
            <a href="/" className="hover:underline">
              Content Marketing
            </a>
            <a href="/" className="hover:underline">
              Analytics
            </a>
          </nav>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
