'use client';

import { useEffect, useRef, useState } from 'react';
import 'easymde/dist/easymde.min.css';
import React from 'react'
import Image from "next/image";
// import uploadVideo from "../../../public/play_circle_line.svg";
// import uploadImage from "../../../public/pic_line.svg";
// import strikeLineThrough from "../../../public/strikethrough_line.svg";
// import italicIcon from "../../../public/italic_line.svg";
// import underLineIcon from "../../../public/underline_line.svg";
// import boldIcon from "../../../public/bold_line.svg";
// import alignIcon from "../../../public/align.svg";
// import Line from "../../../public/line.svg";
// import linkIcon from "../../../public/link_line.svg";
// import orderIcon from "../../../public/list_ordered_line.svg";
// import listCheck from "../../../public/list_check_line.svg";
// import emojiIcon from "../../../public/emoji_2_line.svg";
// import codeIcon from "../../../public/code_line.svg";
// import backLine from "../../../public/back_line.svg";
// import atIcon from "../../../public/at_line.svg";
// import ArrowForward from "../../../public/Arrow.svg";
// import plus from "../../../public/at_line.svg";


const page = () => {
  const editorRef = useRef(null);
  const [EasyMDE, setEasyMDE] = useState(null);

  useEffect(() => {
    import('easymde').then((mod) => {
      const instance = new mod.default({
        element: editorRef.current,
        spellChecker: false,
        toolbar: false,
      });
      setEasyMDE(instance);

      // Ensure that the editor container is scrollable
      const editorContainer = instance.codemirror.getWrapperElement(); // Get the editor's wrapper element
      editorContainer.style.height = '300px'; // Set a fixed height for the editor
      editorContainer.style.overflowY = 'hidden';
      editorContainer.style.fontWeight = 'bold'; // Enable vertical scrolling


    });
  }, []);

  const handleBold = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("**bold text**");
  };

  const handleItalic = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("*italic text*");
  };

  const handleStrikethrough = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("~~strike~~");
  };

  const handleCode = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("```\ncode block\n```");
  };

  const handleOrderedList = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("1. Item one\n2. Item two");
  };

  const handleUnorderedList = () => {
    if (EasyMDE) EasyMDE.codemirror.replaceSelection("- Item one\n- Item two");
  };
  return (
    <>

      <div className='w-[100%] px-[10px] xl:px-[0px] xl:max-w-[82%] h-[68vh]  xl:h-[47.8vh] mx-auto mt-[1px] lg:mt-[20px] '>
        <h1 className='text-[32px] text-center md:text-left md:text-[36px] primary-text-color font-semibold montserrat-primary-font '>
          Create Question
        </h1>
        <p className='text-[14px] pt-[2px] secondary-text-color montserrat-primary-font'>
          Tips on getting good answers quickly
        </p>
        <ul className="list-disc pl-5">
          <li className='text-[14px] pt-[2px] secondary-text-color montserrat-smallweigh-font'>
            Make sure your question has not been asked already
          </li>
          <li className='text-[14px] pt-[2px] secondary-text-color montserrat-smallweigh-font'>
            Keep your question short and to the point
          </li>
          <li className='text-[14px] pt-[2px] secondary-text-color montserrat-smallweigh-font'>
            Double-check grammar and spelling
          </li>
        </ul>

        <div className='mt-10'>

          <h1 className="outline-none p-6 text-[12px] text-center md:text-left sm:text-[18px] w-full text-secondaryColor  bg-postDiscussionCardBackground dark:bg-homeTabBackgroundColor rounded-[20px]
             montserrat-secondary-font">
            "Ask something you need help with or want answers to."
          </h1>
        </div>

        <div className='bg-postDiscussionCardBackground dark:bg-homeTabBackgroundColor rounded-[20px] mt-5 p-5'>
          <div className='flex flex-wrap justify-center xl:flex-nowrap w-[100%] sm:w-[90%] lg:w-[60%] xl:w-[45%] py-5   px-10 gap-[10px]  items-center shadow-lg rounded-[20px] bg-backgroundTextColor dark:bg-DarkcardBackgroundColor'>


            <Image
              src='/back_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />
            <Image
              src='/Arrow.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />


            <Image
              src='/line.svg'
              alt='undo'
              height={24}
              width={24}
              className='p-2 '
            />


            <Image
              src='/bold_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleBold}

            />


            <Image
              src='/italic_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleItalic}

            />


            <Image
              src='/underline_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleBold}

            />


            <Image
              src='/strikethrough_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleStrikethrough}

            />



            <Image
              src='/line.svg'
              alt='undo'
              height={24}
              width={24}
              className=' p-2'
            />


            <Image
              src='/list_check_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleUnorderedList}

            />


            <Image
              src='/list_ordered_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleOrderedList}

            />


            <Image
              src='/align.svg'
              alt='undo'
              height={34}
              width={34}
              className='cursor-pointer'


            />


            <Image
              src='/line.svg'
              alt='undo'
              height={24}
              width={24}
              className=' p-2'
            />


            <Image
              src='/link_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />



            <Image
              src='/code_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
              onClick={handleCode}
            />


            <Image
              src='/at_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />


            <Image
              src='/emoji_2_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />


            <Image
              src='/pic_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer'
            />


            <Image
              src='/play_circle_line.svg'
              alt='undo'
              height={24}
              width={24}
              className='cursor-pointer  '
            />


          </div>



          <textarea
            // ref={editorRef}
            placeholder="❓ What’s the Most Unforgettable Cricket Match You’ve Ever Watched? 🏏"
            className="p-5 text-[18px] outline-none bg-transparent montserrat-bolder-font text-secondaryColor w-full h-[400px] rounded-[20px]  overflow-y-auto resize-none dark:text-backgroundTextColor"
          />
        </div>
      </div>
      <div className='flex justify-center fixed bottom-0   xl:right-[10%] w-[100%] mx-auto px-[10px] xl:px-0 xl:max-w-[82%] mb-[40px] lg:justify-end'>
        <button className='button-background-color rounded-[100px] justify-center py-4 md:py-5 px-8 flex items-center gap-3'>
          {/* <Image src={plus} alt='post 1' width={20} height={20} /> */}
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Post Thread
          </h1>
        </button>
      </div>
    </>
  )
}

export default page