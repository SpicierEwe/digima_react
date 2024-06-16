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

      <div className="grid md:grid-cols-2  p-5 gap-5 gap-y-10 my-14 md:my-16 max-w-screen-xl mx-auto">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div
      className={` flex flex-col gap-3 md:gap-5 md:flex-row items-center rounded-lg overflow-hidden shadow-lg mx-5 px-3 pb-5 md:pb-0`}
    >
      {/* image */}
      <div className="h-[15rem] md:h-full w-full  overflow-hidden py-3 md:py-3">
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
  );
}
