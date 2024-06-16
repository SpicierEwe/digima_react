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
  ];

  return (
    <div className="flex">
      <div className="relative flex flex-col items-center h-full w-full">
        <img
          src={images[0].src}
          alt="a_photo"
          className="object-cover w-60 h-60"
        />
        {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
          <h2 className="text-lg font-bold">{images[0].title}</h2>
          <p className="text-sm">{images[0].subtitle}</p>
        </div> */}
      </div>
      <div className="">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative flex flex-col ">
            <img
              src={image.src}
              alt="a_photo"
              className="object-cover w-32 h-full"
            />
            {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
              <h2 className="text-lg font-bold">{image.title}</h2>
              <p className="text-sm">{image.subtitle}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
