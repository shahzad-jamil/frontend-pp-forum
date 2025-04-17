import React from 'react';

const ForumStastic = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="montserrat-primary-font dark:text-backgroundTextColor text-[28px] sm:text-[32px] md:text-[36px] text-center font-bold primary-text-color">
          Forum Statistics
        </h1>
      </div>
      <div className="w-full px-4 md:w-[90%] md:mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
        {[
          { value: '119,441', label: 'Threads' },
          { value: '6,966,911', label: 'Runs' },
          { value: '62,227', label: 'Members' },
          { value: 'jkllis904', label: 'Latest Member' }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-xs mx-auto p-6 rounded-[20px] border border-color justify-center items-center text-center"
          >
            <h1 className="montserrat-primary-font text-[14px] dark:text-backgroundTextColor sm:text-[24px] sm:text-[26px] font-bold primary-text-color">
              {item.value}
            </h1>
            <h1 className="montserrat-primary-font text-[13px] sm:text-[18px]  font-bold register-text-color">
              {item.label}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForumStastic;
