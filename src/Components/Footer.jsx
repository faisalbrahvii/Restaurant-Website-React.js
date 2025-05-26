import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6 mt-10'>
      <div className='max-w-[1640px] mx-auto px-4 text-center text-sm sm:text-base'>
        &copy; {new Date().getFullYear()} <span className='font-semibold'>Food Restaurant</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
