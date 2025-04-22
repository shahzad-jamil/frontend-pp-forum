'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import create from '../../../public/icons8_create 1.svg';
import article from '../../../public/icons8_regular_document 1.svg';
import question from '../../../public/icons8_questions 1.svg';
import poll from '../../../public/icons8_poll 1.svg';
import discussion from '../../../public/discussion.svg';
import Link from 'next/link';
import search from "../../../public/Search Icon green.svg"
import close from "../../../public/icons8_multiply 2.svg"

const CreateComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect outside clicks

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const actions = [
    {
      image: discussion,
      title: 'Discussion',
      path: '/post-discussion',
      color: 'bg-discussionButtonColor',
    },
    {
      image: article,
      title: 'Article',
      path: '/post-article',
      color: 'bg-articleButtonColor',
    },
    {
      image: poll,
      title: 'Poll',
      path: '/poll',
      color: 'bg-pollButtonColor',
    },
    {
      image: question,
      title: 'Question',
      path: '/post-question',
      color: 'bg-questionButtonColor',
    },
  ];

  return (

    <>
      <div className='w-[80%] mx-auto flex justify-end '>
        <div
          className=' flex justify-end mt-[20px]  px-5'
        >



          <button
            onClick={toggleDropdown}
            className='button-background-color rounded-[100px] md:justify-end py-4 px-4 sm:py-5 sm:px-8 flex md:items-center gap-3'
          >
            <Image src={create} alt='post 1' width={20} height={20} />
            <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Create Thread
            </h1>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className='absolute top-[100%] mt-3 flex flex-col justify-center gap-[10px] dark:bg-primaryColor card-background-color p-4 rounded-[20px] shadow-2xl w-[224px] z-50'>
              {actions.map((action, index) => (
                <Link href={action.path} key={index}>
                  <button
                    className={` text-[16px] w-full rounded-[100px] py-4 px-4 sm:py-5 sm:px-8 flex items-center gap-3 ${action.color}`}
                  >
                    <Image
                      src={action.image}
                      alt='discussion'
                      width={20}
                      height={20}
                    />
                    <span className='text-[16px] background-text-color font-semibold montserrat-secondary-font'>
                      {action.title}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          )}

          {/* <div className='flex justify-between'>
            <div className='flex gap-2'>
              <Image
                src={search}
                alt='search'
                width={18}
                height={18} />

              <input
                type='search'
                placeholder='Search threads, posts and posters'
                className='w-[220px] outline-none montserrat-secondary-font secondary-text-color'
              />
            </div>
            <div>
              <Image
                src={close}
                alt='close'
                width={20}
                height={20} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CreateComponent;
