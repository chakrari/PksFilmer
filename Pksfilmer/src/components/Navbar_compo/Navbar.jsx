// I am doing a change in this branch for testing how it works
// I am doing 2nd test in this branch for testing how it works
import React from 'react';
import logo from '../../assets/photo_for_website/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = ({ isNavDialogOpen, handleMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md">
      <div className="flex items-center gap-20">
        <img className="w-30 h-10" src={logo} alt="Logo" />
        <ul className="hidden lg:flex flex-row justify-between items-center gap-24 font-semibold ">
          <li className="hover:font-bold">Home</li>
          <li className="hover:font-bold">About</li>
          <li className="hover:font-bold">Gallery</li>
          <li className="hover:font-bold">Services &<br /> Packages</li>
          <li className="hover:font-bold">Cinematic Video</li>
          <li className="hover:font-bold">Reviews</li>
          <li className="hover:font-bold">Contact</li>
        </ul>
        <button className="lg:hidden ml-10" onClick={handleMenu}>
          <GiHamburgerMenu className="text-gray-600" />
        </button>
      </div>

      {isNavDialogOpen && (
        <div id="nav-dialog" className="fixed inset-0 z-40 bg-white p-3 md:hidden">
          <div id="nav-bar" className="flex justify-between items-center">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-h-12 max-w-12" src={logo} alt="Logo" />
            </a>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <IoMdClose className="text-gray-600" />
            </button>
          </div>

          <div className="mt-6 flex flex-col">
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Home</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">About</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Gallery</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Services & Packages</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Cinematic Video</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Reviews</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
