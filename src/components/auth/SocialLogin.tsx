import Image from "next/image";
import React from "react";

interface Provider {
  name: "google" | "facebook" | "apple";
  iconSrc: string;
  onClick?: () => void;
}

interface SocialLoginButtonsProps {
  providers?: Provider[];
}

const defaultProviders: Provider[] = [
  {
    name: "google",
    iconSrc: "/icons8_google 1.svg",
  },
  {
    name: "facebook",
    iconSrc: "/icons8_facebook_circled 1.svg",
  },
  {
    name: "apple",
    iconSrc: "/icons8_Apple_Inc 1.svg",
  },
];

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ providers = defaultProviders }) => {
  return (
    <div className="w-full flex gap-[30px] mt-[20px]">
      {providers.map((provider) => (
        <button
          key={provider.name}
          onClick={provider.onClick}
          type="button"
          className="flex items-center justify-center w-full border-color cursor-pointer hover:bg-primaryColor/20 dark:hover:bg-secondaryColor/30 transition duration-100 rounded-[100px] p-3"
          aria-label={`Continue with ${provider.name}`}
        >
          <Image src={provider.iconSrc} alt={provider.name} width={34} height={34} />
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;
