import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#000]'>

{/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sam Hendry</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>A junior developer dedicated to creating seamless and intuitive user interfaces. Skilled in HTML, CSS, JavaScript and PHP, I aim to deliver visually captivating and accessible websites. Passionate about collaborating on innovative projects and continuously expanding my skill set.</p>
    <div>
    <div>
    <div>
    <div>
    <div>
  <Link
    to="projects"
    smooth={true}
    duration={500}
    className='text-white group border-2 px-8 py-4 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 max-w-max'
  >
    View Work 
    <span className='group-hover:rotate-90 duration-300'>
      <HiArrowNarrowRight className='ml-3' />
    </span>
  </Link>
</div>

</div>

</div>

</div>
    </div>
    </div>
    
     </div>
  )
}

export default Hero