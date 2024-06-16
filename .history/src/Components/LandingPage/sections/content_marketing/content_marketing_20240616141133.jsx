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
    <div className="flex flex-col  md:flex-row p-5 gap-5 my-14 md:my-16">
      {data.map((item, index) => (
        <div
          key={index}
          className={`mb-4 flex flex-col ${
            index === 0 ? "bg-accent" : "bg-white"
          } rounded-lg overflow-hidden shadow-lg`}
        >
          {/* image */}
          <img src={item.image} alt="" className="h-72 shrink-0 object-cover" />

          <div className="p-5 text-start">
            {/* title */}
            <h2 className="text-lg font-semibold">{item.title}</h2>

            {/* description */}
            <p className="md:text-xs text-sm  text-gray-600 mt-3">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
