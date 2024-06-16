export default function Companies() {
  const companies = [
    {
      name: "Company 1",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Company 2",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Company 3",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Company 4",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Company 5",
      logo: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="flex gap-x-20 p-5 mb-20 py-12 bg-secondary overflow-x-auto md:justify-center items-center">
      {companies.map((item, index) => (
        <div className="flex gap-3 items-center">
          <div className="h-9 w-9 aspect-square overflow-hidden">
            <img src={item.logo} alt={item.name} className="" />
          </div>

          <p className="font-black text-lg tracking-wide text-[#777678] uppercase whitespace-nowrap">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
