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
    <div className="overflow-hidden grid gap-5">
      {images.map((image, index) => (
        <div
          key={index}
          className="h-60 w-52 relative flex flex-col items-center"
        >
          <img src={image.src} alt="a_photo" className="object-cover" />
          <div className="absolute">
            <h2>{image.title}</h2>
            <p>{image.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
