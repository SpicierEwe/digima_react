import React from "react";

const Footer = ({ sections }) => {
  return (
    <footer className="bg-yellow-400 py-8 text-black">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-xl">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              {section.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center">
            <span className="text-xl font-bold">Digima</span>
          </div>
          <p className="text-sm text-gray-500">
            Copyright 2025. Sanstive Lorem Ipsum
          </p>
        </div>
      </div>
    </footer>
  );
};

const sections = [
  {
    title: "Section One",
    content: ["Lorem One", "Lorem Two", "Lorem Three", "Lorem Four"],
  },
  {
    title: "Section Two",
    content: ["Lorem One", "Lorem Two", "Lorem Three"],
  },
  {
    title: "Section Three",
    content: ["Lorem One", "Lorem Two", "Lorem Three", "Lorem Four"],
  },
  {
    title: "Section Four",
    content: ["Lorem One", "Lorem Two"],
  },
];

export default Footer;
