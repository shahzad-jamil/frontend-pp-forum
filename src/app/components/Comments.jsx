"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import user from "../../../public/Group 2008.svg"
import like from "../../../public/icons8_thumbs_up_1 1.svg"
import dislike from "../../../public/icons8_thumbs_down.svg"
import maximize from "../../../public/icons8_expand_arrow 1 (1).svg"

const Comments = () => {
  const commentOfUser = [
    {
      image: user,
      title: "CricketerWarior",
      postedBy: "Bouncer Guy",
      time: "1:12AM",
      message: "How do you always manage to think up such unique analogies for all your answers? How do you always manage to think up such unique analogies for all your answers? ",
      likes: "10k",
      dislike: "1k",
      userReply: [
        {
          image: user,
          title: "CricketerWarior",
          postedBy: "Bouncer Guy",
          time: "2:00AM",
          message: "How do you always manage to think up such unique analogies for all your answers? How do you always manage to think up such unique analogies for all your answers? ",
          likes: "2k",
          dislike: "200"
        },
        {
          image: user,
          title: "ReplyUser2",
          postedBy: "Reply Guy",
          time: "2:10AM",
          message: "How do you always manage to think up such unique analogies for all your answers? How do you always manage to think up such unique analogies for all your answers? ",
          likes: "1k",
          dislike: "100"
        },
      ]
    },
    {
      image: user,
      title: "CricketerWarior",
      postedBy: "Bouncer Guy",
      time: "1:15AM",
      message: "This is the main comment 2.",
      likes: "9k",
      dislike: "500",
      userReply: [
        {
          image: user,
          title: "ReplyUser3",
          postedBy: "Reply Guy",
          time: "2:20AM",
          message: "Another reply here.",
          likes: "1k",
          dislike: "50"
        },
        {
          image: user,
          title: "ReplyUser4",
          postedBy: "Reply Guy",
          time: "2:30AM",
          message: "Second reply to this comment.",
          likes: "2k",
          dislike: "20"
        },
      ]
    },
    {
      image: user,
      title: "CricketerWarior",
      postedBy: "Bouncer Guy",
      time: "1:15AM",
      message: "This is the main comment 2.",
      likes: "9k",
      dislike: "500",
      userReply: [
        {
          image: user,
          title: "ReplyUser3",
          postedBy: "Reply Guy",
          time: "2:20AM",
          message: "Another reply here.",
          likes: "1k",
          dislike: "50"
        },
        {
          image: user,
          title: "ReplyUser4",
          postedBy: "Reply Guy",
          time: "2:30AM",
          message: "Second reply to this comment.",
          likes: "2k",
          dislike: "20"
        },
      ]
    },

  ];

  const [visibleComments, setVisibleComments] = useState(2);
  const [expandedReplies, setExpandedReplies] = useState({});

  const handleToggleReplies = (index) => {
    setExpandedReplies(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className='mt-3 overflow-y-auto h-[500px]'>
      <div className=' pb-5 border-b border-searchBorderColor dark:border-searchBorderColor/20'>
        <h1 className='text-[20px] primary-text-color font-openSans font-[700] dark:text-backgroundTextColor'>
          Comments
        </h1>
      </div>
      {commentOfUser.slice(0, visibleComments).map((comment, index) => (
        <div key={index} >
          <div className='mt-7 flex gap-3'>
            <Image src={comment.image} alt="user" width={50} height={50} />
            <div className='flex gap-4'>
              <div>
                <h1 className='text-[14px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>{comment.title}</h1>
                <p className='text-[14px] secondary-text-color font-openSans font-[700]'>{comment.postedBy}</p>
              </div>
              <div>
                <p className='text-[12px] secondary-text-color font-openSans font-[600]'>Today at: {comment.time}</p>
              </div>
            </div>
          </div>

          <div className='ml-[66px] mt-2'>
            <p className='text-[14px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>
              {comment.message}
            </p>

            <div className='w-[40%] flex gap-5 items-center mt-2'>
              <div className='flex items-center bg-viewmoreButtonColor pr-8 p-2 sm:p-2 rounded-full'>
                <Image src={like} alt='like' width={18} height={18} />
                <span className='text-[8px] primary-text-color font-openSans font-[600] ml-1 dark:text-primaryColor'>
                  {comment.likes}
                </span>
              </div>
              <div className='flex items-center bg-viewmoreButtonColor pr-8 p-2 sm:p-2 rounded-full'>
                <Image src={dislike} alt='dislike' width={22} height={22} />
                <span className='text-[8px] primary-text-color font-openSans font-[600] ml-1  dark:text-primaryColor'>
                  {comment.dislike}
                </span>
              </div>
              <span className='text-[12px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>Reply</span>
            </div>

            {/* Replies */}
            {comment.userReply.slice(0, expandedReplies[index] ? comment.userReply.length : 1).map((reply, i) => (
              <div key={i} className='ml-5 mt-5 border-l-2 pl-3 border-gray-300'>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-4'>
                    <Image src={reply.image} alt="user" width={34} height={34} />
                    <div>
                      <h1 className='text-[14px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>
                        {reply.title}
                      </h1>
                      <p className='text-[14px] secondary-text-color font-openSans font-[700]'>{reply.postedBy}</p>
                    </div>
                    <div>
                      <p className='text-[12px] secondary-text-color font-openSans font-[600]'>Today at: {reply.time}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-[14px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>
                      {reply.message}
                    </p>
                  </div>
                </div>

                <div className='w-[40%] flex gap-5 items-center mt-2 ml-10'>
                  <div className='flex items-center bg-viewmoreButtonColor pr-8 p-2 sm:p-2 rounded-full'>
                    <Image src={like} alt='like' width={18} height={18} />
                    <span className='text-[8px] font-bold primary-text-color ml-1  dark:text-primaryColor'>{reply.likes}</span>
                  </div>
                  <div className='flex items-center bg-viewmoreButtonColor pr-8 p-2 sm:p-2 rounded-full'>
                    <Image src={dislike} alt='dislike' width={18} height={18} />
                    <span className='text-[8px] font-bold primary-text-color ml-1  dark:text-primaryColor'>{reply.dislike}</span>
                  </div>
                  <span className='text-[12px] primary-text-color font-openSans font-[600] dark:text-backgroundTextColor'>Reply</span>
                </div>
              </div>
            ))}

            {/* Toggle Replies */}
            {comment.userReply.length > 1 && (
              <div className='flex gap-2 items-center cursor-pointer mt-3' onClick={() => handleToggleReplies(index)}>
                <h1 className='text-[13px] register-text-color font-[600]'>
                  {expandedReplies[index] ? 'Hide replies' : 'View more replies'}
                </h1>
                <Image src={maximize} alt='toggle' width={20} height={20} />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Load More Comments */}
      {commentOfUser.length > 2 && (
        <div
          className='mt-[30px] bg-viewmoreButtonColor dark:bg-viewmoreButtonColor/10 cursor-pointer w-[100%] flex items-center justify-center py-4 rounded-[100px]'
          onClick={() =>
            setVisibleComments(prev =>
              prev === commentOfUser.length ? 2 : commentOfUser.length
            )
          }
        >
          <h1 className='text-[15px] primary-text-color dark:text-registerTextColor font-[600] flex items-center gap-2'>
            {visibleComments === commentOfUser.length
              ? 'View less comments'
              : 'View more comments'}
            <Image src={maximize} alt='toggle comments' width={20} height={20} />
          </h1>
        </div>
      )}


    </div>
  )
}

export default Comments
