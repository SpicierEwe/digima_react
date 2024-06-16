import Utils from "../../../../utils/utils";

export default function SEOSection() {
  const data = [
    {
      imageLink: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto p-5 md:py-14">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 gap-y-10">
        <h2 className="text-3xl font-bold text-start md:w-1/2">
          From clicks to conversions: <span className="text-accent"> SEO </span>
          makes it happen
        </h2>
        <button className="border-2 border-black p-2 px-9 font-semibold bg-accent w-fit h-fit rounded-full">
          SEO More
        </button>
      </div>
    </div>
  );
}
