import React from 'react'
import Container from './Container'
import banner1 from '../assets/banner1.png'
import right1 from '../assets/right1.png'
import right2 from '../assets/right2.png'
import man from '../assets/man.png'
import thread from '../assets/thread.png'
import fb from '../assets/fb.png'
import thread2 from '../assets/thread2.png'
import insta from '../assets/insta.png'
import whatsapp from '../assets/whatsapp.png'
import twitter from '../assets/twitter.png'

const Banner = () => {
  return (
    <section className='mt-[95px] '>
        <Container>
            {/* main div */}
            <div className='flex relative'>
                {/* banner left */}
                <div className='w-48% pb-[190px] '>
                    <img
                    className='mb-[22px]' 
                    src={banner1} alt="" />
                    <h2 className='font-sans font-extrabold text-[72px]'>We Are Digital</h2>
                    <div className=''>
                        <h2 className='font-sans font-extrabold text-[72px] text-[#FF7628]'>Marketing</h2>
                        <h2  className='font-sans font-extrabold text-[72px] ms-5'>Agency</h2>
                        <p className='font-sans font-normal text-[20px] mt-[20px] mb-[32px] w-[35%]'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
                        <button className='w-[232px] h-[64px] bg-[#FF7628] rounded-[100px] text-white font-sans font-bold text-[20px]'>get free quoto</button>
                    </div>
                </div>
                {/* right part  */}
                <div className='48% relative mt-[95px]'>
                    <img className='rounded-[60px]' src={right1} alt="" />
                    

                    <img 
                    className='absolute  translate-y-[-50%] translate-x-[50%] top-0 left-0 z-20 border-3 border-[#FF7628]'  src={right2} alt="" />
                    
                  {/* fb image */}
                  <img className=' absolute top-[-140px] left-0' 
                  src={fb} alt="" />
                {/* insta image */}
                  <div className='absolute top-[180px] left-[-140px]'>
                    <img src={insta} alt="" />
                  </div>
                  {/* whatsapp image */}
                  <div className='absolute top-[250px] right-[-150px]'>
                    <img src={whatsapp} alt="" />
                  </div>

                </div>
                <div className='absolute top-0 left-[-200px] z-20 overflow-hidden '>
                    <img src={man} alt="" />
                </div>
                <div className='absolute top-[-400px] left-[-300px] overflow-hidden '>
                    <img src={thread} alt="" />
                </div>
                  {/* thread img */}
                  <div className='absolute top-[-200px] right-[-180px] z[-1]'>
                        <img src={thread2} alt="" />
                    </div>

                    {/* twitter image */}
                    <div className='absolute bottom-[200px] left-[-150px]'>
                        <img src={twitter} alt="" />
                    </div>



            </div>
        </Container>
    </section>
  )
}

export default Banner