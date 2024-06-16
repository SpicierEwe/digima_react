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
    <div className="flex gap-x-36 p-5 py-14 bg-seconday overflow-x-auto items-center justify-center">
      {companies.map((item) => (
        <div className="flex gap-3 whitespace-nowrap items-center">
          <div className="h-9 w-9 aspect-square overflow-hidden">
            <img src={item.logo} alt={item.name} className="" />
          </div>

          <p className="font-black text-lg tracking-wide text-[#777678] uppercase">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
