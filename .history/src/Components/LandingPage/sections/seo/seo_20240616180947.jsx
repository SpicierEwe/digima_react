import Utils from "../../../../utils/utils";

export default function SEOSection() {
  // dynamic data responsible for rendering
  const data = [
    {
      image: Utils.dummyImageLink,
      title: "Perspiciatis",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qua",
    },
    {
      image: Utils.dummyImageLink,
      title: "Accusantium",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qua",
    },
    {
      image: Utils.dummyImageLink,
      title: "Accusantium",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qua",
    },
    // Add more data objects here
  ];
  return (
    <div className="max-w-screen-xl mx-auto p-5 md:py-14 ">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 gap-y-10">
        <h2 className="text-4xl leading-snug font-bold text-start md:w-1/2">
          From clicks to conversions: <br />
          <span className="text-accent"> SEO </span>
          makes it happen
        </h2>
        <button className="border-2 border-black p-2 px-9 font-semibold bg-accent w-fit h-fit rounded-full">
          SEO More
        </button>
      </div>

      {/* rendering */}
      <div className="flex flex-col  md:flex-row p-5 gap-5 my-14 md:my-16">
        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-4 flex flex-col ${
              index === 0 ? "bg-accent" : "bg-white"
            } rounded-lg overflow-hidden shadow-lg`}
          >
            {/* image */}
            <img
              src={item.image}
              alt=""
              className="h-80 shrink-0 object-cover"
            />

            <div className="p-5 text-start">
              {/* title */}
              <h3 className="text-xl font-semibold">{item.title}</h3>

              {/* description */}
              <p className="md:text-xs text-sm  text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
