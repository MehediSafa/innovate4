import React, { useState } from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import show1 from '../assets/show1.png';
import show2 from '../assets/show2.png';
import show3 from '../assets/show3.png';
import show4 from '../assets/show4.png';

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Define images with categories
  const images = [
    { id: 1, src: show1, category: 'Digital Mkt' },
    { id: 2, src: show2, category: 'Branding' },
    { id: 3, src: show3, category: 'Content Managements' },
    { id: 4, src: show4, category: 'Digital Mkt' },
    { id: 5, src: show1, category: 'Content Managements' },
    { id: 6, src: show2, category: 'Branding' },
  ];

  // Filter images based on the active category
  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter((image) => image.category === activeCategory);

  return (
    <section className='my-[80px]'>
      <Container>
        {/* Header */}
        <div className='flex flex-col justify-center items-center pb-[18px]'>
          <img src={banner1} alt="Banner" />
          <p className='font-sans font-extrabold text-[48px] text-[#192229] pb-[49px]'>
            Work Showcase
          </p>
        </div>

        {/* Category Menu */}
        <div className='text-center'>
          <ul className='flex justify-center flex-wrap items-center gap-x-4 gap-y-4 pb-[52px]'>
            {['All', 'Digital Mkt', 'Branding', 'Content Managements'].map((category) => (
              <li
                key={category}
                className={`cursor-pointer underline decoration-[#6c7D93] hover:decoration-[#FF7628] font-sans font-semibold text-[24px] text-[#6c7D93] hover:text-[#FF7628] ${
                  activeCategory === category ? 'text-[#FF7628] decoration-[#FF7628]' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Grid */}
        <div className='flex justify-center flex-wrap lg:gap-x-8 gap-x-3 gap-y-6 mt-[30px]'>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className='lg:w-[30%] w-[45%] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <img src={image.src} alt={image.category} className='w-full h-auto object-cover' />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
