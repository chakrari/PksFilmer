import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Socialapps = () => {
  const icons = [
    { icon: <AiFillFacebook size="28" />, link: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { icon: <AiFillTwitterCircle size="28" />, link: "#", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
    { icon: <AiFillInstagram size="28" />, link: "#", bgColor: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
    { icon: <AiFillLinkedin size="28" />, link: "#", bgColor: "bg-blue-800", hoverColor: "hover:bg-blue-900" },
  ];

  return (
    <div className="fixed top-80 left-3 z-50">
      <ul className="space-y-4">
        {icons.map((item, index) => (
          <li key={index} className="flex">
            <a
              className={`flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg transition duration-300 ${item.bgColor} ${item.hoverColor}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socialapps;
