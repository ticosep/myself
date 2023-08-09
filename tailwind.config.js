/** @type {import('tailwindcss').Config} */
module.exports = {
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
            boxShadow: {
                'shadow-sd': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            keyframes: {
                rotateYSpin: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            animation: {
                spinY: 'rotateYSpin 2s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'spin-semi-slow': 'spin 2s linear infinite',
            },
        },
    },
    plugins: [],
};
