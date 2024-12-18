import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import logo from '../assets/Logo.png';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-1/4">
            <img src={logo} alt="Logo" className="w-[150px]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex w-2/4 justify-center">
            <ul className="flex space-x-8 items-center">
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Home
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                About
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Services
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Portfolio
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Blog
              </li>
            </ul>
          </nav>

          {/* Contact Button (Desktop Only) */}
          <div className="hidden lg:block w-1/4 text-right">
            <button className="px-6 py-3 bg-[#FF7628] text-white font-semibold text-lg rounded-full hover:bg-[#e65d1f]">
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="lg:hidden" ref={menuRef}>
            <button
              className="text-2xl text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <RxCross1 /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Home
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                About
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Services
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Portfolio
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Blog
              </li>
              <li className="font-semibold text-lg text-black hover:text-[#FF7628] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
