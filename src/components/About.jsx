import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Jason, nice to meet youl. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                    I am driven by an unwavering passion for crafting exceptional software solutions that
                    positively impact the lives of those around me. My academic journey has exposed me to a diverse range of
                    technologies, from low-level programming with C and System Verilog to high-level languages like Java and
                    Javascript. This versatile skill set empowers me to envision and create impactful solutions. I am enthusiastic
                    about applying my expertise to contribute meaningfully to your esteemed company and its goals.

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About