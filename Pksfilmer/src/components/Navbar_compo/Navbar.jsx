import React from 'react';
import logo from '../../assets/photo_for_website/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = ({ isNavDialogOpen, handleMenu }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md">
      <div className="flex items-center gap-20">
        <img className="w-30 h-10" src={logo} alt="Logo" />
        <ul className="hidden lg:flex flex-row justify-between items-center gap-24 font-semibold ">
          <li className="hover:font-bold cursor-pointer" onClick={() => navigate("/")}>Home</li>
          <li className="hover:font-bold cursor-pointer" onClick={() => navigate("/about")}>About</li>
          <li className="hover:font-bold cursor-pointer">Gallery</li>
          <li className="hover:font-bold cursor-pointer">Services &<br /> Packages</li>
          <li className="hover:font-bold cursor-pointer">Cinematic Video</li>
          <li className="hover:font-bold cursor-pointer">Reviews</li>
          <li className="hover:font-bold cursor-pointer">Contact</li>
        </ul>
        <button className="lg:hidden ml-10" onClick={handleMenu}>
          <GiHamburgerMenu className="text-gray-600" />
        </button>
      </div>

      {isNavDialogOpen && (
        <div id="nav-dialog" className="fixed inset-0 z-40 bg-white p-3 md:hidden">
          <div id="nav-bar" className="flex justify-between items-center">
            <Link href="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-h-12 max-w-12" src={logo} alt="Logo" />
            </Link>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <IoMdClose className="text-gray-600" />
            </button>
          </div>

          <div className="mt-6 flex flex-col">
            <Link to="/" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Home</Link>
            <Link to="/about" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">About</Link>
            <Link to="/gallery" href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Gallery</Link>
            <Link href="/services and packages" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Services & Packages</Link>
            <Link href="/cinematic video" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Cinematic Video</Link>
            <Link href="/reviews" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Reviews</Link>
            <Link href="/contact" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
