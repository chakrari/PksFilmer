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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent ${
        isNavDialogOpen ? "" : "backdrop-blur-md"
      }`}
    >
      <Link to="/" id="brand" className="flex gap-2 items-center">
        <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
        {/* <span className="text-lg  placeholder:font-medium font-display">Pks Filmer</span> */}
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
          <IoMdClose className="text-white" />
        ) : (
          <GiHamburgerMenu className="text-gray-600" />
        )}
      </button>

      {isNavDialogOpen && (
        <div
          id="nav-dialog"
          className="fixed inset-0 z-50 flex flex-col p-3 bg-black/70 backdrop-blur-md text-white"
        >
          <div className="flex justify-between items-center">
            <Link to="/" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src={logo}
                alt="Logo"
              />
              {/* <span className="text-lg text-white font-medium font-display">
                Pks Filmer
              </span> */}
            </Link>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <IoMdClose className="text-white" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Link
              to="/"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              About
            </Link>
            <Link
              to="#"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Gallery
            </Link>
            <Link
              to="#"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Services & Packages
            </Link>
            <Link
              to="#"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Cinematic Video
            </Link>
            <Link
              to="#"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Reviews
            </Link>
            <Link
              to="#"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Contact
            </Link>
          </div>
          <button className="mt-6 w-full flex gap-2 text-white items-center px-6 py-4 rounded-lg hover:bg-primary">
            Smile Please
            <FaArrowRight />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
