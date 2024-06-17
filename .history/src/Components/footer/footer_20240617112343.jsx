import React, { useContext } from "react";
import { ThemeContext } from "../../providers/themeProvider";

export default function Footer() {
  const { isDarkTheme } = useContext(ThemeContext);
  const sections = [
    {
      title: "Section One",
      content: [
        { name: "Lorem One", href: "/" },
        { name: "Lorem Two", href: "/" },
        { name: "Lorem Three", href: "/" },
        { name: "Lorem Four", href: "/" },
      ],
    },
    {
      title: "Section Two",
      content: [
        { name: "Lorem One", href: "/" },
        { name: "Lorem Two", href: "/" },
        { name: "Lorem Three", href: "/" },
      ],
    },
    {
      title: "Section Three",
      content: [
        { name: "Lorem One", href: "/" },
        { name: "Lorem Two", href: "/" },
        { name: "Lorem Three", href: "/" },
        { name: "Lorem Four", href: "/" },
      ],
    },
    {
      title: "Section Four",
      content: [
        { name: "Lorem One", href: "/" },
        { name: "Lorem Two", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-accent py-8  text-black p-5 ">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-xl py-14 gap-10">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              {/* title */}
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>

              {/* content */}

              {section.content.map((item, index) => (
                <a href={item.href} key={index}>
                  {item.name}
                </a>
              ))}
            </div>
          ))}

          {/* Logo */}

          <div className="flex flex-col items-start md:items-start py-10 md:py-0 justify-start md:w-[25%] md:ml-10">
            <div className="flex items-center gap-5">
              <img
                src="/logo/company_logo.svg"
                className="text-black"
                style={{
                  filter: "brightness(0) invert(0)",
                }}
                alt=""
              />
              <span className="text-2xl font-bold">Digima</span>
            </div>
            <p className="text-sm text-gray-500 pt-5">
              Copyright 2025. Sanstive Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
