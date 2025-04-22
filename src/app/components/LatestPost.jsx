import React from 'react'
import postedByUser from "../../../public/Rectangle 56.svg"
import Image from 'next/image'
// import greenmaximize from "../../../public/icons8_expand_arrow 1 (1).svg"
// import greenminimize from "../../../public/icons8_expand_arrow 1 (2).svg"

const LatestPost = () => {
  const latestPost = [
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",
      updatedBy: "BouncerGuy"
    },
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",

      updatedBy: "BouncerGuy"
    },
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",

      updatedBy: "BouncerGuy"
    },
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",

      updatedBy: "BouncerGuy"
    },
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",
      updatedBy: "BouncerGuy"
    },
    {
      image: postedByUser,
      title: "New Zealand v Pakistan | 5th T20I | Wellington | March 26 | Match Discussion",
      subTitle: "Cricket",
      updatedTime: " 38 mints ago",

      updatedBy: "BouncerGuy"
    },
  ]
  return (
    <>
      <div className=' flex card-background-color flex-col mt-[30px]  outline-none dark:bg-backgroundTextColor/10 border border-secondaryColor/50 py-4 px-4 sm:py-5 sm:px-8 rounded-[20px]'>
        <div className=' w-[100%] flex  justify-between  rounded-[15px]'>
          <div>
            <h1 className='text-[20px] sm:text-[24px] font-bold primary-text-color dark:text-backgroundTextColor montserrat-primary-font'>
              Latest Posts
            </h1>

          </div>

        </div>
        {
          latestPost.map((latest, index) => {
            return <div className='flex   py-4 px-2 border-b pb-1 border-secondaryColor/50  gap-2 mt-[2px] sm:mt-[20px] ' key={index}>
              <div className='w-[75px] h-[34px] flex justify-center items-center p-0 rounded-full '>
                <Image src={latest.image} alt='post 1' height={34} width={75} className='rounded-full object-cover' />
              </div>

              <div className='flex flex-col '>
                <h1 className='montserrat-primary-font dark:text-backgroundTextColor text-[14px] flex-1 font-bold primary-text-color'>
                  {latest.title}
                </h1>
                <div className='flex  flex-col sm:flex-row justify-between  mt-[5px] smitems-center'>
                  <div className='flex items-center gap-2 '>
                    <h1 className='montserrat-secondary-font dark:font-[400]  dark:font-openSans  text-[11px] font-bold secondary-text-color'>
                      Latest:
                    </h1>

                    <h1 className='montserrat-secondary-font text-[11px]  font-bold secondary-text-color dark:font-[400]  dark:font-openSans'>
                      {latest.updatedBy}
                    </h1>
                    <h1 className='montserrat-secondary-font text-[11px]  font-bold secondary-text-color dark:font-[400]  dark:font-openSans'>
                      {latest.updatedTime}
                    </h1>
                  </div>


                  <h1 className='text-[11px]  font-bold register-text-color montserrat-primary-font'>
                    Cricket
                  </h1>


                </div>
              </div>
            </div>
          })
        }











      </div>
    </>
  )
}

export default LatestPost