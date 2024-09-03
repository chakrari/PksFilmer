import React, { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Socialapps = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const icons = [
    {
      icon: <FcGoogle size="28" />,
      link: "https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-400",
      tooltip: "Google Reviews",
    },
    // {
    //   icon: <MdLocationOn size="28" />,
    //   link: "https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
    //   bgColor: "bg-teal-600",
    //   hoverColor: "hover:bg-teal-700",
    //   tooltip: "Location",
    // },
    {
      icon: <AiFillFacebook size="28" />,
      link: "https://www.facebook.com/pksfilmer",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      tooltip: "Facebook",
    },
    {
      icon: <AiFillInstagram size="28" />,
      link: "https://www.instagram.com/pks_filmer/",
      bgColor: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      tooltip: "Instagram",
    },
    {
      icon: <AiFillYoutube size="28" />,
      link: "https://www.youtube.com/@pksfilmer",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      tooltip: "YouTube",
    },
    {
      icon: <AiFillLinkedin size="28" />,
      link: "https://www.linkedin.com/in/pritam-kumar-shaw-4a45a4184/?originalSubdomain=in",
      bgColor: "bg-blue-800",
      hoverColor: "hover:bg-blue-900",
      tooltip: "LinkedIn",
    },
    {
      icon: <FaPhoneAlt size="28" />,
      link: "https://www.justdial.com/Kolkata/Pks-Filmer-Paschim-Putiary/033PXX33-XX33-230323043049-P8U3_BZDET",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      tooltip: "Just Dial",
    },
    {
      icon: <FaCalendarCheck size="28" />,
      link: "#",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-700",
      tooltip: "Book us",
    },
  ];

  return (
    <>
      {showIcons && (
        <div className="fixed top-80 left-3 z-50">
          <ul className="space-y-4">
            {icons.map((item, index) => (
              <li key={index} className="relative group flex items-center">
                <a
                  className={`flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg transition duration-300 ${item.bgColor} ${item.hoverColor}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
                {/* Tooltip */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                  {item.tooltip}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Socialapps;
