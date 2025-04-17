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
      colors: {
        "primaryColor": " #141A28",
        "secondaryColor": " #7E7F81",
        "accentColor": " #FF3D00",
        "backgroundColor": " #3F9405",
        "backgroundTextColor": " #FFFFFF",
        "registerTextColor": " #4AB100",
        "FollowingTextColor": " #007AD9",
        "cardBackgroundColor": " #F5F7F9",
        "buttonBackgroundColor": " #4AB100",
        "viewmoreButtonColor": " #E9ECF5",
        "chatboxBackgroundColor": " #F4F4F7",
        "discussionButtonColor": "#1E90FF",
        "articleButtonColor": "#FFA500",
        "pollButtonColor": "#8A2BE2",
        "questionButtonColor": "#E53935",

      }
    },
  },
  plugins: [],
}


