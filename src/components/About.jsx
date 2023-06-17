import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
        </p>
        </div>
        <div></div>
        </div>
        <div className='max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' sm:text-right text-4xl font-bold '>
                <p>Hi, I'm Sam, pleasure to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>An experienced front end junior developer with a strong foundation acquired through comprehensive bootcamp training. Proficient in React and Node.js, utilising expertise to architect and develop high-quality, performant and mobile-first web applications. Meticulous attention to detail and a commitment to excellence ensure the delivery of refined and intuitive user experiences.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About