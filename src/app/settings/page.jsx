"use client";
import React from 'react'
import { useState } from 'react';
import Notifications from '../components/Notifications';
import Privacy from '../components/Privacy';
import LoginHistory from '../components/LoginHistory';

const page = () => {

  const tabs = ['Notifications', 'Privacy Settings', 'Login History & Suspicious Activity']
  const [activeTab, setActiveTab] = useState('')

  return (
    <>
      <div className='w-full min-h-screen flex justify-center'>
        <div className='w-[80%]'>
          <h1 className='text-[36px] text-center primary-text-color montserrat-bolder-font mt-10'>
            Settings
          </h1>

          <div>
            {/* Tabs */}
            <div className='flex flex-wrap gap-5 mt-10'>
              {['Notifications', 'Privacy Settings', 'Login History & Suspicious Activity'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-color border rounded-[100px] justify-center py-3 md:py-5 px-8 cursor-pointer flex items-center gap-3 ${activeTab === tab ? 'bg-[#4AB100] ' : ''
                    }`}
                >
                  <h1 className='text-[14px] text-backgroundTextColor secondary-text-color font-semibold montserrat-secondary-font'>
                    {tab}
                  </h1>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className='mt-6 w-full'>
              {activeTab === 'Notifications' && (
                <div className='space-y-4'>
                  <Notifications />
                </div>
              )}

              {activeTab === 'Privacy Settings' && (
                <div className='space-y-4'>
                  <Privacy />
                </div>
              )}



              {activeTab === 'Login History & Suspicious Activity' && (
                <div className='space-y-4'>
                  <LoginHistory />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page