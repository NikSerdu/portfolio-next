const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#b21eb2",
        black: "#131313",
        grey: "#a1a1a1",
      },
      boxShadow: {
        primary: "0px 0px 10px 0px rgba(184,0,184,1)",
      },
    },
  },
  plugins: [],
};

export default config;
