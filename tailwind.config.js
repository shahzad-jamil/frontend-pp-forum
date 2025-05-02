/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
      colors: {
        "primaryColor": " #141A28",
        "secondaryColor": " #7E7F81",
        "accentColor": " #FF3D00",
        "backgroundColor": " #3F9405",
        "backgroundTextColor": " #FFFFFF",
        "registerTextColor": " #4AB100",
        "FollowingTextColor": " #007AD9",
        "cardBackgroundColor": " #F5F7F9",
        "DarkcardBackgroundColor": "#FFFFFF0F",
        "buttonBackgroundColor": " #4AB100",
        "viewmoreButtonColor": " #E9ECF5",
        "chatboxBackgroundColor": " #F4F4F7",
        "discussionButtonColor": "#1E90FF",
        "articleButtonColor": "#FFA500",
        "pollButtonColor": "#8A2BE2",
        "questionButtonColor": "#E53935",
        "searchBorderColor": "#E6E6E7",
        "mixTopicBackgroundColor": "#3F94051A",
        "mixTopicDarkBackgroundColor": "#3F940526",
        "toggleButtonColor": "#79747E",
        "toggleBackgroundColor": "#E6E0E9",
        "chatBubbleColor": "#F4FFE5",
        "homeTabBackgroundColor": "#293651",
        "mixTopicsCardsBorder": "#3F940566",
        "mixTopicsOtherCardsBorder": "#F5F7F933",
        "listPollColor": "#98C32B",
        "discussionDetailCardBackground": "#F5F5F6",
        "postDiscussionCardBackground": "#F5F7F9",
        "massageBackground": "#EEEEEE",
        "chatTodayBorder": "#2626261A",
        "sportCardsDarkBorder": "#E6E6E733",
        "sportStatsBorder": "#141A2833",
        "sportStatsDarkBorder": "#F5F5F633",
        "popUpInputFieldsBorder": "#D0D0D1",
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        Montserrat: ["Montserrat"]
      },
    },
  },
  plugins: [],
}


