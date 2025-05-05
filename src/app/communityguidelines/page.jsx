import React from "react";
import Image from "next/image";
// import chatBubble from "../../../public/icons8_chat 1.svg";

const page = () => {
  const forumRules = [
    {
      title: "Respect & Courtesy",
      description: [
        "Be respectful to all members, even when opinions differ.",
        "No personal attacks, hate speech, or harassment.",
        "Avoid excessive use of offensive language.",
      ],
    },
    {
      title: "No Spam & Self-Promotion",
      description: [
        "Do not post advertisements, affiliate links, or promotional content.",
        "Avoid excessive posting of repetitive messages or irrelevant topics.",
      ],
    },
    {
      title: "Stay on Topic",
      description: [
        "Keep discussions relevant to the section in which they are posted.",
        "Avoid derailing discussions with unrelated content.",
      ],
    },
    {
      title: "No Copyrighted or Illegal Content",
      description: [
        "Do not share pirated content, copyrighted material, or unauthorized streams.",
        "Follow all applicable laws when sharing news or content.",
      ],
    },
    {
      title: "No Fake News or Misinformation",
      description: [
        "Ensure that any information shared is accurate and credible.",
        "Avoid spreading unverified rumours about players, teams, or events.",
      ],
    },
    {
      title: "No Duplicate or Sensationalist Threads",
      description: [
        "Before starting a new thread, check if a similar discussion already exists.",
        "Avoid exaggerated or misleading titles for clickbait.",
      ],
    },
    {
      title: "Moderation & Enforcement",
      description: [
        "Our moderators reserve the right to remove posts that violate these rules.",
        "Repeated violations may result in temporary suspension or a permanent ban.",
      ],
    },
  ];

  return (
    <>
      <div className="w-[100%] md:max-w-[100%] xl:max-w-[82%] p-[10px] mx-auto my-[30px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[24px] sm:text-[36px] text-primaryColor dark:text-backgroundTextColor font-[700] font-Montserrat">
            Community Guidelines & Policies
          </h1>
        </div>

        {/* Forum Rules Section */}
        <section className="bg-cardBackgroundColor dark:bg-primaryColor/90 w-full p-[20px] rounded-[20px] mt-6">
          <div className="border-b border-searchBorderColor dark:border-searchBorderColor/20 pb-[30px]">
            <h2 className="text-[12px] sm:text-[16px] text-primaryColor dark:text-backgroundTextColor font-[400] font-Montserrat">
              Welcome to PakPassion Forum, a place for cricket fans to share their thoughts, discuss matches, and connect with fellow enthusiasts. To maintain a healthy community, we ask all members to follow these guidelines.
            </h2>
          </div>

          {/* Forum Rules List */}
          <div className="flex flex-col gap-6 mt-4">
            {forumRules.map((rule, index) => (
              <div key={index} className=" pb-[10px]">
                <div className="flex gap-2 items-start mb-2">
                  <span className="text-[14px] sm:text-[16px] text-primaryColor dark:text-backgroundTextColor font-Montserrat font-[600]">
                    {index + 1}.
                  </span>
                  <h3 className="text-[14px] sm:text-[16px] text-primaryColor dark:text-backgroundTextColor font-Montserrat font-[600]">
                    {rule.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside ml-6">
                  {rule.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-[12px] sm:text-[16px] text-secondaryColor font-Montserrat font-[400]"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-b border-searchBorderColor dark:border-searchBorderColor/20 pb-[30px]">
            <h2 className="text-[12px] sm:text-[16px] text-primaryColor dark:text-backgroundTextColor font-[400] font-Montserrat">
              By participating in PakPassion Forum, you agree to these guidelines. If you have any concerns, feel free to contact our support team.
              Happy Posting! 🏏
            </h2>
          </div>
        </section>
      </div>

      {/* Floating Chat Bubble */}
      <div className="fixed right-[5%] bottom-[5%] flex justify-center items-center rounded-full p-[5px] bg-chatBubbleColor shadow-2xl cursor-pointer w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
        {/* <Image src={chatBubble} alt="Chat Support" width={40} height={40} /> */}
        <Image
          src="/icons8_chat 1.svg"
          alt="chat Icon"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default page;
