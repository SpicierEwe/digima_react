import React from "react";
import Utils from "../../../../utils/utils";

export default function ImagesSection() {
  const images = [
    {
      src: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: Utils.dummyImageLink,
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
  ];

  return (
    <div className="flex gap-5 p-9 mb-14 md:my-28  overflow-x-auto overflow-y-hidden h-[23rem]  md:h-[30rem] ">
      {/* 1st image container */}
      <div className="relative flex flex-1 flex-col min-w-[23rem]  md:min-w-[40rem]  h-full  rounded-3xl overflow-hidden">
        <img
          src={images[0].src}
          alt="a_photo"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-5 left-5 bg-lime-400 text-black px-3 py-1 rounded-full">
          Category
        </div>

        <div className="absolute bottom-0 text-start text-white flex flex-col justify-center items-start px-14 py-6  ">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {images[0].title}
          </h2>
          <p className="mt-5 line-clamp-2">{images[0].subtitle}</p>
        </div>
      </div>

      {/* 2nd image container */}
      <div className="grid grid-rows-2 grid-flow-col gap-3">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative flex flex-col w-72 md:w-96 h-full bg-gray-300 rounded-3xl overflow-hidden"
          >
            <img
              src={image.src}
              alt="a_photo"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
