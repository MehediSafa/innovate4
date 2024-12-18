import React from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import right1 from '../assets/right1.png';
import right2 from '../assets/right2.png';
import man from '../assets/man.png';
import thread from '../assets/thread.png';
import fb from '../assets/fb.png';
import thread2 from '../assets/thread2.png';
import insta from '../assets/insta.png';
import whatsapp from '../assets/whatsapp.png';
import twitter from '../assets/twitter.png';

const Banner = () => {
  return (
    <section className="mt-16 lg:mt-[95px]">
      <Container>
        {/* Main Div */}
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Side */}
          <div className="lg:w-1/2 w-full pb-12 lg:pb-[190px]">
            <img className="mb-6 w-full max-w-sm lg:max-w-full" src={banner1} alt="Banner" />
            <h2 className="font-sans font-extrabold text-4xl lg:text-[72px] leading-tight">
              We Are Digital
            </h2>
            <h2 className="font-sans font-extrabold text-4xl lg:text-[72px] leading-tight text-[#FF7628]">
              Marketing
            </h2>
            <h2 className="font-sans font-extrabold text-4xl lg:text-[72px] leading-tight ms-2 lg:ms-5">
              Agency
            </h2>
            <p className="font-sans font-normal text-base lg:text-[20px] mt-5 mb-8 lg:w-[80%]">
              Use customer data to build great and solid product experiences that convert. Digital
              marketing’s development has changed the way brands and businesses use technology for
              marketing.
            </p>
            <button className="w-[200px] lg:w-[232px] h-[48px] lg:h-[64px] bg-[#FF7628] rounded-full text-white font-sans font-bold text-base lg:text-[20px]">
              Get Free Quote
            </button>
          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 w-full relative mt-10 lg:mt-[95px] flex justify-center items-center">
            <img className="rounded-[30px] lg:rounded-[60px] w-[80%] lg:w-full" src={right1} alt="Right" />
            <img
              className="absolute w-[30%] lg:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#FF7628]"
              src={right2}
              alt="Overlay"
            />
            {/* Floating Icons */}
            <img className="absolute top-[-40px] lg:top-[-140px] lg:left-2" src={fb} alt="Facebook" />
            <img className="absolute top-[200px] lg:top-[180px] left-[40px] lg:left-[-140px]" src={insta} alt="Instagram" />
            <img className="absolute top-[200px] lg:top-[250px] right-[-0px] lg:right-[-150px]" src={whatsapp} alt="WhatsApp" />
          </div>
          {/* Decorative Images */}
          <div className="absolute top-[-80px] lg:top-0 left-[-100px] lg:left-[-200px] z-20">
            <img src={man} alt="Man" />
          </div>
          <div className="absolute top-[-300px] lg:top-[-400px] left-[-200px] lg:left-[-300px]">
            <img src={thread} alt="Thread" />
          </div>
          <div className="absolute top-[-150px] lg:top-[-200px]right-[-50px] lg:right-[-180px] z-[-1] overflow-x-hidden">
            <img src={thread2} alt="Thread 2" />
          </div>
          <div className="absolute bottom-[100px] lg:bottom-[200px] left-[-40px] lg:left-[-150px]">
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
