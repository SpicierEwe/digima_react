import Utils from "../../../../utils/utils";

export default function ContentMarketing() {
  const data = [
    {
      image: Utils.dummyImageLink,
      id: 1,
      title: "Item 1",
      description: "This is the first item in the array",
    },
    {
      image: Utils.dummyImageLink,
      id: 2,
      title: "Item 2",
      description: "This is the second item in the array",
    },
    // Add more data objects here
  ];
  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl max-w-lg mx-auto">
        <span className="text-accent"> Content marketing </span> Fueling
        connections, igniting growth.
      </h2>

      {/* rendering */}

      <Card dataArray={data} />
    </div>
  );
}

function Card({ dataArray }) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataArray.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <img src={item.image} alt="product_image" />
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
