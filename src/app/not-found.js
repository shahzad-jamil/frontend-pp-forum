// pages/page-not-found.js

import Image from 'next/image';
import Link from 'next/link';
// import notFoundImage from "../../public/404.svg"
const PageNotFound = () => {
  return (
    <>

      <div className='flex flex-col justify-center   items-center md:min-h-screen h-[60vh]  mt-[10px] w-[82%] mx-auto'>
        <h1 className='text-[24px] md:text-[60px] primary-text-color dark:text-backgroundTextColor font-semibold montserrat-primary-font'>
          404: Page Not Found
        </h1>
        <p className='text-[18px] md:text-[24px] pt-[10px] secondary-text-color montserrat-secondary-font'>
          Oops! Seems like we lost the page just
          like this ball.
        </p>

        {/* <Image src={notFoundImage} alt='not found' height={316} width={1170} /> */}

        <Image src='/404.svg' alt='not found' height={316} width={1170} />
      </div>
    </>
  );
};

export default PageNotFound;
