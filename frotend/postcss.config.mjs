const config = {
  plugins: {
    
    "@tailwindcss/postcss": {},
  },
   content: [
    
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // for Next.js 13+ app router
  ],
  
  
};

export default config;
