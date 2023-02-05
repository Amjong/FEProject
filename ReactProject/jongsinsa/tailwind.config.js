/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('https://res.cloudinary.com/dazzvmx3y/image/upload/w_1000,ar_2:1,c_scale/v1673142546/BrandImage_eyjfx6.png')`,
      },
    },
  },
  plugins: [],
};
