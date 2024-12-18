import React from 'react';
import Container from './Container';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#FEFFFF] py-16">
      <Container>
        <div className="flex flex-wrap lg:flex-row flex-col justify-between gap-y-10">
          {/* Section 1: Company Info */}
          <div className="lg:w-1/3 w-full text-center lg:text-start">
            <div className="mb-6">
              <img src={logo} alt="Logo" className="mx-auto lg:mx-0 w-28 lg:w-36" />
            </div>
            <p className="text-[#6C7D93] text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
            </p>
          </div>

          {/* Section 2: Menus */}
          <div className="lg:w-1/3 w-full flex justify-between gap-x-6">
            {/* Menu 1 */}
            <div className="w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Features</h3>
              <ul className="space-y-4">
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Home</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Benefit</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">About</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Price</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Blog</li>
              </ul>
            </div>

            {/* Menu 2 */}
            <div className="w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Home</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Task Management</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Company Growth</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Time Tracking</li>
                <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Blog</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Support */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Customer Service</li>
              <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Task Management</li>
              <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Accessibility Growth</li>
              <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Time Tracking</li>
              <li className="text-[#6C7D93] hover:text-[#FF7628] transition">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-8 flex flex-wrap justify-between items-center text-center lg:text-start">
          <p className="text-[#6C7D93] text-sm md:text-base lg:w-1/2">
            © 2024 Innovate. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center lg:justify-end lg:w-1/2">
            <a href="#" className="text-[#6C7D93] hover:text-[#FF7628] transition text-sm md:text-base">
              Privacy Policy
            </a>
            <a href="#" className="text-[#6C7D93] hover:text-[#FF7628] transition text-sm md:text-base">
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
