import React, { useState } from 'react';
import { data } from '../data/data.js';
import { Button } from 'antd'

const Food = () => {
    console.log(data);
    const [foods, setFoods] = useState(data)

    //filter type burger
    const filtertype = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
    // filter price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items  </h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type </p>
                    <div className='flex justify-between flex-wrap mt-2'>
                        <Button onClick={() => setFoods(data)} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>All</Button>
                        <Button onClick={() => filtertype('burger')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>Burger</Button>
                        <Button onClick={() => filtertype('pizza')} className='m-1 border-orange-600    bg-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</Button>
                        <Button onClick={() => filtertype('salad')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>Salads</Button>
                        <Button onClick={() => filtertype('chicken')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</Button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'> Filter Price</p>
                    <div className='flex justify-between max-w-[390px] mt-2 w-full'>
                        <Button onClick={() => filterPrice('$6')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>$6</Button>
                        <Button onClick={() => filterPrice('$7')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>$7</Button>
                        <Button onClick={() => filterPrice('$8')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>$8</Button>
                        <Button onClick={() => filterPrice('$10')} className='m-1 border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white'>$10</Button>
                    </div>
                </div>
            </div>

            {/* display */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 '>
                        <img src={item.image} alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />

                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold '>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 font-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food
