import React from 'react';
import banner1 from '../assets/banner1.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import Container from './Container';

const Services = () => {
  return (
    <section className="my-[80px]">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={banner1} alt="Banner" className="w-32 lg:w-40 mb-6" />
          <h2 className="font-sans font-extrabold text-2xl lg:text-4xl py-4">Our Services</h2>
          <p className="font-sans font-normal text-sm lg:text-lg max-w-[700px] pb-12">
            We have been providing great flooring solutions service.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-[99px]">
          {/* Card 1 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm flex flex-col justify-between items-center bg-[#EBF7E9] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <img src={service1} alt="Service 1" className="mb-6" />
            <h3 className="font-sans font-bold text-xl lg:text-2xl text-center">MARKETING STRATEGY</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-4 mb-6">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative">
              <p className="font-sans font-bold text-lg text-[#202427] relative z-10">Read More</p>
              <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-[#FF7628] h-[33px] w-[33px] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm flex flex-col justify-between items-center bg-[#D8EAFF] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <img src={service2} alt="Service 2" className="mb-6" />
            <h3 className="font-sans font-bold text-xl lg:text-2xl text-center">SOCIAL MARKETING</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-4 mb-6">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative">
              <p className="font-sans font-bold text-lg text-[#202427] relative z-10">Read More</p>
              <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-[#FF7628] h-[33px] w-[33px] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[90%] lg:w-[32%] max-w-sm flex flex-col justify-between items-center bg-[#FBF1EC] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <img src={service3} alt="Service 3" className="mb-6" />
            <h3 className="font-sans font-bold text-xl lg:text-2xl text-center">CONTENT MARKETING</h3>
            <p className="font-sans text-sm lg:text-base text-center mt-4 mb-6">
              Social Media has changed the way we interact & do business while creating.
            </p>
            <div className="relative">
              <p className="font-sans font-bold text-lg text-[#202427] relative z-10">Read More</p>
              <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-[#FF7628] h-[33px] w-[33px] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
