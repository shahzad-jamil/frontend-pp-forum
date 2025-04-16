import React from 'react'
import postedByUser from "../../../public/Rectangle 56.svg"
import Image from 'next/image'
import darkmaximize from "../../../public/icons8_Plus_2 1.svg"
import darkminimize from "../../../public/icons8_macos_minimize 1 (1).svg"

const TrendingContent = () => {
  const trendingContent = [
    {
      image: postedByUser,
      title: "Predict India's 15-member squad for...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",

    },
    {
      image: postedByUser,
      title: "Predict India's 15-member squad for...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",

    },

    {
      image: postedByUser,
      title: "Predict India's 15-member squad for...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",

    },
    {
      image: postedByUser,
      title: "Predict India's 15-member squad for...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",

    },
    {
      image: postedByUser,
      title: "Predict India's 15-member squad for...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      Replies: "27",
      Time: "Friday at 1:44 PM",
      postedBy: "FearlessRoar ",

    },
  ]
  return (
    <>

      <div className='w-[100%] card-background-color flex flex-col mt-[30px] dark:bg-primaryColor outline-none shadow-2xl border border-secondaryColor/50    py-4 md:px-12 rounded-[20px]'>
        <div className=' w-[100%] flex  justify-between  rounded-[15px]'>
          <div>
            <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
              Trending Content
            </h1>

          </div>

        </div>
        {
          trendingContent.map((trending, index) => {
            return <div className='flex  gap-2 mt-[10px] border-b pb-1 border-secondaryColor/50 ' key={index}>
              <div className='w-[75px] h-[34px] flex justify-center items-center p-0 rounded-full '>
                <Image src={trending.image} alt='post 1' height={34} width={75} className='rounded-full object-cover' />
              </div>


              <div className='flex flex-col '>
                <h1 className='montserrat-primary-font text-[13px] flex-1 font-bold primary-text-color dark:text-backgroundTextColor'>
                  {trending.title}
                </h1>
                <p className='montserrat-secondary-font text-[11px] flex-1 font-bold secondary-text-color'>
                  {trending.description}
                </p>
                <div className='flex flex-col sm:flex-row justify-between mt-[10px] sm:items-center'>
                  <div className='flex  items-center gap-2'>
                    <h1 className='montserrat-primary-font text-[11px]  font-bold primary-text-color dark:text-backgroundTextColor'>
                      {trending.postedBy}

                    </h1>
                    <h1 className='montserrat-primary-font text-[11px] dark:text-backgroundTextColor font-bold primary-text-color'>
                      {trending.Time}

                    </h1>
                  </div>

                  <div className='flex items-center  gap-1'>
                    <h1 className='text-[11px] font-bold primary-text-color montserrat-primary-font dark:text-backgroundTextColor'>
                      Replies:
                    </h1>
                    <p className='text-[11px] register-text-color montserrat-primary-font'>
                      {trending.Replies}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          })
        }






      </div>

    </>
  )
}

export default TrendingContent