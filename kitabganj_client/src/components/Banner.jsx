import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BannerCard from '../home/BannerCard';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/*left side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span>
          </h2>
          <p className='md:w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim tempore nemo. Quos sit ullam recusandae beatae aliquid ipsa accusantium alias fugit quod omnis sed ipsum enim, excepturi autem laboriosam!
          </p>
          <div className="flex items-center">
            {/* Input field for book search */}
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Enter book name'
              value={searchTerm}
              onChange={handleSearchChange}
              className='py-2 px-2 rounded-s-sm outline-none mr-4'
            />
            {/* Use Link component instead of button */}
            <Link to={`/book/${searchTerm}`} className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>Search</Link>
          </div>
        </div>

        {/*Right side*/}
        <div>
          {/* BannerCard component */}
          <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
