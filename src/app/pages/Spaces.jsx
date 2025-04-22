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
    <div className='w-full max-w-[1300px] mx-auto px-4 py-10'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl md:text-[30px] primary-text-color montserrat-bolder-font'>
            Discover Spaces
          </h1>
          <p className='text-base secondary-text-color montserrat-smallweigh-font'>
            Anything and everything to do with the great game.
          </p>
        </div>
        <button className='button-background-color rounded-full py-3 px-6 flex items-center gap-2'>
          <Image src={plus} alt='plus' width={20} height={20} />
          <span className='text-sm font-semibold background-text-color montserrat-secondary-font'>
            Create A Space
          </span>
        </button>
      </div>

      {/* Sections */}
      {cardData.map((section, index) => (
        <div key={index} className='mt-12'>
          <h2 className='text-xl md:text-2xl font-semibold primary-text-color montserrat-bolder-font mb-6'>
            {section.title}
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {section.data.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col bg-white rounded-2xl shadow-md overflow-hidden h-full'
              >
                <div className='w-full aspect-video relative'>
                  <Image
                    src={item.img}
                    alt='card-img'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-t-2xl'
                  />
                </div>
                <div className='p-5 flex flex-col justify-between h-full'>
                  <div className='text-center'>
                    <h3 className='text-lg font-semibold primary-text-color montserrat-bolder-font'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-600 mt-2'>
                      {item.description}
                    </p>
                  </div>
                  <button className='mt-4 w-full rounded-full spaces-button-color background-text-color py-2 font-semibold text-sm'>
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-8'>
            <button className='flex items-center gap-2 viewmore-button-color px-5 py-2 rounded-full text-sm'>
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
