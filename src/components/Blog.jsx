import React from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import blog1 from '../assets/blog1.png';

const Blog = () => {
  return (
    <section className="my-20">
      <Container>
        {/* Header Part */}
        <div className="flex flex-col justify-center items-center pb-12 text-center">
          <img src={banner1} alt="Banner" className="w-24 md:w-32" />
          <h2 className="pt-4 font-sans font-extrabold text-2xl md:text-4xl text-[#192239]">
            Our Latest Blog
          </h2>
          <p className="font-sans font-normal text-sm md:text-lg text-[#6C7D93] max-w-md mt-4">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <img src={blog1} alt="Blog 1" className="w-full h-auto" />
            <div className="bg-[#EFEFEF] p-6">
              <h3 className="font-sans font-medium text-lg md:text-xl text-[#192239]">
                How to Be Ahead of Stock Changes
              </h3>
              <p className="font-sans text-sm md:text-base text-[#6C7D93] mt-2">
                By John - 5 Comments
              </p>
              <div className="relative mt-4">
                <p className="z-10 font-sans font-bold text-base md:text-lg text-[#202427]">
                  Read More
                </p>
                <div className="absolute z-0 opacity-50 top-[0px] left-[-10px] bg-[#FF7628] h-8 w-8 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <img src={blog1} alt="Blog 2" className="w-full h-auto" />
            <div className="bg-[#EFEFEF] p-6">
              <h3 className="font-sans font-medium text-lg md:text-xl text-[#192239]">
                How to Be Ahead of Stock Changes
              </h3>
              <p className="font-sans text-sm md:text-base text-[#6C7D93] mt-2">
                By John - 5 Comments
              </p>
              <div className="relative mt-4">
                <p className="z-10 font-sans font-bold text-base md:text-lg text-[#202427]">
                  Read More
                </p>
                <div className="absolute z-0 opacity-50 top-[0px] left-[-10px] bg-[#FF7628] h-8 w-8 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <img src={blog1} alt="Blog 3" className="w-full h-auto" />
            <div className="bg-[#EFEFEF] p-6">
              <h3 className="font-sans font-medium text-lg md:text-xl text-[#192239]">
                How to Be Ahead of Stock Changes
              </h3>
              <p className="font-sans text-sm md:text-base text-[#6C7D93] mt-2">
                By John - 5 Comments
              </p>
              <div className="relative mt-4">
                <p className="z-10 font-sans font-bold text-base md:text-lg text-[#202427]">
                  Read More
                </p>
                <div className="absolute z-0 opacity-50 top-[0px] left-[-10px] bg-[#FF7628] h-8 w-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
