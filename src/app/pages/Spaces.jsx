import React from 'react'
import post1 from "../../../public/image 115.svg"
import post2 from "../../../public/image116.svg"
import plus from "../../../public/icons8_Plus 1.svg"
import viewMore from "../../../public/icons8_expand_arrow 1.svg"




import Image from 'next/image'

const Spaces = () => {
  const spaces = [
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },

  ]

  const cricket = [
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },

  ]


  const OffTopics = [
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post2,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },
    {
      img: post1,
      title: "Cricket Matches",
      description: "Stay updated with the latest cricket matches, live scores, and in-depth."

    },

  ]
  return (
    <div className='max-w-[82%] mx-auto pt-[20px]'>
      <div className='flex items-center flex-col md:flex-row gap-[10px] md:justify-between'>
        <div className='flex flex-col items-center md:items-start '>
          <h1 className='text-[24px] md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
            Discover Spaces
          </h1>
          <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
            Anything and everything to do with the great game.
          </p>
        </div>

        <button className='button-background-color rounded-[100px] justify-center py-3 md:py-5 px-8 flex items-center gap-3'>
          <Image src={plus} alt='post 1' width={20} height={20} />
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Create A Space
          </h1>
        </button>
      </div>
      <div className='mt-[20px]'>
        <h1 className='text-[28px] primary-text-color font-semibold montserrat-primary-font'>
          Spaces you might like
        </h1>

        <div className='mt-[30px] w-full grid grid-cols-4  gap-[20px]'>
          {/* Space Card 1 */}
          {
            spaces.map((item, index) => {
              return <div key={index} className='flex flex-col  pt-[10px] w-[380px] h-[359px] justify-center items-center'>
                <div className='w-[350px]  h-[180px] overflow-hidden'>
                  <Image src={item.img} alt='post 1' width={350} height={180} className='object-cover w-[350px] h-[180px] rounded-[15px]' />
                </div>
                <div className=' pt-[15px] flex flex-col items-center'>
                  <h1 className='text-[24px] primary-text-color font-semibold montserrat-primary-font'>
                    {item.title}
                  </h1>
                  <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
                    {item.description}
                  </p>
                  <button className='cursor-pointer py-4 w-full spaces-button-color montserrat-smallweigh-font background-text-color text-[14px] rounded-full mt-3 econdary-text-color'>
                    Follow
                  </button>
                </div>
              </div>
            })
          }



        </div>

        <div className='flex justify-center my-[20px]'>
          <button className='flex gap-2 items-center viewmore-button-color px-8 py-4 rounded-full'>
            <h1>
              View More
            </h1>
            <Image src={viewMore} alt='post 1' width={14} height={14} />

          </button>
        </div>
      </div>




      <div className='mt-[20px]'>
        <h1 className='text-[28px] primary-text-color font-semibold montserrat-primary-font'>
          Spaces you might like
        </h1>

        <div className='mt-[30px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[20px]'>

          {
            cricket.map((item, index) => {
              return <div key={index} className='flex flex-col pt-[10px] w-[380px] h-[359px] justify-center items-center'>
                <div className='w-[350px]  h-[180px] overflow-hidden'>
                  <Image src={item.img} alt='post 1' width={350} height={180} className='object-cover w-[350px] h-[180px] rounded-[15px]' />
                </div>
                <div className=' pt-[15px] flex flex-col items-center'>
                  <h1 className='text-[24px] primary-text-color font-semibold montserrat-primary-font'>
                    {item.title}
                  </h1>
                  <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
                    {item.description}
                  </p>
                  <button className='cursor-pointer py-4 w-full spaces-button-color montserrat-smallweigh-font background-text-color text-[14px] rounded-full mt-3 econdary-text-color'>
                    Follow
                  </button>
                </div>
              </div>
            })
          }



        </div>

        <div className='flex justify-center my-[20px]'>
          <button className='flex gap-2 items-center viewmore-button-color px-8 py-4 rounded-full'>
            <h1>
              View More
            </h1>
            <Image src={viewMore} alt='post 1' width={14} height={14} />

          </button>
        </div>
      </div>




      <div className='mt-[20px]'>
        <h1 className='text-[28px] primary-text-color font-semibold montserrat-primary-font'>
          Spaces you might like
        </h1>

        <div className='mt-[30px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[20px]'>

          {
            OffTopics.map((item, index) => {
              return <div key={index} className='flex flex-col pt-[10px] w-[380px] h-[359px] justify-center items-center'>
                <div className='w-[350px]  h-[180px] overflow-hidden'>
                  <Image src={item.img} alt='post 1' width={350} height={180} className='object-cover w-[350px] h-[180px] rounded-[15px]' />
                </div>
                <div className=' pt-[15px] flex flex-col items-center'>
                  <h1 className='text-[24px] primary-text-color font-semibold montserrat-primary-font'>
                    {item.title}
                  </h1>
                  <p className='text-[14px] text-center secondary-text-color montserrat-smallweigh-font'>
                    {item.description}
                  </p>
                  <button className=' cursor-pointer py-4 w-full spaces-button-color montserrat-smallweigh-font background-text-color text-[14px] rounded-full mt-3 econdary-text-color'>
                    Follow
                  </button>
                </div>
              </div>
            })
          }



        </div>

        <div className='flex justify-center my-[20px]'>
          <button className='flex gap-2 items-center viewmore-button-color px-8 py-4 rounded-full'>
            <h1>
              View More
            </h1>
            <Image src={viewMore} alt='post 1' width={14} height={14} />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Spaces
