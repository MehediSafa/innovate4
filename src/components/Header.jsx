import React from 'react'
import Container from './Container'
import logo from '../assets/Logo.png'
import { FaAngleDown } from "react-icons/fa6";


const Header = () => {
  return (
    <section className='mt-[32px]'>
        <Container>
          <div className='flex justify-between items-center'>
          {/* logo */}
          <div className='w-[20%]'>
          <img src={logo} alt="" />
          </div>
          {/* menu */}
          <div className='w-[60%]'>
            <ul className='flex items-center'>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>Home <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>About <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>Service <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>Portfolio <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>Price <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
              <li className='cursor-pointer flex justify-between items-center font-sans font-semibold text-[18px] text-black hover:text-[#FF7628] gap-x-[4px]'>Blog <FaAngleDown className='text-black w-[8px] h-[6px] me-[40px]'/></li>
            </ul>
          </div>
          {/* right */}
          <div className='w-[20%]'>
              <button className='w-[151px] h-[64px] rounded-[100px] bg-[#FF7628] font-sans font-semibold text-[18px] text-white'>Contact Us</button>
          </div>
          </div>
        </Container>
    </section>
  )
}

export default Header