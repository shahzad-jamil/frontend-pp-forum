'use client';

import { useEffect, useRef, useState } from 'react';
import 'easymde/dist/easymde.min.css';
import React from 'react'
import Image from "next/image";
import uploadVideo from "../../../public/play_circle_line.svg";
import uploadImage from "../../../public/pic_line.svg";
import strikeLineThrough from "../../../public/strikethrough_line.svg";
import italicIcon from "../../../public/italic_line.svg";
import underLineIcon from "../../../public/underline_line.svg";
import boldIcon from "../../../public/bold_line.svg";
import alignIcon from "../../../public/align.svg";
import Line from "../../../public/line.svg";
import linkIcon from "../../../public/link_line.svg";
import orderIcon from "../../../public/list_ordered_line.svg";
import listCheck from "../../../public/list_check_line.svg";
import emojiIcon from "../../../public/emoji_2_line.svg";
import codeIcon from "../../../public/code_line.svg";
import backLine from "../../../public/back_line.svg";
import atIcon from "../../../public/at_line.svg";
import ArrowForward from "../../../public/Arrow.svg";
import plus from "../../../public/at_line.svg";




const CreatePost = () => {
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
      editorContainer.style.overflowY = 'hidden'; // Enable vertical scrolling

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

      <div className='w-[100%] px-[10px] xl:px-[0px] xl:max-w-[82%] h-[48vh]  xl:h-[35.8vh] mx-auto mt-[1px] lg:mt-[20px] '>
        <h1 className='text-[32px] text-center md:text-left md:text-[36px] primary-text-color font-semibold montserrat-primary-font'>
          Create Discussion
        </h1>


        <div className='flex flex-wrap xl:flex-nowrap w-[100%] sm:w-[90%] xl:w-[60%] h-[20vh] xl:h-[24px] md:p-10 gap-[10px]  items-center shadow-lg rounded-[20px]'>

          <Image
            src={backLine}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />
          <Image
            src={ArrowForward}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />


          <Image
            src={Line}
            alt='undo'
            height={24}
            width={24}
            className='p-2 '
          />


          <Image
            src={boldIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleBold}

          />


          <Image
            src={italicIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleItalic}

          />


          <Image
            src={underLineIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleBold}

          />


          <Image
            src={strikeLineThrough}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleStrikethrough}

          />



          <Image
            src={Line}
            alt='undo'
            height={24}
            width={24}
            className=' p-2'
          />


          <Image
            src={listCheck}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleUnorderedList}

          />


          <Image
            src={orderIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleOrderedList}

          />


          <Image
            src={alignIcon}
            alt='undo'
            height={34}
            width={34}
            className='cursor-pointer'


          />


          <Image
            src={Line}
            alt='undo'
            height={24}
            width={24}
            className=' p-2'
          />


          <Image
            src={linkIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />



          <Image
            src={codeIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
            onClick={handleCode}
          />


          <Image
            src={atIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />


          <Image
            src={emojiIcon}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />


          <Image
            src={uploadImage}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer'
          />


          <Image
            src={uploadVideo}
            alt='undo'
            height={24}
            width={24}
            className='cursor-pointer  '
          />

        </div>



        <textarea
          ref={editorRef}
          placeholder="Start a conversation... What’s on your mind?"
          className="outline-none p-5 text-[18px]  w-full h-[250px] resize-none"
        />
      </div>
      <div className='flex justify-center w-[100%] mx-auto px-[10px] xl:px-0 xl:max-w-[82%]  mt-[150px] mb-[10px] lg:justify-end'>
        <button className='button-background-color rounded-[100px] justify-center py-4 md:py-5 px-8 flex items-center gap-3'>
          {/* <Image src={plus} alt='post 1' width={20} height={20} /> */}
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Post Discussion
          </h1>
        </button>
      </div>

    </>
  )
}

export default CreatePost