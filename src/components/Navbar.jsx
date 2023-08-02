import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { saveAs } from 'file-saver';
import Resume from '../assets/Jason-Resume.pdf'



const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleDownload = () => {
        saveAs(Resume, 'Jason-Resume.pdf');
      };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
        <div>
            <img src = {Logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>

        {/* menu */}

        <ul className='hidden md:flex'>
            <li>
                <Link activeClass="active" to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between justify-items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a  className='font-bold flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/jason-tran-8126301bb/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between justify-items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a  className='font-bold flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/tranjas'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between justify-items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a  className='font-bold flex justify-between items-center w-full text-gray-300'
                    href='contact'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between justify-items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a  className='font-bold flex justify-between items-center w-full text-gray-300'
                    href='' onClick={handleDownload}>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar