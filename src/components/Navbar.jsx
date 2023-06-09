import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        </nav>

      {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>
          
          
          {/* Mobile Menu */}
          <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center'}>
          <img src={Logo} alt="Logo Image" style={{width: '100px'}} />
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl' >About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
          </ul>
          
          
          {/* Social Icons */}
          <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
    </div> 
  )
}



export default Navbar