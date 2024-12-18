import React from 'react'
import Container from './Container'
import who1 from '../assets/who1.png'
import banner1 from '../assets/banner1.png'
import who2 from '../assets/who2.png'
import dot from '../assets/orangedot.png'


const WhoWeAre = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <div className='flex lg:flex-row flex-col'>
                {/* left */}
                <div className='lg:w-[48%]  relative'>
                    <div className='ms-[100px]'>
                    <div className='z-20'>

                    <img className='lg:w-[60%]  ' src={who1} alt="" />
                    </div>
                    </div>
                    <div className='absolute top-[50%] left-0 z-30'>
                        <img className='lg:w-full w-[60%]' src={who2} alt="" />
                    </div>
                    <div className='absolute top-[30%] left-0'>
                        <img className='lg:w-full w-[60%]' src={dot} alt="" />
                    </div>
                </div> 
                   {/* right */}
                <div className='lg:w-[48%] w-full lg:text-start text-center lg:mt-[0] mt-[50px]'>
                    <div className='flex justify-center'>

                    <img src={banner1} alt="" />
                    </div>
                    <h2 className='font-sans font-extrabold text-[48px] my-[16px]'>Who We Are</h2>
                    <h2 className='font-sans font-normal text-[18px] py-[16px] w-[350px] text-[#6C7D93]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </h2>
                    <h2 className='font-sans font-normal text-[12px] text-[#6C7D93]
]'>Join the 10.000+ Companys Trusting </h2>
                </div>    
            </div>
        </Container>
    </section>
  )
}

export default WhoWeAre