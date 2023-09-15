import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import PHP from '../assets/php.png'
import MySQL from '../assets/mysql.png'


const Skills = () => {
  return (
   <div name='skills' className='w-full h-screen bg-[#000] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'> // These are the technologies I've worked with:</p>
        </div>
        <div name='exp-container' className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node JS icon" />
                <p className='my-4'>Node JS</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className='my-4'>Tailwind CSS</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={PHP} alt=" PHP icon" />
                <p className='my-4'>PHP</p>
            </div>
            <div className='shadow-sm shadow-[#313639] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MySQL} alt="MySQL icon" />
                <p className='my-4'>MySQL</p>
            </div>
        </div> 
    </div>
   </div>
  )
}

export default Skills