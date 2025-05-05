'use client';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
// import post2 from "../../../public/image 115 (2).svg";
// import post4 from "../../../public/image 115 (3).svg";
// import plus from "../../../public/icons8_Plus 1.svg";
// import viewMore from "../../../public/expandLightMode.svg";
// import darkModeExpand from "../../../public/icons8_expand_arrow 1 (1).svg";
// import filterMaximize from "../../../public/newArrowExpand.svg"
// import close from "../../../public/icons8_multiply 2.svg"
// import upload from "../../../public/icons8_upload_to_the_cloud 1.svg"

const Spaces = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [spacesPopUp, setSpacePopUp] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect outside clicks
  const toggleSpacePopUp = () => {
    setSpacePopUp((prev) => !prev);
  };
  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        setSpacePopUp(false);

      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleToggle = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const cardData = [
    {
      title: "Spaces you might like",
      data: [
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
      ]
    },
    {
      title: "Cricket Zones",
      data: [
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
      ]
    },
    {
      title: "Off Topic Discussions",
      data: [
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (2).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
        { img: '/image 115 (3).svg', title: "Cricket Matches", description: "Stay updated with the latest cricket matches, live scores, and in-depth.", member: "3.1M", online: "45" },
      ]
    }
  ];
  return (
    <div className='max-w-[90%] xl:max-w-[80%] mx-auto pt-6'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='text-center md:text-left'>
          <h1 className='text-[28px] sm:text-[36px] font-[700] text-primaryColor dark:text-backgroundTextColor font-Montserrat'>
            Discover Spaces
          </h1>
          <p className='text-[14px] sm:text-[18px] font-[700] text-secondaryColor font-Montserrat'>
            Anything and everything to do with the great game.
          </p>
        </div>
        <button onClick={toggleSpacePopUp} className='button-background-color relative hover:bg-backgroundColor rounded-full flex items-center gap-3 py-4 xl:py-5 px-6'>
          <Image src='/icons8_Plus 1.svg' alt='plus' width={20} height={20} />
          <span className='text-sm sm:text-base text-backgroundTextColor font-semibold montserrat-secondary-font'>
            Create A Space
          </span>
        </button>
        {spacesPopUp && (
          <div
            className="absolute top-[30%] md:top-[20%] right-[5%] xl:right-[10%]  mt-3 flex flex-col gap-[10px] dark:bg-primaryColor card-background-color p-6 rounded-[20px] shadow-2xl w-[280px] sm:w-[520px] z-50"
          >

            <div className='w-full flex justify-end'>
              <Image
                src='/icons8_multiply 2.svg'
                alt='close'
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setSpacePopUp(false)}
              />
            </div>
            <h1 className="text-[20px] sm:text-[24px] font-semibold montserrat-primary-font text-primaryColor dark:text-backgroundTextColor">Create A Space</h1>
            <p className='text-[12px] sm:text-[14px] secondary-text-color montserrat-secondary-font '>
              Share your interests, curate content, host discussions, and more.
            </p>

            <div className="relative my-[2px] w-full">
              <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font">
                Name*
              </label>
              <input
                type="text"
                placeholder="My Cricket World"
                className="w-full border border-popUpInputFieldsBorder bg-transparent focus:border-registerTextColor outline-none dark:bg-primaryColor pp-5 md:p-5 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color"
              />
            </div>
            <div className="relative w-full my-[2px]">
              <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font z-10">
                Select Category*
              </label>

              <div className="relative w-full">
                <select
                  className="w-full border focus:border-registerTextColor  border-createSpaceInputBorder outline-none dark:bg-primaryColor bg-cardBackgroundColor p-5 md:p-5 pr-12 rounded-[100px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color appearance-none cursor-pointer"
                >
                  <option value="">Sports</option>
                  <option value="cricket">Cricket</option>
                  <option value="football">Football</option>
                  <option value="hockey">Hockey</option>
                </select>
                <Image
                  src='/newArrowExpand.svg'
                  width={20}
                  height={20}
                  alt="icon"
                  className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                />
              </div>
            </div>
            <div className="relative my-[2px] w-full">
              <label className="absolute text-[12px] md:text-[14px] -top-3 left-5 px-2 bg-cardBackgroundColor dark:bg-primaryColor text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font">
                Brief Description
              </label>
              <textarea
                type="text"
                placeholder="My Cricket World"
                className="w-full border border-popUpInputFieldsBorder bg-transparent focus:border-registerTextColor outline-none dark:bg-primaryColor p-3 sm:p-6 rounded-[10px] text-[12px] md:text-[14px] montserrat-secondary-font secondary-text-color"
              />
            </div>

            <div className='flex flex-col items-center justify-center border border-popUpInputFieldsBorder p-8 rounded-md'>
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                <Image
                  src='/icons8_upload_to_the_cloud 1.svg'
                  width={24}
                  height={24}
                  alt="upload"
                />
                <span className="text-[12px] md:text-[14px] px-2 dark:bg-primaryColor secondary-text-color dark:text-backgroundTextColor font-semibold montserrat-secondary-font">
                  Upload cover image
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("Selected file:", file);
                    // Optional: preview or send to backend
                  }
                }}
              />
            </div>


            {/* Filter Button */}
            <div className='flex justify-end'>
              <button className=" button-background-color hover:bg-backgroundColor  text-backgroundTextColor py-4 px-6 rounded-[100px] font-semibold text-[14px] montserrat-secondary-font">
                Create
              </button>
            </div>
          </div>
        )}
      </div>
      {cardData.map((section, index) => {
        const isExpanded = expandedSections[index];
        const displayData = isExpanded ? section.data : section.data.slice(0, 4);
        return (
          <div key={index} className='mt-[5px]'>
            <h2 className='text-[18px] sm:text-[28px] text-center md:text-left  my-[10px] font-[700] text-primaryColor dark:text-backgroundTextColor font-Montserrat'>
              {section.title}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {displayData.map((item, idx) => (
                <div key={idx} className='bg-cardBackgroundColor p-[20px] dark:bg-cardBackgroundColor/5 rounded-2xl overflow-hidden flex flex-col h-full gap-5'>
                  <Image src={item.img} alt='card-img' width={250} height={180} className='w-full h-[180px] rounded-[10px] object-cover' />
                  <div className='text-center flex flex-col flex-1'>
                    <h3 className='text-[18px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-bolder-font'>{item.title}</h3>
                    <p className='text-[14px] text-secondaryColor mt-2 montserrat-smallweigh-font flex-1'>{item.description}</p>
                    <div className='flex flex-row justify-center gap-8 my-[5px] items-center'>
                      <div className='flex items-center gap-1'>
                        <h1 className='text-primaryColor font-openSans font-[700] text-[14px] dark:text-backgroundTextColor'>Members:</h1>
                        <span className='text-registerTextColor font-openSans font-[600] text-[14px]'>{item.member}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <h1 className='text-primaryColor font-openSans font-[700] text-[14px] dark:text-backgroundTextColor'>Online:</h1>
                        <span className='text-registerTextColor font-openSans font-[600] text-[14px]'>{item.online}</span>
                      </div>
                    </div>
                    <button className='mt-[6px] rounded-[100px] hover:bg-primaryColor/90 dark:hover:bg-primaryColor/50 spaces-button-color font-openSans text-white py-3 px-6 text-[14px] font-[400]'>
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {section.data.length > 4 && (
              <div className='flex justify-center my-[10px] md:my-[20px]'>
                <button
                  onClick={() => handleToggle(index)}
                  className='flex items-center gap-2 viewmore-button-color dark:bg-viewmoreButtonColor/10 dark:text-backgroundTextColor text-primaryColor font-[600] font-openSans px-6 py-3 rounded-full text-sm'
                >
                  <span>{isExpanded ? 'View Less' : 'View More'}</span>
                  <Image
                    src='/expandLightMode.svg'
                    alt='expand'
                    width={14}
                    height={14}
                    className={`fill-primaryColor block dark:hidden ${isExpanded ? 'rotate-180' : ''}`}
                  />
                  <Image
                    src='/icons8_expand_arrow 1 (1).svg'
                    alt='expand'
                    width={14}
                    height={14}
                    className={`fill-primaryColor hidden dark:block ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Spaces;
