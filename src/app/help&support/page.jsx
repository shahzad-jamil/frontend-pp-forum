"use client"
import React, { useState } from "react";
import Image from "next/image";
import minus from "../../../public/icons8_minus 2.svg";
import plus from "../../../public/icons8_Plus 2.svg";
import email from "../../../public/mail-02.svg";
import customerService from "../../../public/customer-service-02.svg";
import chat from "../../../public/comment-01.svg";
import chatBubble from "../../../public/icons8_chat 1.svg";

const Page = () => {
  const initialFaqList = [
    {
      question: "How do I register on Pak Passion Forum?",
      answer:
        "You can register by clicking on the “Sign Up” button at the top right corner of the homepage. Fill in the required details and verify your email to activate your account.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your email, and follow the instructions sent to reset your password.",
    },
    {
      question: "How do I start a new discussion?",
      answer:
        "Go to the relevant category and click on 'New Thread' to start your discussion after logging in.",
    },
    {
      question: "Are there any posting rules?",
      answer:
        "Yes. Please refer to our Community Guidelines to ensure your posts comply with forum rules.",
    },
    {
      question: "How can I report inappropriate content?",
      answer:
        "Click the 'Report' button on the post you find inappropriate and our moderators will review it.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close
        : [...prev, index] // open
    );
  };

  return (
    <>
      <div className="w-[100%] md:max-w-[100%] xl:max-w-[82%] p-[10px] mx-auto my-[30px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[24px] sm:text-[36px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat">
            Help Centre
          </h1>
        </div>

        {/* FAQ Section */}
        <section className="bg-cardBackgroundColor dark:bg-secondaryColor/5 w-full p-[20px] rounded-[20px] mt-6">
          <div className="border-b border-searchBorderColor dark:border-searchBorderColor/20 pb-[30px]">
            <h2 className="text-[16px] sm:text-[20px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {initialFaqList.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="border-b border-searchBorderColor dark:border-searchBorderColor/20 py-[10px] transition-all duration-300 ease-in-out"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:w-[60%] flex flex-col gap-2">
                      <div className="flex gap-2 items-start">
                        <span className="text-[14px] sm:text-[18px] text-primaryColor dark:text-backgroundTextColor font-[600]">
                          {index + 1}.
                        </span>
                        <h3 className="text-[14px] sm:text-[18px] text-primaryColor dark:text-backgroundTextColor font-[600]">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-[12px] sm:text-[14px]  text-secondaryColor font-[400]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-[40%] flex justify-end mt-2 sm:mt-0 cursor-pointer">
                      <Image
                        src={isOpen ? minus : plus}
                        alt={isOpen ? "Collapse" : "Expand"}
                        width={30}
                        height={30}
                        onClick={() => toggleAnswer(index)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-cardBackgroundColor dark:bg-secondaryColor/5 w-full p-[20px] rounded-[20px] mt-6">
          <div className="border-b border-searchBorderColor dark:border-searchBorderColor/20 pb-[30px]">
            <h2 className="text-[16px] sm:text-[20px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat">
              You can reach out to our support team via:
            </h2>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-[50px] p-[10px] my-[10px]">
            {/* Support Card */}
            {[
              {
                icon: email,
                title: "Email:",
                description: "support@pakpassion.com",
              },
              {
                icon: chat,
                title: "Chat Bot:",
                description: "Talk to our chat bot.",
              },
              {
                icon: customerService,
                title: "Forum Helpdesk:",
                description: "Support Thread",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-primaryColor/40 flex flex-col gap-[20px] h-[165px] justify-center items-center rounded-[20px]"
              >
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-[5px] sm:gap-[10px] items-center text-center">
                  <h2 className="text-[14px] sm:text-[16px] text-buttonBackgroundColor font-[600] font-Montserrat">
                    {item.title}
                  </h2>
                  <h2 className="text-[14px] sm:text-[16px] dark:text-secondaryColor text-primaryColor font-[600] font-Montserrat">
                    {item.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section and Chat Bubble (unchanged) */}
        {/* ...keep your support section and chat bubble here unchanged... */}
      </div>

      <div className="fixed right-[5%] bottom-[5%] flex justify-center items-center rounded-full p-[5px] bg-chatBubbleColor shadow-2xl cursor-pointer w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
        <Image src={chatBubble} alt="Chat Support" width={40} height={40} />
      </div>
    </>
  );
};

export default Page;
