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

      // Ensure editor is initialized before modifying styles
      instance.codemirror.on('refresh', () => {
        const editorContainer = instance.codemirror.getWrapperElement();

        // Apply overflow styles to the editor container
        editorContainer.style.overflowY = 'auto'; // Enable vertical scrolling
        editorContainer.style.maxHeight = '250px'; // Optional fixed height

        // Get the textarea inside EasyMDE and apply the same styles
        const editorTextArea = editorContainer.querySelector('textarea');
        if (editorTextArea) {
          editorTextArea.style.maxHeight = '250px'; // Max height for textarea
          editorTextArea.style.overflowY = 'auto'; // Enable scroll on the textarea
        }
      });
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

      <div className='w-[100%] px-[10px] xl:px-[0px] xl:max-w-[80%] h-[48vh]  xl:h-[35.8vh] mx-auto mt-[1px] lg:mt-[20px] '>
        <h1 className='text-[32px] text-center md:text-left md:text-[36px] text-primaryColor dark:text-backgroundTextColor  font-[700] font-Montserrat'>
          Create Article
        </h1>

        <div className='mt-10'>

          <h1 className="outline-none p-6 text-center md:text-left text-[12px] sm:text-[18px] w-full text-secondaryColor  bg-postDiscussionCardBackground dark:bg-homeTabBackgroundColor rounded-[20px]
            montserrat-secondary-font">
            "Share insights, stories, or detailed information here."
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

          {/* <textarea
            ref={editorRef}
            placeholder="Start a conversation... What’s on your mind?"
            className={`${EasyMDE ? '' : ''} outline-none p-5 text-[18px] w-full h-[250px] overflow-y-auto`}
            style={{
              maxHeight: '250px', // Ensure it has a max height to activate scrolling
            }}
          /> */}
          <textarea
            // ref={editorRef}
            placeholder="Start a conversation... What’s on your mind?"
            className="p-5 text-[18px] outline-none bg-transparent text-primaryColor  w-full h-[500px] rounded-[20px]  overflow-y-auto resize-none dark:text-backgroundTextColor"
          />
        </div>
        {/* 
        <div className="bg-cardBackgroundColor p-4 rounded-[20px] my-[20px]">
         
        </div> */}
      </div>
      <div className='flex justify-center fixed bottom-0   xl:right-[10%] w-[100%] mx-auto px-[10px] xl:px-0 xl:max-w-[82%]  mt-[150px] mb-[10px] lg:justify-end'>
        <button className='button-background-color rounded-[100px] justify-center py-4 md:py-5 px-8 flex items-center gap-3'>
          {/* <Image src={plus} alt='post 1' width={20} height={20} /> */}
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Post Article
          </h1>
        </button>
      </div>

    </>
  )
}

export default page