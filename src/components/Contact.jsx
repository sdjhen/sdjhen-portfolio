import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setErrorMessage('Please fill in all the fields before submitting.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    try {
      const response = await axios.post('https://getform.io/f/b1ee248d-e531-4f74-b200-c2a814d701f2', formData);

      if (response.status === 200) {
        setSuccessMessage('Form submitted. Thank you!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div name="contact" className='w-full h-screen bg-[#000] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
        {errorMessage && (
          <p className='bg-pink-600 text-gray-300 font-bold inline-flex items-center justify-center h-8'>
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className='bg-pink-600 text-gray-300 font-bold inline-flex items-center justify-center h-8'>
            {successMessage}
          </p>
        )}

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or drop me an email.</p>
          
        </div>
        <input className='bg-[#ccd6fc] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />
        <input className='bg-[#ccd6fc] p-2 my-4' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
        <textarea className='bg-[#ccd6fc] p-2' name='message' rows="10" placeholder='Message Here' value={formData.message} onChange={handleInputChange} />
        <button className='text-white group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate!</button>
      </form>
    </div>
  );
};

export default Contact
