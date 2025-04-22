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
      message: "This is the main comment 1.",
      likes: "10k",
      dislike: "1k",
      userReply: [
        {
          image: user,
          title: "ReplyUser1",
          postedBy: "Reply Guy",
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
    <div className='mt-3'>
      <h1 className='text-[20px] font-bold primary-text-color montserrat-primary-font'>
        Comments
      </h1>

      {commentOfUser.slice(0, visibleComments).map((comment, index) => (
        <div key={index}>
          <div className='mt-7 flex gap-3'>
            <Image src={comment.image} alt="user" width={63} height={48} />
            <div>
              <h1 className='text-[14px] font-bold primary-text-color  dark:text-backgroundTextColor'>{comment.title}</h1>
              <p className='secondary-text-color'>{comment.postedBy}</p>
              <p className='secondary-text-color'>Today at: {comment.time}</p>
            </div>
          </div>

          <div className='ml-[66px] mt-2'>
            <p className='text-[14px] font-bold primary-text-color  dark:text-backgroundTextColor'>{comment.message}</p>

            <div className='w-[40%] flex gap-5 items-center mt-2'>
              <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                <Image src={like} alt='like' width={25} height={25} />
                <span className='text-[12px] font-bold primary-text-color ml-1  dark:text-backgroundTextColor'>{comment.likes}</span>
              </div>
              <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                <Image src={dislike} alt='dislike' width={25} height={25} />
                <span className='text-[12px] font-bold primary-text-color ml-1  dark:text-backgroundTextColor'>{comment.dislike}</span>
              </div>
              <span className='text-[12px] font-bold primary-text-color'>Reply</span>
            </div>

            {/* Replies */}
            {comment.userReply.slice(0, expandedReplies[index] ? comment.userReply.length : 1).map((reply, i) => (
              <div key={i} className='ml-5 mt-5 border-l-2 pl-3 border-gray-300'>
                <div className='flex gap-3'>
                  <Image src={reply.image} alt="user" width={40} height={40} />
                  <div>
                    <h1 className='text-[13px] font-bold primary-text-color  dark:text-backgroundTextColor'>{reply.title}</h1>
                    <p className='secondary-text-color'>{reply.postedBy} • {reply.time}</p>
                    <p className='text-[13px] primary-text-color mt-1  dark:text-backgroundTextColor'>{reply.message}</p>
                  </div>
                </div>

                <div className='w-[40%] flex gap-5 items-center mt-2 ml-10'>
                  <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                    <Image src={like} alt='like' width={20} height={20} />
                    <span className='text-[12px] font-bold primary-text-color ml-1  dark:text-backgroundTextColor'>{reply.likes}</span>
                  </div>
                  <div className='flex items-center bg-[#3F94051A] p-2 rounded-full'>
                    <Image src={dislike} alt='dislike' width={20} height={20} />
                    <span className='text-[12px] font-bold primary-text-color ml-1  dark:text-backgroundTextColor'>{reply.dislike}</span>
                  </div>
                  <span className='text-[12px] font-bold primary-text-color'>Reply</span>
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
