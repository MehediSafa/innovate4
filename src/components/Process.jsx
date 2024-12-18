import React from 'react'
import Container from './Container'
import banner1 from '../assets/banner1.png'
import pro1 from '../assets/pro1.png'

const Process = () => {
  return (
    <section className='my-[80px]'>
        <Container>
            {/* header part */}
            <div className='flex flex-col justify-center items-center pb-[52px]'>
            <img src={banner1} alt="" />
            <h2 className='pt-[16px] font-sans font-extrabold text-[48px] text-[#192239]'>Our creative 
            </h2>
            <h2 className='py-[16px] font-sans font-extrabold text-[48px] text-[#192239]'>Process.
            </h2>
            <p className='pb-[52px ] font-sans font-normal text-[18px] text-[#6C7D93]'>We provide digital experience services to startups and small businesses.
            </p>
            </div>

            {/* body part */}
                {/* 1  */}
            <div className='flex lg:flex-row flex-col lg:justify-around justify-center  '>
            <div className='lg:w-[30%]  h-[247px] bg-[#EBF7E9] rounded-[20px] lg:mb-0 mb-[20px]'>
            <div className='relative '>
                <p className=' z-20 font-sans font-bold text-[18px] lg:ms-[40px] ms-0 lg:text-start text-center mt-[27px]'>Step-1</p>
                <div className='absolute top-[0] lg:left-[5%] left-[37%] z-10
                w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-[50%]'>

                </div>
            </div>
            <h2 className='font-sans font-semibold text-[30px] pt-[18px] pb-[20px] lg:text-start text-center lg:ms-[40px] ms-0'>Global SEO Research</h2>
            <h2 className='font-sans font-semibold text-[18px] text-[#6C7D93]  lg:text-start text-center lg:ms-[40px] ms-0 pt-[20px] pb-[40px]'>Practical tools and features make it easier to build and manage your site.
            </h2>
            </div>
            {/*  1 image */}
            <div className='w-60%'>
                <img src={pro1} alt="" />
            </div>
            </div>
                {/* 2  */}
                <div className='flex lg:flex-row flex-col lg:justify-around justify-center  '>
                     {/*  1 image */}
            <div className='w-60% mt-6 '>
                <img src={pro1} alt="" />
            </div>
            <div className='lg:w-[30%] w- h-[247px] bg-[#D8EAFF] rounded-[20px] lg:mb-0 mb-[20px] mt-[59px] '>
            <div className='relative '>
                <p className=' z-20 font-sans font-bold text-[18px] lg:ms-[40px] ms-0 lg:text-start text-center mt-[27px]'>Step-2</p>
                <div className='absolute top-[0] lg:left-[5%] left-[37%] z-10
                w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-[50%]'>

                </div>
            </div>
            <h2 className='font-sans font-semibold text-[30px] pt-[18px] pb-[10px] lg:text-start text-center lg:ms-[40px] ms-0'>Social media integration</h2>
            <h2 className='font-sans font-semibold text-[18px] text-[#6C7D93]  lg:text-start text-center lg:ms-[40px] ms-0 pt-[20px] pb-[40px]'>Practical tools and features make it easier to build and manage your site.
            </h2>
            </div>
           
            </div>
                {/* 3 */}
                <div className='flex lg:flex-row flex-col lg:justify-around justify-center  '>
            <div className='lg:w-[30%] w- h-[247px] bg-[#FBF1EC] rounded-[20px] lg:mb-0 mb-[20px] mt-[59px]'>
            <div className='relative '>
                <p className=' z-20 font-sans font-bold text-[18px] lg:ms-[40px] ms-0 lg:text-start text-center mt-[27px]'>Step-1</p>
                <div className='absolute top-[0] lg:left-[5%] left-[37%] z-10
                w-[33px] h-[33px] bg-[#FF7628] rounded-full opacity-[50%]'>

                </div>
            </div>
            <h2 className='font-sans font-semibold text-[30px] pt-[18px] pb-[20px] lg:text-start text-center lg:ms-[40px] ms-0'>Global SEO Research</h2>
            <h2 className='font-sans font-semibold text-[18px] text-[#6C7D93]  lg:text-start text-center lg:ms-[40px] ms-0 pt-[20px] pb-[40px]'>Practical tools and features make it easier to build and manage your site.
            </h2>
            </div>
            {/*  1 image */}
            <div className='w-60%'>
                <img src={pro1} alt="" />
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Process