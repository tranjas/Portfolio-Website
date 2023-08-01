import React from 'react'

import C from '../assets/C.png'
import CSS from '../assets/CSS.png';
import HTML from '../assets/HTML.png';
import Java from '../assets/Java.png';
import Javascript from '../assets/Javascript.png';
import Node from '../assets/Node.png';
import SystemVerilog from '../assets/SystemVerilog.png';
import FPGA from '../assets/FPGA.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Experience </p>
                <p className='py-4'> These are the skills I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-10 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="C icon" />
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SystemVerilog} alt="System Verilog icon" />
                    <p className='my-4'>System Verilog</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FPGA} alt="FPGA icon" />
                    <p className='my-4'>FPGA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills