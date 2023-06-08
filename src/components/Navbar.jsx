import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo-white.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] text-gray-300'>
      <div>
      <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
      </div>

      {/* Nav Menu */}
      <div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
          <div className='hidden'>
            <FaBars />
          </div>
          
          
          {/* Mobile Menu */}
          <ul className='hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
          </ul>
          
          
          {/* Social Icons */}
          <div className='hidden'></div>
    </div> 
  )
}



export default Navbar