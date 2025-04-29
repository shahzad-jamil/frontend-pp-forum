"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import switchOn from "../../../public/Switch on.svg";
import switchOff from "../../../public/Switch off.svg";

const Notifications = () => {
  // States for each toggle
  const [replies, setReplies] = useState(true);
  const [bestAnswer, setBestAnswer] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [privateMsg, setPrivateMsg] = useState(true);
  const [campaigns, setCampaigns] = useState(true);

  return (
    <div className="w-full h-full p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          Email Notifications
        </h1>
        <p className="text-[16px] secondary-text-color montserrat-smallweigh-font">
          Get emails to find out what’s going on when you’re not online. You can turn these off.
        </p>
      </div>

      {/* Notification Items */}
      <div className="space-y-8">
        {/* Replies */}
        <div className="flex gap-5">
          <div> <button onClick={() => setReplies(!replies)}>
            <Image src={replies ? switchOn : switchOff} width={44} height={28} alt="Toggle" />
          </button>
          </div>
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Replies
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Someone replied to a post you created or subscribed to
            </p>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-blue-500  w-6 h-6" />
                <span className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                  Notify me only about the first new reply since my last visit
                </span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-blue-500 w-6 h-6" />
                <span className="text-[14px] secondary-text-color montserrat-smallweigh-font">
                  Notify me about every reply
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Best answer */}
        <div className="flex gap-5">
          <button onClick={() => setBestAnswer(!bestAnswer)}>
            <Image src={bestAnswer ? switchOn : switchOff} width={44} height={28} alt="Toggle" />
          </button>
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Best answer
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Answer was marked as best answer in a topic you subscribed to
            </p>
          </div>
        </div>

        {/* Mentions */}
        <div className="flex gap-5">
          <button onClick={() => setMentions(!mentions)}>
            <Image src={mentions ? switchOn : switchOff} width={44} height={28} alt="Toggle" />
          </button>
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Mentions
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Someone @mentioned you in a topic or reply
            </p>
          </div>
        </div>

        {/* Private message */}
        <div className="flex gap-5">
          <button onClick={() => setPrivateMsg(!privateMsg)}>
            <Image src={privateMsg ? switchOn : switchOff} width={44} height={28} alt="Toggle" />
          </button>
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Private message
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Someone sent you a private message
            </p>
          </div>
        </div>

        {/* Campaigns */}
        <div className="flex gap-5">
          <button onClick={() => setCampaigns(!campaigns)}>
            <Image src={campaigns ? switchOn : switchOff} width={44} height={28} alt="Toggle" />
          </button>
          <div>
            <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
              Campaigns
            </h1>
            <p className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Emails sent to you by the community team
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className='md:col-span-2 md:flex justify-end'>
          <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-10 flex items-center gap-3'>
            <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
              Save Changes
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
