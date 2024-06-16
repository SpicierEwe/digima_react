import { IoPlayCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <section className="py-20 flex flex-col justify-start md:justify-center items-center w-screen h-screen">
      <div className="">
        {/* subtitle */}
        <h2 className="text-xs  md:text-lg font-semibold  text-center mb-6 tracking-[.5em] md:tracking-[.5em] bg-accent rounded-full p-2 md:p-2.5 px-5 md:px-20 w-fit ">
          DIGITAL MARKETING
        </h2>

        {/*  hero title */}
        <h1 className="text-3xl md:text-6xl leading-tight md:leading-tight font-bold text-center mt-4.5 md:mt-7">
          Social Media ist zu <span className="text-accent">90%</span> immer
          kostenlos, aber nie umsonst!
        </h1>

        {/* hero description */}
        <p className="text-md max-w-screen-md text-center mt-14 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* buttons */}
        <div className="flex gap-5 justify-center mt-20">
          {/* btn 1 */}
          <button className="bg-accent border-2  border-black font-semibold text-sm md:text-lg px-7 py-2 rounded-full hover:bg-white">
            Get Started
          </button>

          {/* btn 2 */}
          <button className="flex items-center gap-2 px-4 py-2 font-semibold text-sm md:text-lg  ml-4">
            <IoPlayCircleOutline className="text-2xl" /> Play Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;