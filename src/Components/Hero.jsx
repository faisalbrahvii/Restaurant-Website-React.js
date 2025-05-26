import React from 'react';

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-6'>
      <div className='relative max-h-[500px] rounded-xl overflow-hidden shadow-md'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-start text-white px-6 md:px-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'>
            Foods <span className='text-orange-500'>Delivery</span>
          </h1>
        </div>

        {/* Background Image */}
        <img
          className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-500 hover:scale-105'
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Food Delivery'
        />
      </div>
    </div>
  );
}

export default Hero;
