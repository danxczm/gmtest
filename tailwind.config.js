/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        screens: {
            mobile: '320px',
            tablet: '640px',
            desktop: '1280px',
        },
        extend: {
            colors: {
                blue: '#0177B8',
                green: '#179D2E',
                red: '#F02E2C',
                yellow: '#F5AF23',
            },
        },
    },
    safelist: [
        'border-blue',
        'border-green',
        'border-red',
        'border-yellow',
        'fill-blue',
        'fill-green',
        'fill-red',
        'fill-yellow',
    ],
    plugins: [],
};
