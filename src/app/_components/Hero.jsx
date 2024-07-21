import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(/dollar-banknotes-frame.jpg)' }}>
      <div className='flex items-center justify-center text-center'>
        <p className='text-black text-xl md:text-2xl lg:text-3xl'>Manage your money with AI driven Finance manager</p>
      </div>
      <div>
        <h1 className='font-bold text-6xl text-purple-800 text-center bg-transparent bg-opacity-75 p-4 rounded'>Money Got No Chill</h1>
      </div>
    </div>
  );
}

export default Hero;
