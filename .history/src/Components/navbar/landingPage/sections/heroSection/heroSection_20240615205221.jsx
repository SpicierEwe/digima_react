import { IoPlayCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 flex flex-col justify-center items-center w-screen h-screen">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-md font-semibold  text-center mb-6 tracking-[.65em] bg-accent rounded-full p-1 px-20 w-fit ">
          DIGITAL MARKETING
        </h2>
        <h1 className="text-6xl leading-tight font-bold text-center mt-5">
          Social Media ist zu 90% immer kostenlos, aber nie umsonst!
        </h1>
        <p className="text-md max-w-screen-md text-center mt-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-5 justify-center mt-14">
          <button className="bg-accent border-2  border-black font-semibold text-sm px-7 py-2 rounded-full hover:bg-white">
            Get Started
          </button>
          <button className="flex items-center gap-2 px-4 py-2 font-semibold text-sm ml-4">
            <IoPlayCircleOutline className="text-2xl" /> Play Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
