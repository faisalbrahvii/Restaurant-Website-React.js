import React from 'react'

function HeadLine() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-4'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out Bogo Out</p>
                <p className='px-2'>Through 8/26</p>
                <button  className=' rounded-md  m-3 p-2 text-[12px] border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white   text-black mx-2 absolute bottom-5'>Order Now</button>            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Resturant</p>
                <p className='px-2'>Added daily</p>
                <button  className='rounded-md m-3 p-2 text-[12px] border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white   text-black mx-2 absolute bottom-5'>Order Now</button>            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="//images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className=' rounded-md m-3 p-2 text-[12px] border-orange-600 bg-orange-600 hover:bg-orange-700 hover:text-white   text-black mx-2 absolute bottom-5'>Order Now</button></div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="//images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop" alt="" />
        </div>
    </div>
  )
}

export default HeadLine
