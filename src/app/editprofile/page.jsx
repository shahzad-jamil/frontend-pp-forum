'use client';
import React from 'react';
import Image from 'next/image';
import profileImage from "../../../public/Ellipse 443.svg";

const Page = () => {
  return (
    <div className='w-[90%] lg:w-[80%] mx-auto min-h-screen p-6'>
      <h1 className='text-[36px] text-center primary-text-color montserrat-bolder-font'>
        Edit Profile
      </h1>

      <div className='mt-10 space-y-6'>
        {/* Profile Picture Section */}
        <div>
          <h2 className='text-[18px] primary-text-color montserrat-bolder-font'>Profile Picture</h2>
          <p className='text-[14px] primary-text-color montserrat-smallweigh-font'>
            Image should be at least 80 x 80px. Maximum file size: 5 MB
          </p>

          <div className='w-full flex flex-col sm:flex-row items-start md:items-center gap-4 sm:gap-6 p-4 rounded-md'>
            <Image src={profileImage} alt="profile" height={80} width={80} className='rounded-full' />

            <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-10 flex items-center gap-3'>
              <h1 className='text-[14px] background-text-color montserrat-secondary-font'>
                Upload
              </h1>
            </button>
            <button className='bg-[#E53935] rounded-[100px] justify-center py-3 md:py-6 px-10 flex items-center gap-3'>
              <h1 className='text-[14px] background-text-color montserrat-secondary-font'>
                Remove Picture
              </h1>
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div>
            <label className='block text-[18px] primary-text-color montserrat-bolder-font mb-1'>
              First Name
            </label>
            <input
              type="text"
              placeholder="User"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className='block text-[18px] primary-text-color montserrat-bolder-font mb-1'>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              About
            </label>
            <textarea
              rows={4}
              placeholder="Welcome to [Forum Name]..."
              className="w-full p-6 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Phone Number
            </label>
            <input
              type="text"
              placeholder="0300-2565456"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              City
            </label>
            <input
              type="text"
              placeholder="Lahore"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Country
            </label>
            <input
              type="text"
              placeholder="Pakistan"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Date of Birth
            </label>
            <input
              type="text"
              placeholder="17 - 12 - 2000"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Job
            </label>
            <input
              type="text"
              placeholder="Fashion Designer"
              className="w-full p-6 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-[18px]  primary-text-color montserrat-bolder-font mb-1'>
              Forum Signature
            </label>
            <textarea
              rows={3}
              placeholder="Shown at the end of every post"
              className="w-full p-6 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='md:col-span-2 md:flex justify-end'>
            <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-10 flex items-center gap-3'>
              <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                Save Changes
              </h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
