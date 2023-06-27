import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rebond-Grotesque", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          black: "#000000",
          white: "#ffffff",
          tango: "#f37e25",
          "doge-blue": "#25b6f4",
          "cinnabar-error": "#e64f22",
          "atlantis-success": "#7edb3a",
          buttercup: "#f3b126",
          "visa-white-light": "#fcf9f8",
          "nightrider-dark": "#120c08",
          "wafer-neu": "#dcd1c8",
        },
        neutrals: {
          gray: "#919191",
          dawn: "#a09e9c",
          cloudy: "#b1aba5",
          tide: "#c0b7af",
          "silver-rust": "#cec3ba",
          "wafer-m": "#dcd1c8",
          "pearl-bush": "#e7ddd5",
          "dawn-pink": "#f1eae4",
          "spring-wood": "#f9f5f1",
          "vista-white": "#FCF9F8",
        },
      },
    },
    screens: {
      desktop: "1024px",
      tablet: "768px",
      mobile: { max: "767px" },
    },
    backgroundImage: {
      gradient:
        "linear-gradient(179.54deg, #7B4C28 0.34%, rgba(243, 126, 37, 0) 101.42%)",
    },
  },
};
