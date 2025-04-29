"use client";
import React, { useState } from "react";

const Notifications = () => {
  const [replies, setReplies] = useState(true);
  const [bestAnswer, setBestAnswer] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [privateMsg, setPrivateMsg] = useState(true);
  const [campaigns, setCampaigns] = useState(true);

  const Toggle = ({ enabled, setEnabled }) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex items-center transition-colors duration-300
        ${enabled ? "bg-buttonBackgroundColor" : "bg-toggleBackgroundColor border-toggleButtonColor border-[2px]"}
        w-14 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 rounded-full`}
    >
      <span
        className={`absolute top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-300
          ${enabled
            ? "translate-x-8 sm:translate-x-9 md:translate-x-11 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white"
            : "translate-x-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-toggleButtonColor"}
        `}
      />
    </button>
  );

  return (
    <div className="w-full h-full px-4 py-6 sm:px-6 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b dark:border-searchBorderColor/20 border-searchBorderColor py-[30px]">
        <h1 className="text-[18px] sm:text-[20px] md:text-[22px] text-primaryColor dark:text-backgroundTextColor font-semibold montserrat-primary-font">
          Email Notifications
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] secondary-text-color montserrat-smallweigh-font">
          Get emails to find out what’s going on when you’re not online. You can turn these off.
        </p>
      </div>

      {/* Notification Items */}
      <div className="">
        {[
          {
            label: "Replies",
            desc: "Someone replied to a post you created or subscribed to",
            toggle: replies,
            setToggle: setReplies,
            extra: (
              <div className="mt-2 space-y-2">
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-green-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[13px] sm:text-[14px] secondary-text-color montserrat-smallweigh-font">
                    Notify me only about the first new reply since my last visit
                  </span>
                </label>
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-green-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[13px] sm:text-[14px] secondary-text-color montserrat-smallweigh-font">
                    Notify me about every reply
                  </span>
                </label>
              </div>
            )
          },
          {
            label: "Best answer",
            desc: "Answer was marked as best answer in a topic you subscribed to",
            toggle: bestAnswer,
            setToggle: setBestAnswer
          },
          {
            label: "Mentions",
            desc: "Someone @mentioned you in a topic or reply",
            toggle: mentions,
            setToggle: setMentions
          },
          {
            label: "Private message",
            desc: "Someone sent you a private message",
            toggle: privateMsg,
            setToggle: setPrivateMsg
          },
          {
            label: "Campaigns",
            desc: "Emails sent to you by the community team",
            toggle: campaigns,
            setToggle: setCampaigns
          }
        ].map(({ label, desc, toggle, setToggle, extra }, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center border-b dark:border-searchBorderColor/20 border-searchBorderColor py-[30px]">
            <Toggle enabled={toggle} setEnabled={setToggle} />
            <div className="flex-1">
              <h1 className="text-[14px] sm:text-[16px] md:text-[18px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat">
                {label}
              </h1>
              <p className="text-[13px] sm:text-[14px] secondary-text-color montserrat-smallweigh-font">
                {desc}
              </p>
              {extra}
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button className="button-background-color rounded-full py-2 sm:py-3 md:py-5 px-6 sm:px-8 flex items-center gap-3">
            <span className="text-[13px] sm:text-[14px] text-white font-semibold montserrat-secondary-font">
              Save Changes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
