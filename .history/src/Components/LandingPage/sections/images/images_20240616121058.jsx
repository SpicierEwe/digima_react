import React from "react";

export default function ImagesSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://images.unsplash.com/photo-1580933884561-245548c0396c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
  ];

  return (
    <div className="flex gap-5 p-9  overflow-x-auto overflow-y-hidden h-[30rem]">
      <div className="relative flex flex-1 flex-col min-w-[20rem]  md:min-w-[40rem]  h-full  rounded-3xl overflow-hidden">
        <img
          src={images[0].src}
          alt="a_photo"
          className="object-cover w-full h-full"
        />
        <div className="absolute">
          <div className="absolute top-5 left-5 bg-lime-400 text-black px-3 py-1 rounded-full">
            Category
          </div>
          <div className="absolute inset-0 bottom-0">
            <h2 className="">{images[0].title}</h2>
            <p className="line-clamp-2">{images[0].subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-3">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative flex flex-col w-96 h-full bg-gray-300 rounded-3xl overflow-hidden"
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
