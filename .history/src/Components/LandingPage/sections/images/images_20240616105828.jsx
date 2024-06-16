export default function Images() {
  const images = [
    {
      src: "https://via.placeholder.com/150",
      title: "We Deliver Outstanding Care",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l",
    },
    {
      src: "https://via.placeholder.com/150",
    },
    {
      src: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div>
      {
        images.map(
            (image, index) => (
                <div key={index} className="flex flex-col items-center">
                <img src={image.src}/>
                <h2>{image.title}</h2>
                <p>{image.subtitle}</p>
                </div>
                </div>
                
        )
      }
    </div>
  );
}
