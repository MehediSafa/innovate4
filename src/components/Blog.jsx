import React from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import blog1 from '../assets/blog1.png';

const Blog = () => {
  return (
    <section className="my-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-center items-center pb-12 text-center">
          <img src={banner1} alt="Banner" className="w-24 md:w-32 mb-4" />
          <h2 className="font-sans font-extrabold text-2xl md:text-4xl text-[#192239]">
            Our Latest Blog
          </h2>
          <p className="font-sans font-normal text-sm md:text-lg text-[#6C7D93] max-w-md mt-4">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Blog Card */}
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
              >
                <img
                  src={blog1}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-[#EFEFEF] p-6">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-[#192239]">
                    How to Be Ahead of Stock Changes
                  </h3>
                  <p className="font-sans text-sm md:text-base text-[#6C7D93] mt-2">
                    By John - 5 Comments
                  </p>
                  <div className="relative mt-4 flex items-center">
                    <p className="z-10 font-sans font-bold text-base md:text-lg text-[#202427]">
                      Read More
                    </p>
                    <div className="absolute opacity-50 left-[-10px] bg-[#FF7628] h-8 w-8 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
