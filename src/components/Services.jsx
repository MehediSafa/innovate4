import React from 'react';
import banner1 from '../assets/banner1.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import Container from './Container';

const Services = () => {
  return (
    <section>
      <Container>
        {/* Header Part */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={banner1} alt="Banner" className="w-32 lg:w-40" />
          <h2 className="font-sans font-extrabold text-2xl lg:text-4xl py-4">Our Services</h2>
          <p className="font-sans font-normal text-sm lg:text-lg pb-12">
            We have been providing great flooring solutions service.
          </p>
        </div>
        {/* Body Part */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-[99px]">
          {/* 1 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm h-[395px] flex flex-col justify-center items-center bg-[#EBF7E9] rounded-lg shadow-lg p-4 relative">
            <img src={service1} alt="Service 1" className="" />
            <h3 className="font-sans font-bold text-[30px] lg:text-[30px] mt-4">MARKETING STRATEGY</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-2 w-[250px]">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative pt-[24px]">
              <p className="z-10 font-sans font-bold text-[18px] text-[#202427]">Read More</p>
              <div className="absolute z-0 opacity-[50%] top-[23px] left-[-20px] bg-[#FF7628] h-[33px] w-[33px] rounded-full"></div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm h-[395px] flex flex-col justify-center items-center bg-[#D8EAFF] rounded-lg shadow-lg p-4 relative">
            <img src={service2} alt="Service 2" className="" />
            <h3 className="font-sans font-bold text-xl lg:text-2xl mt-4">Social Marketing</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-2 w-[250px]">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative pt-[24px]">
              <p className="z-10 font-sans font-bold text-[18px] text-[#202427]">Read More</p>
              <div className="absolute z-0 opacity-[50%] top-[23px] left-[-20px] bg-[#FF7628] h-[33px] w-[33px] rounded-full"></div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm h-[395px] flex flex-col justify-center items-center bg-[#FBF1EC] rounded-lg shadow-lg p-4 relative">
            <img src={service3} alt="Service 3" className="" />
            <h3 className="font-sans font-bold text-xl lg:text-2xl mt-4">Content Marketing</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-2 w-[250px]">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative pt-[24px]">
              <p className="z-10 font-sans font-bold text-[18px] text-[#202427]">Read More</p>
              <div className="absolute z-0 opacity-[50%] top-[23px] left-[-20px] bg-[#FF7628] h-[33px] w-[33px] rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
