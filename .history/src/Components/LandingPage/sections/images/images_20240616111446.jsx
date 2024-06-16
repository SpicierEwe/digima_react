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
  ];

  return (
    <div className="flex gap-5 grid-cols-3 grid-rows-2">
      {/* main image */}
      <div className="col-span-2">
        <img
          src={images[0].src}
          alt="main"
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="col-span-2">
        {images.map((image) => {
          return (
            <div className="flex gap-5">
              <img
                src={image.src}
                alt="main"
                className="w-1/2 h-96 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
