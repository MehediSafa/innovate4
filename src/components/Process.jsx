import React from 'react'
import Container from './Container'
import banner1 from '../assets/banner1.png'

const Process = () => {
  return (
    <section className='my-[80px]'>
        <Container>
            {/* header part */}
            <div className='flex flex-col justify-center items-center'>
            <img src={banner1} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Process