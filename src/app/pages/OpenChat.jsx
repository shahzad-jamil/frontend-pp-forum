"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// import report from "../../../public/report.svg";
// import attach from "../../../public/attachment.svg";
// import messgaePic from "../../../public/1 7.svg";
import UserDetailPanel from "../components/UserDetailPanel";
// import send from "../../../public/icons8_paper_plane 1.svg";
// import minimize from "../../../public/Vector.svg";

const OpenChat = ({ selectedUser, onClose }) => {
  const [reportPopup, setReportPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const dropdownRef = useRef(null);

  const toggleReportPopUp = () => {
    setReportPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReportPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full h-[90vh] relative">
      {/* Main Chat Section */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${showSidebar ? "hidden lg:flex" : "flex"}`}
      >

        {/* Header */}
        <div className="flex justify-between items-center border-b border-searchBorderColor dark:border-searchBorderColor/20  h-[61px]">
          <div className="flex gap-4 items-center">
            <button onClick={onClose} className="text-xl" aria-label="Close panel">
              <Image src="/Vector.svg" alt="minimize" width={20} height={20} className="rotate-180 w-5 h-5" />
            </button>
            <Image
              src={selectedUser.profileImage}
              alt="profile icon"
              width={42}
              height={42}
              className="cursor-pointer"
              onClick={() => setShowSidebar(true)}
            />
            <div className="flex flex-col">
              <h1 className="text-[16px] font-semibold montserrat-primary-font text-black dark:text-white">
                {selectedUser.name}
              </h1>
              <p className="text-[14px] text-gray-500">Online</p>
            </div>
          </div>

          <Image
            src="/report.svg"
            onClick={toggleReportPopUp}
            alt="report icon"
            width={42}
            height={42}
            className="cursor-pointer"
          />

          {/* Report Popup */}
          {reportPopup && (
            <div
              ref={dropdownRef}
              className="absolute top-20 right-4 lg:right-10 z-50 bg-white dark:bg-primaryColor p-6 rounded-[20px] shadow-2xl w-[90%] sm:w-[400px] lg:w-[500px] max-h-[80vh] overflow-y-auto"
            >
              <h1 className="text-[20px] sm:text-[24px] font-semibold mb-2">Report</h1>
              <p className="text-[14px] text-gray-600">Why are you reporting this post?</p>
              <p className="text-[12px] text-gray-500 mb-4">
                If someone is in immediate danger, get help before reporting to Forum PakPassion. Don’t wait.
              </p>
              {[
                "Problem involving someone under 18",
                "Bullying, harassment or abuse",
                "Suicide or self-harm",
                "Violent, hateful or disturbing content",
                "Selling or promoting restricted items",
                "Adult content",
                "Scam, fraud or false information",
                "Intellectual property",
                "I don't want to see this",
                "Others",
              ].map((label, idx) => (
                <label key={idx} className="flex items-start gap-3 text-sm mb-2">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>{label}</span>
                </label>
              ))}
              <textarea
                placeholder="Describe your concern (optional)"
                rows="3"
                className="w-full mt-2 p-3 border rounded-[12px] resize-none"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Send Report
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto chatbox-background-color dark:bg-primaryColor p-2 sm:p-5   space-y-8">
          {/* Message 1 */}
          <div className="flex gap-5 items-start">
            <Image src={selectedUser.profileImage} alt="chat dp" width={24} height={24} />
            <div className="flex flex-col gap-2">
              <Image src="/1 7.svg" alt="media" width={240} height={240} />
              <p className=" text-[14px] sm:text-[17px] text-registerTextColor montserrat-smallweigh-font mt-2 break-all">
                https://dribbble.com/shots/17742253-ui-kit-designjam
              </p>
              <div className="bg-massageBackground  dark:bg-mixTopicsOtherCardsBorder/5 p-4 rounded-[20px] w-fit">
                <p className="text-[14px] sm:text-[17px] montserrat-secondary-font text-primaryColor dark:text-backgroundTextColor">
                  {selectedUser.userMessage1}
                </p>
                <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color mt-1">15:42</p>
              </div>
            </div>
          </div>

          {/* Message 2 - User Reply */}
          <div className="flex justify-end">
            <div className="bg-massageBackground dark:bg-mixTopicsOtherCardsBorder/5 p-4 rounded-[20px] rounded-br-md w-fit">
              <p className="text-[14px] sm:text-[17px] montserrat-secondary-font text-primaryColor dark:text-backgroundTextColor">
                Thank you for work, see you!
              </p>
              <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color text-right ">15:42</p>
            </div>
          </div>

          {/* Today Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-grow border-t border-chatTodayBorder/10 dark:border-chatTodayBorder/100"></div>
            <span className="mx-4 text-[12px] montserrat-secondary-font secondary-text-color">Today</span>
            <div className="flex-grow border-t border-chatTodayBorder/10 dark:border-chatTodayBorder/100"></div>
          </div>

          {/* Message 3 */}
          <div className="flex gap-5 items-start">
            <Image src={selectedUser.profileImage} alt="chat dp" width={24} height={24} />
            <div className="bg-massageBackground dark:bg-mixTopicsOtherCardsBorder/5 p-4 rounded-[20px] rounded-tl-md w-fit">
              <p className="text-[14px] sm:text-[17px] montserrat-secondary-font text-primaryColor dark:text-backgroundTextColor">
                Hello! Have you seen my backpack anywhere in office?
              </p>
              <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color mt-1">15:42</p>
            </div>
          </div>

          {/* Message 4 - Reply */}
          <div className="flex justify-end">
            <div className="bg-massageBackground dark:bg-mixTopicsOtherCardsBorder/5 p-4 rounded-[20px] rounded-br-md w-fit">
              <p className="text-[14px] sm:text-[17px] montserrat-secondary-font text-primaryColor dark:text-backgroundTextColor">
                Hi, yes, David has found it. Ask our concierge 👀
              </p>
              <p className="text-[12px] sm:text-[14px] montserrat-secondary-font secondary-text-color text-right">15:42</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full dark:bg-homeTabBackgroundColor/5 flex flex-col sm:flex-row items-center gap-3 p-2 rounded-md">
          <div className="w-full flex">
            <Image src="/attachment.svg" alt="attach" width={40} height={40} className="cursor-pointer" />
            <input
              type="text"
              placeholder="Type your message here..."
              className=" w-full md:w-full sm:w-full text-[14px] bg-cardBackgroundColor dark:bg-homeTabBackgroundColor rounded-[100px] montserrat-secondary-font secondary-text-color
             dark:text-backgroundTextColor outline-none py-3 px-4"
            /> </div>
          <div className="md:w-full sm:w-[35%] lg:w-[35%] xl:w-[22%] h-full flex items-center justify-end">
            <button className="button-background-color w-full sm:w-auto h-[40px] rounded-[100px] px-6 py-8 sm:px-8 flex items-center justify-center gap-2">
              <h1 className="text-[11px] sm:text-[12px] cursor-pointer background-text-color font-semibold montserrat-secondary-font">
                Send Message
              </h1>
              <Image
                src="/icons8_paper_plane 1.svg"
                alt="send"
                width={18}
                height={18}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar Panel */}
      {showSidebar && (
        <div className="w-full lg:w-[38%]  h-[100%] xl:w-[25%] md:border-l border-searchBorderColor dark:border-searchBorderColor/20 z-20">
          <UserDetailPanel user={selectedUser} onClose={() => setShowSidebar(false)} />
        </div>
      )}
    </div>
  );
};

export default OpenChat;
