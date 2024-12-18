import React from 'react'
import Container from './Container'
import banner1 from '../assets/banner1.png'
import show1 from '../assets/show1.png'
import show2 from '../assets/show2.png'
import show3 from '../assets/show3.png'
import show4 from '../assets/show4.png'

const Showcase = () => {
  return (
    <section className='my-[80px]'>
        <Container>
            <div className='flex flex-col justify-center items-center pb-[18px]'>
            <img src={banner1} alt="" />
            <p className='font-sans font-extrabold text-[48px] text-[#192229] pb-[49px]'>Work Showcase </p>
            </div>

            <div className='text-center'>
             <ul className='flex justify-center flex-wrap items-center gap-x-4 gap-y-4 pb-[52px]'>
                <li className='cursor-pointer underline decoration-[#6c7D93] hover:decoration-[#FF7628] font-sans font-semibold text-[24px] text-[#6c7D93] hover:text-[#FF7628]'>All</li>
                <li className='cursor-pointer underline decoration-[#6c7D93] hover:decoration-[#FF7628] font-sans font-semibold text-[24px] text-[#6c7D93] hover:text-[#FF7628]'>Digital Mkt</li>
                <li className='cursor-pointer underline decoration-[#6c7D93] hover:decoration-[#FF7628] font-sans font-semibold text-[24px] text-[#6c7D93] hover:text-[#FF7628]'>Branding</li>
                <li className='cursor-pointer underline decoration-[#6c7D93] hover:decoration-[#FF7628] font-sans font-semibold text-[24px] text-[#6c7D93] hover:text-[#FF7628]'>Content Managements</li>
                
            </ul>   
            </div>

            <div className='flex justify-center flex-wrap lg:gap-x-8 gap-x-3 gap-y-6 mt-[30px]'>
            <div className='lg:w-[20%]  w-[30%]'>
                <img src={show1} alt="" />
            </div >  
            <div className='lg:w-[37%] w-[30%]'>
                <img src={show2} alt="" />
            </div> 
             <div className='lg:w-[20%] w-[30%]'>
                <img src={show1} alt="" />
            </div>
            </div>


            <div className='flex justify-center flex-wrap lg:gap-x-8 gap-x-3 gap-y-6 mt-[30px]'>
            <div className='lg:w-[20%]  w-[30%]'>
                <img src={show1} alt="" />
            </div >  
            <div className='lg:w-[37%] w-[30%]'>
                <img src={show2} alt="" />
            </div> 
             <div className='lg:w-[20%] w-[30%]'>
                <img src={show1} alt="" />
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Showcase