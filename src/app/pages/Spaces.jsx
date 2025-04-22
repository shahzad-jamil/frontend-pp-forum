import React from 'react'
import post1 from "../../../public/image 115.svg"
import post2 from "../../../public/image116.svg"
import plus from "../../../public/icons8_Plus 1.svg"
import viewMore from "../../../public/icons8_expand_arrow 1.svg"
import Image from 'next/image'

const Spaces = () => {
  const cardData = [
    {
      title: "Spaces you might like",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    },
    {
      title: "Cricket Zones",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    },
    {
      title: "Off Topic Discussions",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    }
  ]

  return (
    <div className='max-w-[80%] mt-[20px] mx-auto pt-6'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl md:text-[30px] primary-text-color montserrat-bolder-font'>
            Discover Spaces
          </h1>
          <p className='text-[16px] secondary-text-color montserrat-smallweigh-font'>
            Anything and everything to do with the great game.
          </p>
        </div>
        <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-8 flex items-center gap-3'>
          <Image src={plus} alt='post 1' width={20} height={20} />
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Create A Space
          </h1>
        </button>
      </div>

      {/* Dynamic Sections */}
      {cardData.map((section, index) => (
        <div key={index} className='mt-10'>
          <h2 className='text-xl md:text-[24px] font-semibold primary-text-color montserrat-bolder-font mb-6'>
            {section.title}
          </h2>

          <div className='grid grid-cols-1 mt-[20px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {section.data.map((item, idx) => (
              <div key={idx} className='bg-white flex flex-col rounded-2xl shadow-sm overflow-hidden'>
                <div className=' w-full overflow-hidden'>
                  <Image src={item.img} alt='card-img' width={350} height={180} className='w-full h-full object-cover' />
                </div>
                <div className='p-4 flex flex-col items-center text-center'>
                  <h3 className='text-[18px] primary-text-color montserrat-bolder-font'>{item.title}</h3>
                  <p className='text-[14px] secondary-text-color montserrat-smallweigh-font mt-2'>{item.description}</p>
                  <button className='mt-4 w-full rounded-[100px] spaces-button-color background-text-color  p-3 md: py-3 px-10'>
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center my-6'>
            <button className='flex items-center gap-2 viewmore-button-color px-6 py-3 rounded-full text-sm'>
              <span>View More</span>
              <Image src={viewMore} alt='expand' width={14} height={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Spaces
