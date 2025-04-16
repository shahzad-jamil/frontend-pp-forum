'use client'
import React from 'react'
import Image from 'next/image'
import profileImage from "../../../public/Ellipse 443.svg"
import editProfile from "../../../public/icons8_create 1.svg"
import plus from "../../../public/icons8_Plus 1.svg"
import facebook from "../../../public/icons8_facebook_circled 2.svg"
import instagram from "../../../public/icons8_instagram 1.svg"
import linkdin from "../../../public/icons8_linkedin_circled 1.svg"
import youtube from "../../../public/icons8_youtube_logo 1.svg"
import twitter from "../../../public/icons8_X 2.svg"
import Link from 'next/link'
import { useState } from 'react'
const page = () => {

  const tabs = ['Activity', 'Followers', 'Following']
  const [activeTab, setActiveTab] = useState('')

  const activities = [
    {
      id: 1,
      userName: 'User_Name',
      title: 'Cricket has become too commercialized.',
      timeAgo: '1 hour ago',
      avatar: profileImage, // Replace with a real image path if needed
    },
    {
      id: 2,
      userName: 'User_Name',
      title: 'Allow us to dock/move the new UI3 toolbar.',
      timeAgo: '2 days ago',
      avatar: profileImage,
    },
  ]


  const followers = [
    {
      id: 1,
      userName: 'Fahad',
      title: 'New Member',
      timeAgo: 'Follow 1 hour ago',
      avatar: profileImage, // Replace with a real image path if needed
    },
    {
      id: 2,
      userName: 'Saad',
      title: 'New Member',
      timeAgo: 'Follow 2 days ago',
      avatar: profileImage,
    },
  ]



  const following = [
    {
      id: 1,
      userName: 'Atif',
      title: 'New Member',

      avatar: profileImage, // Replace with a real image path if needed
    },
    {
      id: 2,
      userName: 'Ali',
      title: 'New Member',

      avatar: profileImage,
    },
  ]
  return (
    <>

      <div className=' w-[95%] lg:w-[80%] mx-auto min-h-screen flex align-center justify-center p-[2px] lg:p-6'>
        <div className='w-[100%]'>
          <div className='w-full'>
            <h1 className='text-[32px] text-center md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
              My Profile
            </h1>
          </div>

          <div className='w-full mt-7 flex flex-col items-start md:flex-row md:items-center gap-7  md:justify-between '>
            <div className='flex items-center gap-3'>
              <div> <Image src={profileImage}
                alt="profileImage"
                height={80}
                width={80} />
              </div>
              <div>
                <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                  User_Name
                </h1>
                <p className='text-[16px] secondary-text-color montserrat-smallweigh-font'>
                  New Member
                </p>
              </div>
            </div>
            {/* Edit Profile button */}
            <div>
              <Link href="/editprofile">
                <button

                  className='button-background-color rounded-[100px] justify-center py-3 md:py-5 px-8 flex items-center gap-3'
                >
                  <Image src={editProfile} alt='post 1' width={20} height={20} />
                  <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                    Edit Profile
                  </h1>
                </button>
              </Link>
            </div>
          </div>

          <div className='w-full mt-10'>
            <div>
              <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                Badges
              </h1>
            </div>

            ` <div className='mt-4 w-full flex justify-center'>
              <p className='text-[16px] secondary-text-color montserrat-smallweigh-font'>
                User_Name did not received any badges yet.
              </p>
            </div>
          </div>

          <div className='w-full mt-10 flex-col'>
            <div className='md:flex justify-between'>
              <div>
                <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                  About
                </h1>
              </div>

              <div>
                <p className='text-[16px] secondary-text-color montserrat-smallweigh-font md:flex gap-2'>
                  Member since:
                  <h1 className='text-[16px] primary-text-color font-semibold montserrat-primary-font'>
                    07 Mar 2025
                  </h1>
                </p>
              </div>
            </div>

            <div className='mt-4 w-full flex justify-center'>
              <p className='text-[14px] secondary-text-color montserrat-smallweigh-font'>
                "Welcome to [Forum Name], the place where [topic/niche] enthusiasts come together! Whether you're a beginner or an expert, we encourage you to introduce yourself. Share your background, interests, and what you hope to learn or contribute!"
              </p>
            </div>
          </div>

          (
          <div className='w-full mt-10'>
            {/* Tabs */}
            <div className='flex flex-wrap gap-5'>
              {['Activity', 'Followers', 'Following'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-color border rounded-[100px] justify-center py-3 md:py-5 px-8 cursor-pointer flex items-center gap-3 ${activeTab === tab ? 'bg-[#6BBD44] text-white' : ''
                    }`}
                >
                  <h1 className='text-[14px] secondary-text-color font-semibold montserrat-secondary-font'>
                    {tab}
                  </h1>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className='mt-6 w-full'>
              {activeTab === 'Activity' && (
                <div className='space-y-4'>
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className='flex items-start gap-3 p-4 bg-gray-50  border-bottom'
                    >
                      {/* <img
                        src={activity.avatar}
                        alt={activity.userName}
                        className='w-10 h-10 rounded-full object-cover'
                      /> */}

                      <Image src={activity.avatar} height={40} width={40} alt={activity.title} />
                      <div className='flex-1'>
                        <p className='text-sm text-gray-700'>
                          <span className='font-semibold'>{activity.userName}</span> has started a topic with the title
                        </p>
                        <p className='text-base font-medium text-gray-900'>{activity.title}</p>
                      </div>
                      <span className='text-xs text-gray-400 whitespace-nowrap'>{activity.timeAgo}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Followers' && (
                <div className='space-y-4'>
                  {followers.map((activity) => (
                    <div
                      key={activity.id}
                      className='flex items-start gap-3 p-4 bg-gray-50 border-bottom'
                    >
                      <Image src={activity.avatar} height={40} width={40} alt={activity.title} />

                      <div className='flex-1 flex flex-col'>
                        <p className='text-sm text-gray-700'>
                          <span className='font-semibold'>{activity.userName}</span>
                        </p>
                        <p className='text-base font-medium text-gray-900'>{activity.title}</p>
                      </div>
                      <span className='text-xs text-gray-400 whitespace-nowrap'>{activity.timeAgo}</span>
                    </div>
                  ))}
                </div>
              )}



              {activeTab === 'Following' && (
                <div className='space-y-4'>
                  {following.map((activity) => (
                    <div
                      key={activity.id}
                      className='flex items-start gap-3 p-4 bg-gray-50 border-bottom'
                    >
                      <Image src={activity.avatar} height={40} width={40} alt={activity.title} />

                      <div className='flex-1 flex flex-col'>
                        <p className='text-sm text-gray-700'>
                          <span className='font-semibold'>{activity.userName}</span>
                        </p>
                        <p className='text-base font-medium text-gray-900'>{activity.title}</p>
                      </div>
                      <span className='text-[14px] rounded-[100px] background-text-color py-3 px-8 spaces-button-color whitespace-nowrap'>Following</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='w-full mt-10'>
            <div className='md:flex justify-between'>
              <div>
                <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                  Spaces
                </h1>
              </div>

              <div>
                <button className='button-background-color rounded-[100px] justify-center py-3 md:py-5 px-8 flex items-center gap-3'>
                  <Image src={plus} alt='post 1' width={20} height={20} />
                  <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                    Create A Space
                  </h1>
                </button>
              </div>
            </div>

            <div className='mt-4 w-full flex justify-center'>
              <p className='text-[16px] secondary-text-color montserrat-smallweigh-font'>
                User_Name did not received any badges yet.
              </p>
            </div>
          </div>

          <div className='w-full mt-10'>
            <div>
              <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                Social Accounts
              </h1>
            </div>

            <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
              {[
                { name: 'Facebook', icon: facebook },
                { name: 'Instagram', icon: instagram },
                { name: 'LinkedIn', icon: linkdin },
                { name: 'YouTube', icon: youtube },
                { name: 'Twitter', icon: twitter },
              ].map((platform, index) => (
                <button
                  key={index}
                  className='border border-color rounded-full justify-start py-3 md:py-5 px-6 flex items-center gap-3'
                >
                  <Image src={platform.icon} alt={`post ${index + 1}`} width={20} height={20} />
                  <h1 className='text-[14px] secondary-text-color font-semibold montserrat-secondary-font'>
                    {platform.name}
                  </h1>
                </button>
              ))}
            </div>
          </div>

          <div className='w-full mt-10 flex flex-col xl:flex-row justify-between items-start  gap-9 md:gap-0'>
            {/* Left Section: Title + Description */}
            <div>
              <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                Account Deletion and Deactivate
              </h1>
              <p className='text-[16px] secondary-text-color montserrat-smallweigh-font'>
                After deleting the account the action can't be undone.
              </p>
            </div>

            {/* Right Section: Buttons */}
            <div className='flex flex-col md:mt-10 xl:mt-0 sm:flex-row gap-4'>
              <button className='bg-[#E53935]  rounded-full py-3 md:py-5 px-6 flex items-center gap-3'>
                <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Delete Account
                </h1>
              </button>

              <button className='bg-[#141A28] rounded-full py-3 md:py-5 px-6 flex items-center gap-3'>
                <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Deactivate Account
                </h1>
              </button>
            </div>
          </div>

          <div className='w-full mt-10 flex lg:flex-row items-start lg:items-center flex-col gap-4 justify-between'>
            <div>
              <h1 className='text-[20px] primary-text-color font-semibold montserrat-primary-font'>
                Export Account Data
              </h1>
            </div>

            <div>
              <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-15 flex items-center gap-3'>
                <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
                  Export Data
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page