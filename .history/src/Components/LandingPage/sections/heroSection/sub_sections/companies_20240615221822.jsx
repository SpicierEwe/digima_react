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
    {
      name: "Company 6",
      logo: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="flex space-x-7 p-5 py-5">
      {companies.map((item) => (
        <div>
          <img src={item.logo} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
