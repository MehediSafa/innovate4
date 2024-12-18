import React from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import pro1 from '../assets/pro1.png';

const Process = () => {
  return (
    <section className="my-[80px]">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-center items-center pb-[52px] text-center">
          <img src={banner1} alt="Banner" className="w-[120px] md:w-[140px]" />
          <h2 className="pt-[16px] font-sans font-extrabold text-[36px] md:text-[48px] text-[#192239]">
            Our Creative
          </h2>
          <h2 className="py-[16px] font-sans font-extrabold text-[36px] md:text-[48px] text-[#192239]">
            Process
          </h2>
          <p className="pb-[32px] font-sans font-normal text-[16px] md:text-[18px] text-[#6C7D93] max-w-[700px]">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-[50px]">
          {/* Step 1 */}
          <div className="flex lg:flex-row flex-col items-center justify-between">
            {/* Card */}
            <div className="lg:w-[30%] w-full p-6 bg-[#EBF7E9] rounded-[20px] shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute top-[-10px] left-[50%] lg:left-[5%] transform -translate-x-1/2 lg:translate-x-0 w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-50"></div>
                <p className="font-sans font-bold text-[18px] text-center lg:text-start relative z-10">Step-1</p>
              </div>
              <h2 className="font-sans font-semibold text-[24px] md:text-[30px] text-center lg:text-start pt-[18px]">
                Global SEO Research
              </h2>
              <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#6C7D93] text-center lg:text-start pt-[12px]">
                Practical tools and features make it easier to build and manage your site.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[60%] mt-6 lg:mt-0 flex justify-center">
              <img src={pro1} alt="Step 1" className="w-[80%] rounded-[20px] shadow-xl" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex lg:flex-row-reverse flex-col items-center justify-between">
            {/* Card */}
            <div className="lg:w-[30%] w-full p-6 bg-[#D8EAFF] rounded-[20px] shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute top-[-10px] left-[50%] lg:left-[5%] transform -translate-x-1/2 lg:translate-x-0 w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-50"></div>
                <p className="font-sans font-bold text-[18px] text-center lg:text-start relative z-10">Step-2</p>
              </div>
              <h2 className="font-sans font-semibold text-[24px] md:text-[30px] text-center lg:text-start pt-[18px]">
                Social Media Integration
              </h2>
              <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#6C7D93] text-center lg:text-start pt-[12px]">
                We provide practical tools to integrate your social media presence seamlessly.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[60%] mt-6 lg:mt-0 flex justify-center">
              <img src={pro1} alt="Step 2" className="w-[80%] rounded-[20px] shadow-xl" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex lg:flex-row flex-col items-center justify-between">
            {/* Card */}
            <div className="lg:w-[30%] w-full p-6 bg-[#FBF1EC] rounded-[20px] shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute top-[-10px] left-[50%] lg:left-[5%] transform -translate-x-1/2 lg:translate-x-0 w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-50"></div>
                <p className="font-sans font-bold text-[18px] text-center lg:text-start relative z-10">Step-3</p>
              </div>
              <h2 className="font-sans font-semibold text-[24px] md:text-[30px] text-center lg:text-start pt-[18px]">
                Optimized Content Strategy
              </h2>
              <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#6C7D93] text-center lg:text-start pt-[12px]">
                Crafting content strategies to grow your brand effectively and efficiently.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[60%] mt-6 lg:mt-0 flex justify-center">
              <img src={pro1} alt="Step 3" className="w-[80%] rounded-[20px] shadow-xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
