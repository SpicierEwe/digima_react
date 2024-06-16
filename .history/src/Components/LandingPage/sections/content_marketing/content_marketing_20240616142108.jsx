import Utils from "../../../../utils/utils";

export default function ContentMarketing() {
  const data = [
    {
      image: Utils.dummyImageLink,

      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    },
    {
      image: Utils.dummyImageLink,

      title: "Item 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
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
      {dataArray.map((item, index) => (
        <div
          key={index}
          className={`mb-4 flex flex-row rounded-lg overflow-hidden shadow-lg `}
        >
          {/* image */}
          <img
            src={item.image}
            alt=""
            className="h-10 aspect-square shrink-0 object-cover rounded-xl"
          />

          <div className="p-5 text-start">
            {/* title */}
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <button className="border-2 border-black py-0 px-4 bg-secondary text-black font-semibold text-xs rounded-full">
                Category
              </button>
            </div>

            {/* description */}
            <p className="md:text-xs text-sm  text-gray-600 mt-7">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
