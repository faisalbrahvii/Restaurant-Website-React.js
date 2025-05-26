import React from 'react';

function HeadLine() {
  const cards = [
    {
      title: "Sun's Out Bogo Out",
      subtitle: 'Through 8/26',
      image:
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'New Restaurant',
      subtitle: 'Added daily',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'We Deliver Desserts',
      subtitle: 'Tasty Treats',
      image:
        'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 grid gap-6 md:grid-cols-3'>
      {cards.map((card, index) => (
        <div key={index} className='relative rounded-xl overflow-hidden shadow-md group'>
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className='w-full h-[160px] md:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/50 text-white flex flex-col justify-between p-4 rounded-xl'>
            <div>
              <p className='text-xl font-bold'>{card.title}</p>
              <p className='text-sm'>{card.subtitle}</p>
            </div>
            <button className='mt-4 w-fit bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-md'>
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeadLine;
