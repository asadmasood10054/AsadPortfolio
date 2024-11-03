import React from 'react'
import HeroImage from '../assets/dp.jpeg'
import Asad_CV from '../assets/ASAD_CV.pdf'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Asad Ullah Masood</span>
        , Data Scientist
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in Generative Ai and Making Bussiness Automate.
      </p>
      <div className='mt-8 space-x-4'>
        <a href='https://www.linkedin.com/in/asad-ullah-masood/' target='_blank'><button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me
        </button>
        </a>
        <a href={Asad_CV} download="Asad_CV.pdf">
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume
          </button>
        </a>
      </div>

    </div>
  )
}

export default Hero