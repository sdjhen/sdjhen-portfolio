import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TbCertificate } from "react-icons/tb";
import Logo from '../assets/logo-white.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] text-gray-300'>
      <div>
      <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
      </div>

      {/* Nav Menu */}
      <nav className='hidden md:flex'>
        <ul className=' hidden md:flex'>
          <li className=' hover:text-pink-600'>Home</li>
          <li className=' hover:text-pink-600'>About</li>
          <li className=' hover:text-pink-600'>Skills</li>
          <li className=' hover:text-pink-600'>Projects</li>
          <li className=' hover:text-pink-600'>Contact</li>
        </ul>
        </nav>

      {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>
          
          {/* Mobile Menu */}
          <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center'}>
          <img src={Logo} alt="Logo Image" style={{width: '100px'}} />
          <li className='py-6 text-4xl hover:text-pink-600'>Home</li>
          <li className='py-6 text-4xl hover:text-pink-600' >About</li>
          <li className='py-6 text-4xl hover:text-pink-600'>Skills</li>
          <li className='py-6 text-4xl hover:text-pink-600'>Pro</li>
          <li className='py-6 text-4xl hover:text-pink-600'>Contact</li>
          </ul>
          
           {/* Social Icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  LinkedIn <FaLinkedin size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  GitHub <FaGithub size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  Email <HiOutlineMail size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  Certificate <TbCertificate size={30} />
                </a>
              </li>
            </ul>
          </div>
    </div> 
  )
}

export default Navbar