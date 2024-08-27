// I am doing a change in this branch for testing how it works
// import React from 'react';
// import logo from '../../assets/photo_for_website/logo.png';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoMdClose } from 'react-icons/io';

// const Navbar = ({ isNavDialogOpen, handleMenu }) => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md">
//       <div className="flex items-center gap-20">
//         <img className="w-30 h-10" src={logo} alt="Logo" />
//         <ul className="hidden lg:flex flex-row justify-between items-center gap-24 font-semibold ">
//           <li className="hover:font-bold">Home</li>
//           <li className="hover:font-bold">About</li>
//           <li className="hover:font-bold">Gallery</li>
//           <li className="hover:font-bold">Services &<br /> Packages</li>
//           <li className="hover:font-bold">Cinematic Video</li>
//           <li className="hover:font-bold">Reviews</li>
//           <li className="hover:font-bold">Contact</li>
//         </ul>
//         <button className="lg:hidden ml-10" onClick={handleMenu}>
//           <GiHamburgerMenu className="text-gray-600" />
//         </button>
//       </div>

//       {isNavDialogOpen && (
//         <div id="nav-dialog" className="fixed inset-0 z-40 bg-white p-3 md:hidden">
//           <div id="nav-bar" className="flex justify-between items-center">
//             <a href="#" id="brand" className="flex gap-2 items-center">
//               <img className="object-cover max-h-12 max-w-12" src={logo} alt="Logo" />
//             </a>
//             <button className="p-2 md:hidden" onClick={handleMenu}>
//               <IoMdClose className="text-gray-600" />
//             </button>
//           </div>

//           <div className="mt-6 flex flex-col">
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Home</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">About</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Gallery</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Services & Packages</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Cinematic Video</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Reviews</a>
//             <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/photo_for_website/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setIsNavDialogOpen(!isNavDialogOpen);
  };

  // Automatically close nav dialog when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavDialogOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close nav dialog on route change
  useEffect(() => {
    if (isNavDialogOpen) {
      setIsNavDialogOpen(false);
    }
  }, [location]);

  return (
    <nav className="p-3 bg-white justify-between items-center flex">
      <Link to="/" id="brand" className="flex gap-2 items-center">
        <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
        <span className="text-lg font-medium font-display">Pks Filmer</span>
      </Link>
      <div id="nav-menu" className="hidden md:flex gap-20">
        <Link to="/" className="font-bold hover:text-primary cursor-pointer">
          Home
        </Link>
        <Link
          to="/about"
          className="font-bold hover:text-primary cursor-pointer"
        >
          About
        </Link>
        <Link to="#" className="font-bold hover:text-primary cursor-pointer">
          Gallery
        </Link>
        <Link to="#" className="font-bold hover:text-primary cursor-pointer">
          Services & Packages
        </Link>
        <Link to="#" className="font-bold hover:text-primary cursor-pointer">
          Cinematic Video
        </Link>
        <Link to="#" className="font-bold hover:text-primary cursor-pointer">
          Reviews
        </Link>
        <Link to="#" className="font-bold hover:text-primary cursor-pointer">
          Contact
        </Link>
      </div>
      <button className="hidden md:flex gap-2 items-center border border-black px-6 py-2 rounded-lg hover:border-primary">
        Smile Please
        <FaArrowRight />
      </button>
      <button className="p-2 md:hidden" onClick={handleMenu}>
        {isNavDialogOpen ? (
          <IoMdClose className="text-gray-600" />
        ) : (
          <GiHamburgerMenu className="text-gray-600" />
        )}
      </button>

      {isNavDialogOpen && (
        <div
          id="nav-dialog"
          className="fixed bg-white inset-0 p-3 z-50 overflow-auto"
          style={{ zIndex: 1000 }}
        >
          <div id="nav-bar" className="flex justify-between">
            <Link to="/" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src={logo}
                alt="Logo"
              />
              <span className="text-lg font-medium font-display">
                Pks Filmer
              </span>
            </Link>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <IoMdClose className="text-gray-600" />
            </button>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              About
            </Link>
            <Link
              to="#"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Gallery
            </Link>
            <Link
              to="#"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Services & Packages
            </Link>
            <Link
              to="#"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Cinematic Video
            </Link>
            <Link
              to="#"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Reviews
            </Link>
            <Link
              to="#"
              className="font-medium m-3 p-3 hover:bg-gray-500 block rounded-lg"
            >
              Contact
            </Link>
          </div>
          <div className="h-[1px] bg-gray-300">
            <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-primary">
              Smile Please
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

