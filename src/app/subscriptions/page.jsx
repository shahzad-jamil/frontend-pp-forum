"use client";

import Image from "next/image";
import React, { useState } from "react";
import blueTick from "../../../public/bluetick.svg";
import greenTick from "../../../public/greentick.svg"; // assuming you have a green tick too

const Page = () => {
  const SubscriptionCards = [
    {
      title: "🔒 Free Plan",
      description: "No access to premium content",
      features: [
        "Access to public threads & discussions",
        "Create & reply to posts",
        "Basic profile customization",
        "Limited private messaging 5 per day",
        "Standard community support",
      ],
      price: "$0.00",
    },
    {
      title: "🔥 Pro Plan",
      description: "Everything in Free Plan +",
      features: [
        "Unlimited private messaging",
        "Access to exclusive members-only threads",
        "Ad-free browsing experience",
        "Priority support & faster response times",
        "Custom profile badges & flair",
      ],
      price: "$12.00",
    },
    {
      title: "🚀 Elite Plan",
      description: "Everything in Pro Plan +",
      features: [
        "Early access to new features & beta tools",
        "Enhanced analytics & engagement insights",
        "Monetization options",
        "Verified profile status",
        "Direct access to forum moderators & experts",
      ],
      price: "$24.00",
    },
  ];

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <>
      <div className="w-[100%] md:max-w-[82%] mx-auto my-[30px]">
        <div>
          <h1 className=" text-[24px] sm:text-[36px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat text-center">
            Subscriptions Plans
          </h1>
        </div>

        <div className="p-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SubscriptionCards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              className="p-[30px] hover:shadow-2xl cursor-pointer bg-cardBackgroundColor dark:bg-primaryColor/90 rounded-[10px] flex flex-col gap-[50px] transition-all duration-300"
            >
              {/* Top Button */}
              <div>
                <button
                  className={`py-3 px-8 rounded-[100px] text-backgroundTextColor text-[18px] font-[400] font-Montserrat transition-colors duration-300 ${hoveredCardIndex === index
                    ? "bg-primaryColor"
                    : "bg-buttonBackgroundColor"
                    }`}
                >
                  {card.title}
                </button>
              </div>

              {/* Description */}
              <p className="text-[12px] font-Montserrat font-[500] text-primaryColor dark:text-secondaryColor">
                {card.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-[10px]">
                {card.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-4">
                    <Image
                      src={
                        hoveredCardIndex === index
                          ? blueTick
                          : greenTick
                      }
                      alt="tick"
                      width={16}
                      height={16}
                    />
                    <p className="text-[12px] font-Montserrat font-[500] text-secondaryColor">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price & Choose Plan Button */}
              <div className="flex flex-col gap-[30px]">
                <div className="flex gap-1 items-center justify-center">
                  <h1 className="text-[39px] font-[700] font-Montserrat text-primaryColor dark:text-backgroundTextColor">
                    {card.price}
                  </h1>
                  <span className="text-[17px] font-[600] font-Montserrat text-secondaryColor">
                    /month
                  </span>
                </div>

                <div>
                  <button
                    className={`py-5 px-8 w-full rounded-[100px] text-backgroundTextColor dark:text-primaryColor text-[14px] font-[600] font-Montserrat transition-colors duration-300 border-none ${hoveredCardIndex === index
                      ? "bg-primaryColor dark:bg-backgroundTextColor "
                      : "bg-buttonBackgroundColor"
                      }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
