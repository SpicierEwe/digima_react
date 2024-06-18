import { IoPlayCircleOutline } from "react-icons/io5";
import Companies from "./sub_sections/companies";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:justify-center">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-start md:items-center h-screen md:h-[45rem] pt-10 md:pt-0">
        {/* subtitle */}
        <h4 className=" text-sm  md:text-lg font-semibold  text-center mb-6 tracking-[.5em] md:tracking-[.5em] bg-accent rounded-full p-2 md:p-2.5 px-5 md:px-20 w-fit text-black">
          DIGITAL MARKETING
        </h4>

        {/*  hero title */}
        <h1 className="text-left md:text-center leading-tight md:leading-tight font-bold   mt-4.5 md:mt-7">
          Social Media ist zu <span className="text-accent">90%</span> immer
          kostenlos, aber nie umsonst!
        </h1>

        {/* hero description */}
        <p className="max-w-screen-md text-start md:text-center mt-14 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* buttons */}
        <div className="flex gap-5 justify-center mt-20">
          {/* btn 1 */}
          <button className="bg-accent border-2  border-black font-semibold text-sm md:text-lg px-7 py-2 rounded-full ">
            Get Started
          </button>

          {/* btn 2 */}
          <div className="flex items-center gap-2 px-4 py-2 font-semibold text-sm md:text-lg ml-4">
            <IoPlayCircleOutline className="text-2xl" /> Play Now
          </div>
        </div>
      </div>
      {/* comapny */}
      <Companies />
    </section>
  );
}
