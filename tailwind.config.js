/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.96)",
        secondary: "rgba(255, 255, 255, 0.8)",
        tetriary: "rgba(255, 255, 255, 0.5)",
        white10: "rgba(255, 255, 255, 0.1)",
        "secondary-button": "rgba(255, 255, 255, 0.08)",
        "input-text": "rgba(255, 255, 255, 0.6)",
        "brand-gradient":
          "linear-gradient(140deg, #4E4FFF 13.25%, #9D5AFF 90%)",
        "purple-gradient":
          "linear-gradient(140deg, #9D5AFF 13.25%, #C393FF 68%)",
        "error-gradient":
          "linear-gradient(140deg, #6B45B0 13.25%, #B2344A 90%)",

        "slider-border-gradient":
          "linear-gradient(140deg, #4e4fff 13.25%, #9d5aff 90%)",
        "slider-border-bg": "rgba(222, 222, 222, 0.05)",
      },
      backgroundColor: {
        primary: "rgba(55, 110, 164, 0.06)",
        secondary: "rgba(195, 195, 195, 0.04)",
        tertiary: "rgba(195, 195, 195, 0.08)",
        slider: "rgba(246, 246, 246, 0.04)",
        artboard: "rgba(20, 20, 20, 1)",
        dark: "rgba(23, 23, 23, 0.3)",
        darkHeader: "rgba(27, 27, 27, 1)",
        primaryCard: "rgba(255, 255, 255, 0.96)",
        blackGradient:
          "linear-gradient(180deg, rgba(23, 23, 23, 0.5) 0%, rgba(23, 23, 23, 0) 100%)",
        "account-primary": "rgba(255, 255, 255, 0.08)",
        "account-bg": "rgba(248, 213, 168, 1)",
        "page-bg": "rgba(13, 13, 13, 1)",
        "accent-blue": "rgba(78, 79, 255, 1)",
        "accent-purple": "rgba(157, 90, 255, 1)",
      },
      backgroundImage: {
        "primary-button":
          "linear-gradient(90deg, rgba(78, 79, 255, 0.6) -4%, rgba(157, 90, 255, 0.6) 100%)",
        "primary-button-hover":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(92.5deg, rgba(78, 79, 255, 0.6) -4%, rgba(157, 90, 255, 0.6) 100%)",
        "secondary-button-hover":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        "brand-gradient":
          "linear-gradient(140deg, #4E4FFF 13.25%, #9D5AFF 90%)",
        "purple-gradient":
          "linear-gradient(140deg, #9D5AFF 13.25%, #C393FF 68%)",
        "error-gradient":
          "linear-gradient(140deg, #6B45B0 13.25%, #B2344A 90%)",
        blackGradient:
          "linear-gradient(180deg, rgba(23, 23, 23, 0.5) 0%, rgba(23, 23, 23, 0) 100%)",
      },
      borderColor: {
        primary: "rgba(255, 255, 255, 0.1)",
        secondary: "rgba(255, 255, 255, 0.04)",
      },
      maxWidth: {
        card_m: "245px",
        modal_lg: "552px",
      },
      minHeight: {
        card_m: "216px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      bd: "1360px",
      // => @media (min-width: 1360px) { ... }
    },
    spacing: {
      px: "1px",
      0: "0px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      "icon-1": "24px",
      "icon-2": "32px",
    },
    fontSize: {
      "heading-ss": ["18px", { fontWeight: "500" }],
      "heading-s": ["20px", { fontWeight: "600", lineHeight: "24px" }],
      "heading-m": ["24px", { fontWeight: "600" }],
      "heading-l": ["32px", { fontWeight: "600" }],
      "text-s": ["12px", { lineHeight: "15px" }],
      "text-sm": ["14px"],
      "text-m": ["16px"],
      "text-l": ["18px"],
      "text-l-bold": ["18px", { fontWeight: "600" }],
      "accent-l": ["18px", { fontWeight: "500" }],
    },
    borderRadius: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      input: "8px",
    },
    lineHeight: {
      none: "1",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
    },
    backdropBlur: {
      0: "0px",
      bg: "100px",
      slider: "40px",
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  plugins: [],
};
