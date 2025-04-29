import React from 'react';
import post1 from "../../../public/image 115.svg";
import post2 from "../../../public/image 115 (2).svg";
import plus from "../../../public/icons8_Plus 1.svg";
import post4 from "../../../public/image 115 (3).svg"
import viewMore from "../../../public/expandLightMode.svg";
import darkModeExpand from "../../../public/icons8_expand_arrow 1 (1).svg";


import Image from 'next/image';

const Spaces = () => {
  const cardData = [
    {
      title: "Spaces you might like",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post4, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post1, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    },
    {
      title: "Cricket Zones",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post4, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post4, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    },
    {
      title: "Off Topic Discussions",
      data: [
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post4, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post2, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
        { img: post4, title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth." },
      ]
    }
  ];

  return (
    <div className='max-w-[90%] xl:max-w-[80%] mx-auto  pt-6'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-bold primary-text-color  dark:text-backgroundTextColor montserrat-bolder-font'>
            Discover Spaces
          </h1>
          <p className='text-base md:text-lg secondary-text-color montserrat-smallweigh-font'>
            Anything and everything to do with the great game.
          </p>
        </div>
        <button className='button-background-color hover:bg-backgroundColor rounded-full flex items-center gap-3 py-4 px-6'>
          <Image src={plus} alt='plus' width={20} height={20} />
          <span className='text-sm sm:text-base text-white font-semibold montserrat-secondary-font'>
            Create A Space
          </span>
        </button>
      </div>

      {/* Dynamic Sections */}
      {cardData.map((section, index) => (
        <div key={index} className='mt-[5px]'>
          <h2 className='text-[20px] text-center md:text-left md:text-[24px] my-[10px] font-semibold primary-text-color dark:text-backgroundTextColor montserrat-bolder-font '>
            {section.title}
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {section.data.map((item, idx) => (
              <div key={idx} className='bg-white dark:bg-backgroundTextColor/10 rounded-2xl  overflow-hidden flex flex-col h-full'>
                <Image src={item.img} alt='card-img' width={250} height={180} className='w-full h-[180px] object-cover' />
                <div className='p-4 text-center flex flex-col flex-1'>
                  <h3 className='text-[18px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-bolder-font'>{item.title}</h3>
                  <p className='text-[14px] text-secondaryColor mt-2 montserrat-smallweigh-font flex-1'>
                    {item.description}
                  </p>
                  <button className='mt-4 rounded-[100px] hover:bg-primaryColor/90  dark:hover:bg-primaryColor/50 spaces-button-color font-openSans text-white py-2 px-6 text-[14px] font-[400]'>
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center my-[10px] md:my-[20px]'>
            <button className='flex items-center gap-2 viewmore-button-color dark:bg-viewmoreButtonColor/10 dark:text-backgroundTextColor text-primaryColor font-[600] font-openSans px-6 py-3 rounded-full text-sm'>
              <span>View More</span>
              <Image src={viewMore} alt='expand' width={14} height={14} className='fill-primaryColor block dark:hidden' />
              <Image src={darkModeExpand} alt='expand' width={14} height={14} className='fill-primaryColor hidden dark:block' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spaces;
