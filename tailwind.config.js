/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
import plugin from 'tailwindcss/plugin';

module.exports = withMT({
    mode: 'jit',
    purge: ['./src/**/*.tsx'],
    theme: {
        screens: {
            'bg-max': { max: '1023px' },
        },
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            center: true,
        },
        extend: {
            colors: {
                blue: '#1fb6ff',
                purple: '#7e5bef',
                pink: '#ff49db',
                orange: '#ff7849',
                green: '#13ce66',
                yellow: '#ffc82c',
                'gray-dark': '#273444',
                gray: '#8492a6',
                'gray-light': '#d3dce6',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            rotate: {
                270: '270deg',
            },
            boxShadow: {
                'shadow-sd': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            keyframes: {
                rotateYSpin: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                groundAnimationUp: {
                    '0%': { backgroundPositionY: '100%' },
                    '100%': { backgroundPositionY: '100%' },
                },
                middleAnimationUp: {
                    '0%': { backgroundPositionY: '100%' },
                    '100%': { backgroundPositionY: '50%' },
                },
                finalAnimationUp: {
                    '0%': { backgroundPositionY: '50%' },
                    '100%': { backgroundPositionY: 0 },
                },
                groundAnimationDown: {
                    '0%': { backgroundPositionY: '50%' },
                    '100%': { backgroundPositionY: '100%' },
                },
                middleAnimationDown: {
                    '0%': { backgroundPositionY: '0' },
                    '100%': { backgroundPositionY: '50%' },
                },
                finalAnimationDown: {
                    '0%': { backgroundPositionY: 0 },
                    '100%': { backgroundPositionY: 0 },
                },
            },
            animation: {
                spinY: 'rotateYSpin 2s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'spin-semi-slow': 'spin 2s linear infinite',
                fade: 'fadeIn 0.5s ease-in-out',
                groundUp: 'groundAnimationUp 0.5s ease-in-out forwards',
                middleUp: 'middleAnimationUp 0.5s ease-in-out forwards',
                finalUp: 'finalAnimationUp 0.5s ease-in-out forwards',
                groundDown: 'groundAnimationDown 0.5s ease-in-out forwards',
                middleDown: 'middleAnimationDown 0.5s ease-in-out forwards',
                finalDown: 'finalAnimationDown 0.5s ease-in-out forwards',
            },
            backgroundImage: {
                ballon: "url('images/ballon.png')",
                skyArt: "url('images/sky.png')",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '26px' },
            });
        }),
        require('autoprefixer'),
    ],
});
