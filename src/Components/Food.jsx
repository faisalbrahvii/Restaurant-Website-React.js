import React, { useState } from 'react';
import { data } from '../data/data.js';
import { Button } from 'antd';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter by category type
  const filterType = (category) => {
    if (category === 'all') {
      setFoods(data);
    } else {
      setFoods(data.filter((item) => item.category === category));
    }
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mt-6'>

        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
          <div className='flex flex-wrap gap-2'>
            <Button
              onClick={() => filterType('all')}
              className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
            >
              All
            </Button>
            <Button
              onClick={() => filterType('burger')}
              className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
            >
              Burger
            </Button>
            <Button
              onClick={() => filterType('pizza')}
              className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
            >
              Pizza
            </Button>
            <Button
              onClick={() => filterType('salad')}
              className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
            >
              Salads
            </Button>
            <Button
              onClick={() => filterType('chicken')}
              className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
            >
              Chicken
            </Button>
          </div>
        </div>

        {/* Filter Price */}
        <div className='mt-6 lg:mt-0'>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex flex-wrap gap-2 max-w-[390px]'>
            {['$6', '$7', '$8', '$10'].map((price) => (
              <Button
                key={price}
                onClick={() => filterPrice(price)}
                className='border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white'
              >
                {price}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Display */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 transform transition duration-300 ease-in-out'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-4 py-3'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white px-2 py-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
