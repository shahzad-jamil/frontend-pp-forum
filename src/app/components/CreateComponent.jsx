'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import plus from '../../../public/icons8_Plus 1.svg';

const CreateComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className='max-w-[82%] flex justify-end mt-[20px] relative'>
      {/* Create Post Button */}
      <button
        onClick={toggleDropdown}
        className='button-background-color rounded-[100px] justify-center py-3 md:py-5 px-8 flex items-center gap-3'
      >
        <Image src={plus} alt='post 1' width={20} height={20} />
        <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
          Create Post
        </h1>
      </button>

      {/* Dropdown Menu (absolute position) */}
      {showDropdown && (
        <div className='absolute top-[100%] right-0 mt-3 flex flex-col justify-center gap-[20px] bg-white p-4 rounded-[20px] w-[250px] z-50'>
          <button className='button-background-color rounded-[100px] justify-center py-7 flex items-center gap-3'>
            <Image src={plus} alt='discussion' width={20} height={20} />
            <span className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Create Discussion
            </span>
          </button>
          <button className='button-background-color rounded-[100px] justify-center py-7 flex items-center gap-3'>
            <Image src={plus} alt='article' width={20} height={20} />
            <span className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Create Article
            </span>
          </button>
          <button className='button-background-color rounded-[100px] justify-center py-7 flex items-center gap-3'>
            <Image src={plus} alt='poll' width={20} height={20} />
            <span className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Poll
            </span>
          </button>
          <button className='button-background-color rounded-[100px] justify-center py-7 flex items-center gap-3'>
            <Image src={plus} alt='question' width={20} height={20} />
            <span className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Question
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateComponent;
