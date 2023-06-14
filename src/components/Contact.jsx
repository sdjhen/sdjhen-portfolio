import React from 'react'

const Contact = () => {
  return (
    <div name="name" className='w-full h-screen bg-[#000] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or drop me an email.</p>
            </div>
            <input className='bg-[#ccd6fc] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6fc] p-2 my-4' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6fc] p-2' type="text" name='message' rows="10" placeholder='Message Here' />
            <button className='text-white group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact