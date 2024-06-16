import React from "react";

const ImagesSection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1505873171603-a67e0079ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-46a99b8b7616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1516802273409-68526ee1aeb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Image 3",
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: "translateX(-100%)" }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`rounded-full w-4 h-4 bg-gray-400 ${
              index === 0 ? "bg-gray-900" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
