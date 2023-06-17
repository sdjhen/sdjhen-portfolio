import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TbCertificate } from "react-icons/tb";
import {Link} from 'react-scroll'
import Logo from '../assets/logo-white.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

// Function to handle email social icon
const handleEmailClick = () => {
  const email = 'sdjhen@hotmail.com';
  const mailLink = `mailto:${email}`;

  // Redirect user to email client
    window.location.href = mailLink;
};

return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] text-gray-300 z-50'>
      <div>
      <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
      </div>

      {/* Nav Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='hero' smooth={true} duration={500} className='hover:text-pink-600'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover:text-pink-600' >
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover:text-pink-600'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className='hover:text-pink-600'>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover:text-pink-600'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>
          
          {/* Mobile Menu */}
          <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center'
        }
      >
         <img src={Logo} alt="Logo Image" style={{width: '100px'}} />
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='hero' smooth={true} duration={500} className='hover:text-pink-600'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className='hover:text-pink-600'>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-pink-600'>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500} className='hover:text-pink-600'>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-pink-600'>
            Contact
          </Link>
        </li>
      </ul>
          
           {/* Social Icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' target='_blank'
                href="https://www.linkedin.com/in/sam-h-812513196/
                ">
                  LinkedIn <FaLinkedin size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' target='_blank'
                href="https://github.com/sdjhen">
                  GitHub <FaGithub size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300'>
                <button className='flex justify-between items-center w-full text-gray-300'
                onClick={handleEmailClick}>
                  Email <HiOutlineMail size={30} />
                </button>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' target='_blank'
                href="https://skillsbootcamp.credential.getsmarter.com/738fe8f8-6155-4a34-8b7c-b0b77553f710#gs.0o8pcl">
                  Certificate <TbCertificate size={30} />
                </a>
              </li>
            </ul>
          </div>
    </div> 
  )
}

export default Navbar