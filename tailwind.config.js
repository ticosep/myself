/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
    mode: 'jit',
    purge: ['./src/**/*.tsx'],
    theme: {
        container: {
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
                '2xl': '1496px',
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
                groundAnimation: {
                    '0%': { backgroundPositionY: 0 },
                    '100%': { backgroundPositionY: 0 },
                },
                middleAnimation: {
                    '0%': { backgroundPositionY: 0 },
                    '100%': { backgroundPositionY: '50%' },
                },
                finalAnimation: {
                    '0%': { backgroundPositionY: '50%' },
                    '100%': { backgroundPositionY: '100%' },
                },
            },
            animation: {
                spinY: 'rotateYSpin 2s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'spin-semi-slow': 'spin 2s linear infinite',
                fade: 'fadeIn 0.5s ease-in-out',
                ground: 'groundAnimation 0.5s ease-in-out',
                middle: 'middleAnimation 0.5s ease-in-out',
                final: 'finalAnimation 0.5s ease-in-out',
            },
            backgroundImage: {
                ballon: "url('images/ballon.png')",
                skyArt: "url('images/sky.jpg')",
            },
        },
    },
    plugins: [require('autoprefixer')],
});
