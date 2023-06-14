import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import Firebase from '../assets/firebase.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#000]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
                <p className='py-6'>// Take a look at some of my recent projects:</p>
            </div>

            {/* Grid Container */}
            <div className='grid md:grid-cols-2 gap-8'>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <img className='rounded-xl group-hover:opacity-10' src={WorkImg} alt="Project image" />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Placeholder Project</h3>
                    <p className='pb-4 pt-2 text-white text-center'>Vanilla JS</p>
                </div>
            </div>
            
            </div>
            {/* End of grid Container */}

            
        </div>
    </div>
  )
}

export default Projects