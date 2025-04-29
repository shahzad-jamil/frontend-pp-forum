"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // ✅ This is the correct import for Next.js
import switchOn from "../../../public/Switch on.svg"; // ✅ This is okay if these are static assets
import switchOff from "../../../public/Switch off.svg";

const LoginHistory = () => {
  const [bestAnswer, setBestAnswer] = useState(true);


  const Toggle = ({ enabled, setEnabled }) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex items-center transition-colors duration-300 
    ${enabled ? "bg-buttonBackgroundColor" : "bg-toggleBackgroundColor border-toggleButtonColor border-[2px]"}
    w-16 h-10 rounded-full`}
    >
      <span
        className={`absolute top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-300
        ${enabled
            ? "translate-x-8 w-7 h-7 bg-white"  // When enabled: bigger ball, white color
            : "translate-x-1 w-5 h-5 bg-toggleButtonColor" // When disabled: smaller ball, default color
          }
      `}
      />
    </button>
  );


  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-6xl flex flex-col items-center px-4 sm:px-6'>
        <h1 className='font-Montserrat text-primaryColor dark:text-backgroundTextColor font-[700] text-[20px]'>
          Current Session
        </h1>
        <div className=' w-[100%] flex items-center '>

          <div className='w-[37%] mx-auto'>
            <div className=' flex  items-center   gap-[23px] py-[5px]  '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Last Accessed:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Monday at 10: 13 pm
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>
          </div>


        </div>



        <div className='w-[50%] mt-10'>
          <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
            If you notice any unfamiliar devices or locations, dick 'End Activity' to end fre
            session. This list does not currently include sessions on Forum PakPassion.net mobile site.
          </p>
        </div>
        <div className=' w-[100%] mt-[20px] flex items-center '>

          <div className='w-[30%] mx-auto'>
            <div className=' flex  items-center   gap-[23px] py-[5px]  '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Last Accessed:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Monday at 10: 13 pm
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>
          </div>

          <div className=' '>
            <button>
              <h1 className='text-[16px] text-center text-questionButtonColor  montserrat-secondary-font'>
                End Activity
              </h1>
            </button>
          </div>
        </div>


        <div className=' w-[100%] mt-[20px] flex items-center '>

          <div className='w-[30%] mx-auto'>
            <div className=' flex  items-center   gap-[23px] py-[5px]  '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Last Accessed:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Monday at 10: 13 pm
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>

            <div className=' flex  items-center   gap-[40px] py-[5px] '>
              <h1 className='text-[16px] text-center primary-text-color montserrat-secondary-font'>
                Device Type:
              </h1>
              <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                Hyper - X
              </p>
            </div>
          </div>

          <div className=' '>
            <button>
              <h1 className='text-[16px] text-center text-questionButtonColor  montserrat-secondary-font'>
                End Activity
              </h1>
            </button>
          </div>
        </div>





        <div className="flex gap-5">
          <Toggle enabled={bestAnswer} setEnabled={setBestAnswer} />
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Best answer
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Answer was marked as best answer in a topic you subscribed to
            </p>
          </div>
        </div>
        {/* Other content... */}

        <div className="flex flex-col md:flex-row gap-5 items-center mt-10">
          <Toggle enabled={bestAnswer} setEnabled={setBestAnswer} />
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Best answer
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Answer was marked as best answer in a topic you subscribed to
            </p>
          </div>
        </div>

        {/* Other content... */}
      </div>
    </div>
  );
};

export default LoginHistory;
