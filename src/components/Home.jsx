import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Jason Tran</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an electrical and computer engineer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
As a current student at the University of Washington specializing in software and firmware development, I am driven by my passion for technology and innovation. 
While honing my expertise in software and firmware development, I am also dedicated to enhancing my full stack development skills to become a well-rounded professional. 
The prospect of applying my knowledge and skills to real-world challenges excites me, and I am eager to join a dynamic team where I can make a positive impact. I am committed to continuous 
learning and staying on top of the latest industry trends, making me an asset to any organization. Together, I believe we can make a meaningful difference and push the boundaries of what technology can achieve.
            </p>

            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Home