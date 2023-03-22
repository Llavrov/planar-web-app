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
        primary: 'rgba(255, 255, 255, 0.96)',
        secondary: 'rgba(255, 255, 255, 0.8)',
        tetriary: 'rgba(255, 255, 255, 0.5)',
        white10: 'rgba(255, 255, 255, 0.1)',

        'primary-button': 'linear-gradient(92.5deg, rgba(78, 79, 255, 0.6) -4.31%, rgba(157, 90, 255, 0.6) 99.24%)',
        'primary-button-hover': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(92.5deg, rgba(78, 79, 255, 0.6) -4.31%, rgba(157, 90, 255, 0.6) 99.24%)',
        'primary-button-error': 'linear-gradient(139.83deg, #6B45B0 13.25%, #B2344A 89.93%)',
        'secondary-button': 'rgba(255, 255, 255, 0.08)',
        'secondary-button-hover': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))',
        'input-text': 'rgba(255, 255, 255, 0.6)',
        'brand-gradient': 'linear-gradient(140deg, #4E4FFF 13.25%, #9D5AFF 90%)',
        'purple-gradient': 'linear-gradient(140deg, #9D5AFF 13.25%, #C393FF 68%)',
        'error-gradient': 'linear-gradient(140deg, #6B45B0 13.25%, #B2344A 90%)',

        'slider-border-gradient': 'linear-gradient(140deg, #4e4fff 13.25%, #9d5aff 90%)',
        'slider-border-bg': 'rgba(222, 222, 222, 0.05)',
      },
      backgroundColor: {
        primary: 'rgba(55, 110, 164, 0.06)',
        secondary: 'rgba(195, 195, 195, 0.04)',
        tertiary: 'rgba(195, 195, 195, 0.08)',
        slider: 'rgba(246, 246, 246, 0.04)',
        artboard: 'rgba(20, 20, 20, 1)',
        'page-bg': 'rgba(13, 13, 13, 1)',
        'accent-blue': 'rgba(78, 79, 255, 1)',
        'accent-purple': 'rgba(157, 90, 255, 1)',
      },
      borderColor: {
        primary: 'rgba(255, 255, 255, 0.1)',
      },
      maxWidth: {
        'card_m': '245px',
        'modal_lg': '552px',
      },
      minHeight: {
        'card_m': '216px',
      }
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      'icon-1': '24px',
      'icon-2': '32px',
    },
    fontSize: {
      'heading-s': ['20px', { fontWeight: '600' }],
      'heading-m': ['24px', { fontWeight: '600' }],
      'heading-l': ['32px', { fontWeight: '600' }],
      'text-s': ['12px'],
      'text-sm': ['14px'],
      'text-m': ['16px'],
      'text-l': ['18px'],
      'accent-l': ['18px', { fontWeight: '500' }],
    },
    borderRadius: {
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      input: '8px',
    },
    lineHeight: {
      none: '1',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
    },
    backdropBlur: {
      0: '0px',
      bg: '100px',
      slider: '40px',
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    }
  },
  plugins: [],
}