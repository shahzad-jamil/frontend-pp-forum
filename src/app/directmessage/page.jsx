// "use client"
// import React from 'react'
// import EmptyChat from '../pages/EmptyChat'
// import WithoutOpenChat from '../pages/WithoutOpenChat'
// import OpenChat from '../pages/OpenChat'

// const page = () => {

//   return (
//     <>
//       <OpenChat />
//       <WithoutOpenChat selectedUser={} />
//       {/* <EmptyChat /> */}
//     </>
//   )
// }

// export default page



"use client";
import React, { useState } from "react";
import Image from 'next/image'
import report from "../../../public/report.svg"
import search from "../../../public/search.svg"
import message from "../../../public/message.svg"
import chatpic from "../../../public/chatwindow.svg"
import attach from "../../../public/attachment.svg"
import dp from "../../../public/profilePic.svg"
import dp2 from "../../../public/dp2.svg"
import pin from "../../../public/pin.svg"
import singletick from "../../../public/singletick.svg"
import doubletick from "../../../public/doubletick.svg"
import EmptyChat from "../pages/EmptyChat";
import WithoutOpenChat from "../pages/WithoutOpenChat";
import OpenChat from "../pages/OpenChat";

const Page = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState([
    {
      profileImage: dp,
      name: "John Doe",
      isPin: pin,
      message: "How are you doing Today",
      time: "16:45",
      status: doubletick,
      userMessage1: "Hey John, long time no see!",
      userMessage2: "Let’s catch up this weekend."
    },
    {
      profileImage: dp,
      name: "Travis Barker",
      isPin: pin,
      message: "Smells like design spirit..",
      time: "16:45",
      status: singletick,
      userMessage1: "The band practice was great.",
      userMessage2: "Are we jamming tomorrow?"
    },
    {
      profileImage: dp2,
      name: "Kate Rose",
      isPin: pin,
      message: "you: See you tomorrow!",
      time: "16:45",
      status: doubletick,
      userMessage1: "That dress looked amazing!",
      userMessage2: "Let’s shop again soon."
    },
    {
      profileImage: dp,
      name: "Robert Parker",
      isPin: pin,
      message: "Awesome!",
      time: "16:45",
      status: doubletick,
      userMessage1: "Did you watch the new movie?",
      userMessage2: "Let’s plan a movie night."
    },
    {
      profileImage: dp,
      name: "Rick Owens",
      isPin: pin,
      message: "Good idea 🤩",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loved your recent post!",
      userMessage2: "Where did you get that outfit?"
    },
    {
      profileImage: dp2,
      name: "George Orwell",
      isPin: pin,
      message: "you: Literally 1984 🤨",
      time: "16:45",
      status: doubletick,
      userMessage1: "Reading your book again!",
      userMessage2: "The parallels are wild."
    },
    {
      profileImage: dp2,
      name: "Franz Kafka",
      isPin: pin,
      message: "Are you interested in insectitides for..",
      time: "16:45",
      status: doubletick,
      userMessage1: "Your metaphors are insane!",
      userMessage2: "Let’s discuss The Trial."
    },
    {
      profileImage: dp,
      name: "Tom Hardy",
      isPin: pin,
      message: "Smells like design spirit..",
      time: "16:45",
      status: doubletick,
      userMessage1: "Big fan of your movies!",
      userMessage2: "We should train together sometime."
    },
    {
      profileImage: dp,
      name: "Vivienne Westwood",
      isPin: pin,
      message: "This cat is so funny 😸",
      time: "16:45",
      status: doubletick,
      userMessage1: "Your designs are next level.",
      userMessage2: "Let’s collab on something cool."
    },
    {
      profileImage: dp2,
      name: "Anthony Paul",
      isPin: pin,
      message: "Check out my page 🤩",
      time: "16:45",
      status: doubletick,
      userMessage1: "Your reels are 🔥",
      userMessage2: "Teach me your editing tricks!"
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },

    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },
    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },

    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },

    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },

    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },

    {
      profileImage: dp,
      name: "Stan Smith",
      isPin: pin,
      message: "Want to see this kicks rn",
      time: "16:45",
      status: doubletick,
      userMessage1: "Loving the new sneakers drop.",
      userMessage2: "Where can I cop those?"
    },


  ]);
  // You can set this based on actual user data

  return (
    <>
      {userList.length === 0 ? (
        <EmptyChat />
      )
        //  : selectedUser ? (
        //   <OpenChat selectedUser={selectedUser} />  )
        : (
          <WithoutOpenChat
            selectedUser={setSelectedUser}
            userList={userList}
          />
        )}
    </>
  );
};

export default Page;
