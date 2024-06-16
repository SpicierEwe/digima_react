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

      title: "Lorem Ipsum",
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
    <div className="flex flex-col  md:flex-row p-5 gap-5 my-14 md:my-16 max-w-screen-xl mx-auto">
      {dataArray.map((item, index) => (
        <div
          key={index}
          className={` flex flex-col gap-3 md:gap-5 md:flex-row items-center rounded-lg overflow-hidden shadow-lg mx-5 px-3 border`}
        >
          {/* image */}
          <div className="h-full w-full  overflow-hidden py-3 md:py-10">
            <img
              src={item.image}
              alt=""
              className="h-full w-full aspect-square rounded-xl shrink-0 object-cover "
            />
          </div>

          <div className="p-3 text-start">
            {/* title */}
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <button className="h-fit border-2 border-black py-1.5 px-4  bg-secondary text-black font-semibold text-xs rounded-full">
                Category
              </button>
            </div>

            {/* description */}
            <p className="md:text-lg text-sm   text-gray-600 mt-7 ">
              {item.description}
            </p>

            <button className="mt-9 md:mt-5 border-2 border-black px-7 py-2 bg-accent text-black font-semibold text-xs rounded-full">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}