/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // <- makes sure files are covered!
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#FFFFFF",
        lightRed: "#EB664E",
        darkRed: "#A63446",
        shadows50Percent: "#1A1A1A80",
        shadows70Percent: "#3D3E3FB2",
        darkBlue: "#031928",
        dark: "#1A1A1A",
        gray: "#00000080",
      },
    },
  },
  plugins: [],
};
