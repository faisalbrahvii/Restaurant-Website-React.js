import React, { useState } from 'react';
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left section */}
      <div className='flex items-center gap-4'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
          Best<span className='font-bold text-orange-600'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-100 rounded-full text-sm overflow-hidden'>
          <p className='bg-black text-white px-4 py-2'>Delivery</p>
          <p className='px-4 py-2'>Pickup</p>
        </div>
      </div>

      {/* Search bar */}
      <div className='bg-gray-100 rounded-full flex items-center px-3 py-1 w-[180px] sm:w-[300px] lg:w-[400px]'>
        <AiOutlineSearch size={20} className='text-gray-600' />
        <input
          type='text'
          placeholder='Search food...'
          className='bg-transparent p-2 w-full focus:outline-none text-sm'
        />
      </div>

      {/* Cart button */}
      <button className='hidden md:flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile overlay */}
      {nav && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-10'
          onClick={() => setNav(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[260px] h-screen bg-white z-20 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 shadow-lg`}
      >
        <div className='flex justify-between items-center px-4 py-4'>
          <h2 className='text-2xl font-semibold'>
            Best<span className='font-bold text-orange-600'>Eats</span>
          </h2>
          <AiOutlineClose
            size={25}
            onClick={() => setNav(false)}
            className='cursor-pointer'
          />
        </div>
        <nav className='mt-6'>
          <ul className='flex flex-col gap-4 px-6 text-gray-800'>
            <li className='flex items-center text-lg gap-4'>
              <TbTruckDelivery size={22} /> Orders
            </li>
            <li className='flex items-center text-lg gap-4'>
              <MdFavorite size={22} /> Favourite
            </li>
            <li className='flex items-center text-lg gap-4'>
              <FaWallet size={22} /> Wallets
            </li>
            <li className='flex items-center text-lg gap-4'>
              <MdHelp size={22} /> Help
            </li>
            <li className='flex items-center text-lg gap-4'>
              <AiFillTag size={22} /> Promotion
            </li>
            <li className='flex items-center text-lg gap-4'>
              <BsFillSaveFill size={22} /> Best Ones
            </li>
            <li className='flex items-center text-lg gap-4'>
              <FaUserFriends size={22} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
